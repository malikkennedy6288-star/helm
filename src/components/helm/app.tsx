import { useEffect, useMemo, useState } from "react";
import {
  Image,
  KeyRound,
  LayoutDashboard,
  MapPin,
  Menu,
  Palette,
  ScrollText,
  Search,
  Shield,
  SlidersHorizontal,
  Crown,
  Users,
  Wifi,
} from "lucide-react";
import { Toaster, toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  AuditPanel,
  FieldsPanel,
  MembersPanel,
  NetworkPanel,
  OverviewPanel,
  OwnerPanel,
  PermissionsPanel,
  WallpaperPanel,
} from "@/components/helm/sections";
import { cn } from "@/lib/utils";
import { resolveWallpaper } from "@/lib/wallpapers";
import {
  NAV,
  ROOT_MEMBER_ID,
  SECTION_FIELDS,
  ensureRoot,
  useAccess,
  useActor,
  useControl,
  type SectionId,
} from "@/lib/control";

const ICONS: Record<SectionId, typeof LayoutDashboard> = {
  overview: LayoutDashboard,
  wallpaper: Image,
  appearance: Palette,
  owner: Crown,
  location: MapPin,
  network: Wifi,
  security: Shield,
  global: SlidersHorizontal,
  members: Users,
  permissions: KeyRound,
  audit: ScrollText,
};

export function HelmApp() {
  const settings = useControl((s) => s.draft.settings);
  const section = useControl((s) => s.section);
  const simulating = useControl((s) => s.simulating);

  useEffect(() => {
    let cancelled = false;
    void Promise.resolve(useControl.persist.rehydrate()).then(() => {
      if (cancelled) return;
      const s = useControl.getState();
      useControl.setState({
        draft: ensureRoot(s.draft),
        saved: ensureRoot(s.saved),
        actorId: ROOT_MEMBER_ID,
        simulating: false,
        hydrated: true,
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const apply = () => {
      const theme =
        settings.theme === "system"
          ? window.matchMedia("(prefers-color-scheme: light)").matches
            ? "light"
            : "dark"
          : settings.theme;
      root.dataset.theme = theme;
      root.dataset.density = settings.density;
      root.dataset.motion = settings.reduceMotion ? "off" : "on";
    };
    apply();
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [settings.theme, settings.density, settings.reduceMotion]);

  const resolvedTheme =
    settings.theme === "system"
      ? undefined
      : settings.theme;

  const paper = resolveWallpaper(settings);

  return (
    <TooltipProvider delayDuration={200}>
      <div className="relative min-h-dvh text-fg">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {paper.kind === "photo" ? (
            <img
              src={paper.src}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full" style={{ background: paper.wash }} />
          )}
          <div className="absolute inset-0 bg-bg/72" />
        </div>
        <div className="relative flex min-h-dvh flex-col p-0 sm:p-3">
          {simulating ? <SimBanner /> : null}
          <div className="flex min-h-0 flex-1 overflow-hidden sm:rounded-2xl sm:bg-bg/90 sm:shadow-[var(--shadow-border)]">
            <DesktopNav />
            <div className="flex min-w-0 flex-1 flex-col bg-bg/40">
              <TopBar />
              <main className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-8">
                <div className="mx-auto w-full max-w-4xl pb-24">
                  <SectionBody section={section} />
                </div>
              </main>
            </div>
          </div>
          <CommandPalette />
        </div>
      </div>
      <CommandPalette />
      <Toaster
        theme={resolvedTheme === "light" ? "light" : "dark"}
        position="bottom-right"
        toastOptions={{
          classNames: {
            toast: "bg-surface text-fg shadow-[var(--shadow-border)] border-0",
            title: "text-fg",
            description: "text-muted",
          },
        }}
      />
    </TooltipProvider>
  );
}

function SectionBody({ section }: { section: SectionId }) {
  switch (section) {
    case "overview":
      return <OverviewPanel />;
    case "wallpaper":
      return <WallpaperPanel />;
    case "appearance":
      return (
        <FieldsPanel
          section="appearance"
          kicker="Workspace"
          title="Appearance"
          body="Theme, density, and motion. Changes apply while you edit — save to keep them."
        />
      );
    case "owner":
      return <OwnerPanel />;
    case "location":
      return (
        <FieldsPanel
          section="location"
          kicker="Workspace"
          title="Town"
          body="Town, region, country, and timezone. Locale for this system, set without a request."
        />
      );
    case "network":
      return <NetworkPanel />;
    case "security":
      return (
        <FieldsPanel
          section="security"
          kicker="System"
          title="Secure"
          body="Harden the box in one pass, or flip any control yourself. Root is not asked twice."
        />
      );
    case "global":
      return (
        <FieldsPanel
          section="global"
          kicker="System"
          title="Global"
          body="System-wide defaults — name, updates, radios, diagnostics. Everything is on the table."
        />
      );
    case "members":
      return <MembersPanel />;
    case "permissions":
      return <PermissionsPanel />;
    case "audit":
      return <AuditPanel />;
    default:
      return <OverviewPanel />;
  }
}

function NavList({ onPick }: { onPick?: () => void }) {
  const section = useControl((s) => s.section);
  const setSection = useControl((s) => s.setSection);
  const labels = useControl((s) => s.draft.settings.sidebarLabels);
  const simulating = useControl((s) => s.simulating);
  const actorId = useControl((s) => s.actorId);
  const draft = useControl((s) => s.draft);

  const groups = ["Workspace", "System", "Access"] as const;

  return (
    <nav className="flex flex-col gap-5 px-3 py-2">
      {groups.map((group) => (
        <div key={group}>
          {labels ? (
            <p className="mb-1 px-2 text-[11px] font-medium uppercase tracking-[0.16em] text-subtle">
              {group}
            </p>
          ) : null}
          <ul className="space-y-0.5">
            {NAV.filter((n) => n.group === group).map((item) => {
              const Icon = ICONS[item.id];
              const hidden =
                simulating &&
                item.resource &&
                (() => {
                  const member = draft.members.find((m) => m.id === actorId);
                  const role = draft.roles.find((r) => r.id === member?.roleId);
                  return role && !role.locked ? role.grants[item.resource] === "none" : false;
                })();
              if (hidden) return null;
              const active = section === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setSection(item.id);
                      onPick?.();
                    }}
                    className={cn(
                      "flex h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm font-medium transition-[background-color,color] duration-150",
                      active ? "bg-raised text-fg" : "text-muted hover:bg-raised/70 hover:text-fg",
                    )}
                  >
                    <Icon className="size-4 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function DesktopNav() {
  const name = useControl((s) => s.draft.settings.systemName);
  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-border bg-surface/80 md:flex">
      <div className="flex items-center gap-2.5 px-5 py-5">
        <HelmMark />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold tracking-tight">Helm</p>
          <p className="truncate text-xs text-subtle">{name}</p>
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto pb-4">
        <NavList />
      </div>
      <div className="border-t border-border p-3">
        <RootChip />
      </div>
    </aside>
  );
}

function HelmMark() {
  return (
    <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-accent-fg">
      <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
        <path
          d="M6 8.2C6 6.4 7.5 5 9.3 5h5.4C16.5 5 18 6.4 18 8.2v7.2c0 1.2-1.3 2-2.4 1.55L12 15.4l-3.6 1.55C7.3 17.4 6 16.6 6 15.4V8.2Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="9.6" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 11.1v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function RootChip() {
  const actor = useActor();
  const returnToRoot = useControl((s) => s.returnToRoot);
  if (actor.isRoot) {
    return (
      <div className="flex items-center gap-2 rounded-xl bg-raised px-3 py-2.5 shadow-[var(--shadow-border)]">
        <span className="flex size-7 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-fg">
          R
        </span>
        <div className="min-w-0">
          <p className="text-sm font-medium leading-none">Root</p>
          <p className="mt-1 text-[11px] text-subtle">Full write · no red tape</p>
        </div>
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={returnToRoot}
      className="flex w-full items-center gap-2 rounded-xl bg-raised px-3 py-2.5 text-left shadow-[var(--shadow-border)]"
    >
      <span className="flex size-7 items-center justify-center rounded-full bg-raised text-[10px] font-semibold shadow-[var(--shadow-border)]">
        {actor.member.initials}
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium leading-none">{actor.member.name}</p>
        <p className="mt-1 text-[11px] text-subtle">Return to Root</p>
      </div>
    </button>
  );
}

function TopBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const setCommand = useCommandOpen();
  const actor = useActor();
  const members = useControl((s) => s.draft.members);
  const simulate = useControl((s) => s.simulate);
  const returnToRoot = useControl((s) => s.returnToRoot);
  const resetFactory = useControl((s) => s.resetFactory);
  const access = useAccess(
    useControl((s) => {
      const item = NAV.find((n) => n.id === s.section);
      return item?.resource ?? "global";
    }),
  );
  const section = useControl((s) => s.section);

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-3 sm:h-16 sm:px-5">
      <Button
        size="icon-sm"
        variant="ghost"
        className="md:hidden"
        aria-label="Open menu"
        onClick={() => setMobileOpen(true)}
      >
        <Menu className="size-4" />
      </Button>
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent>
          <div className="flex items-center gap-2 px-5 py-5">
            <HelmMark />
            <p className="text-sm font-semibold">Helm</p>
          </div>
          <div className="overflow-y-auto pb-8">
            <NavList onPick={() => setMobileOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
      <button
        type="button"
        onClick={() => setCommand(true)}
        className="hidden h-10 min-w-0 flex-1 items-center gap-2 rounded-lg bg-raised px-3 text-left text-sm text-subtle shadow-[var(--shadow-border)] sm:flex"
      >
        <Search className="size-4" />
        <span className="truncate">Search settings</span>
        <kbd className="ml-auto rounded bg-bg px-1.5 py-0.5 font-mono text-[10px] text-muted">
          ⌘K
        </kbd>
      </button>
      <Button
        size="icon-sm"
        variant="ghost"
        className="sm:hidden"
        aria-label="Search"
        onClick={() => setCommand(true)}
      >
        <Search className="size-4" />
      </Button>
      <div className="ml-auto flex items-center gap-2">
        {section !== "overview" ? (
          <Badge
            className="hidden sm:inline-flex"
            variant={access === "write" ? "write" : access === "read" ? "read" : "none"}
          >
            {access === "write" ? "Write" : access === "read" ? "Read" : "No access"}
          </Badge>
        ) : (
          <Badge className="hidden sm:inline-flex" variant="root">
            Root session
          </Badge>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="sm" className="gap-2">
              <span className="flex size-5 items-center justify-center rounded-full bg-accent text-[9px] font-semibold text-accent-fg">
                {actor.member.initials}
              </span>
              <span className="hidden max-w-28 truncate sm:inline">
                {actor.isRoot ? "Root" : actor.member.name}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Run as</DropdownMenuLabel>
            {members.map((m) => (
              <DropdownMenuItem
                key={m.id}
                onSelect={() => (m.id === ROOT_MEMBER_ID ? returnToRoot() : simulate(m.id))}
              >
                {m.name}
                {m.id === ROOT_MEMBER_ID ? (
                  <span className="ml-auto text-[11px] text-subtle">always</span>
                ) : null}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={() => {
                resetFactory();
                toast("Restored factory defaults");
              }}
            >
              Reset everything
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => returnToRoot()}>Return to Root</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

function SimBanner() {
  const actor = useActor();
  const returnToRoot = useControl((s) => s.returnToRoot);
  return (
    <div className="flex items-center justify-between gap-3 bg-accent px-4 py-2 text-sm text-accent-fg sm:rounded-t-2xl">
      <p className="min-w-0 truncate">
        Previewing {actor.member.name} · {actor.role.name}. Root is still in charge.
      </p>
      <Button size="sm" variant="secondary" onClick={returnToRoot}>
        Return to Root
      </Button>
    </div>
  );
}

let setCommandOpen: (open: boolean) => void = () => {};
function useCommandOpen() {
  const [, setTick] = useState(0);
  return (open: boolean) => {
    setCommandOpen(open);
    setTick((n) => n + 1);
  };
}

function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const setSection = useControl((s) => s.setSection);
  setCommandOpen = (v) => {
    setOpen(v);
    if (v) setQ("");
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        setQ("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    const items: { id: string; label: string; hint: string; section: SectionId }[] = NAV.map(
      (n) => ({
        id: n.id,
        label: n.label,
        hint: n.group,
        section: n.id,
      }),
    );
    for (const [section, fields] of Object.entries(SECTION_FIELDS)) {
      for (const f of fields ?? []) {
        items.push({
          id: f.key,
          label: f.label,
          hint: section,
          section: section as SectionId,
        });
      }
    }
    if (!query) return items.slice(0, 12);
    return items.filter(
      (i) => i.label.toLowerCase().includes(query) || i.hint.toLowerCase().includes(query),
    );
  }, [q]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Search settings</DialogTitle>
          <DialogDescription>Jump to any panel or control</DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2 border-b border-border px-3">
          <Search className="size-4 text-muted" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Jump to a setting"
            className="h-12 border-0 bg-transparent shadow-none focus-visible:shadow-none"
            autoFocus
          />
        </div>
        <ul className="max-h-72 overflow-y-auto p-2">
          {results.length === 0 ? (
            <li className="px-3 py-6 text-center text-sm text-muted">Nothing matches.</li>
          ) : (
            results.map((r) => (
              <li key={r.id + r.section}>
                <button
                  type="button"
                  className="flex h-11 w-full items-center justify-between rounded-lg px-3 text-sm hover:bg-raised"
                  onClick={() => {
                    setSection(r.section);
                    setOpen(false);
                  }}
                >
                  <span>{r.label}</span>
                  <span className="text-xs capitalize text-subtle">{r.hint}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
