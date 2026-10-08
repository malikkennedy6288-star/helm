import { useMemo, useState, type ReactNode } from "react";
import {
  Check,
  Crown,
  Lock,
  Plus,
  ShieldCheck,
  Signal,
  Trash2,
  Wifi,
  WifiOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { NativeSelect } from "@/components/ui/native-select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AccessBanner, Denied, FieldList } from "@/components/helm/fields";
import { cn } from "@/lib/utils";
import { WALLPAPERS, resolveWallpaper } from "@/lib/wallpapers";
import {
  RESOURCES,
  ROOT_MEMBER_ID,
  ROOT_ROLE_ID,
  SECTION_FIELDS,
  canWrite,
  countGrants,
  memberById,
  roleById,
  securityScore,
  useAccess,
  useControl,
  type Access,
  type ResourceId,
  type WifiSecurity,
} from "@/lib/control";

const TOWNS = [
  { town: "Harborwick", region: "New York", country: "US", postal: "11222", timezone: "America/New_York" },
  { town: "Austin", region: "Texas", country: "US", postal: "78701", timezone: "America/Chicago" },
  { town: "London", region: "England", country: "GB", postal: "EC1A", timezone: "Europe/London" },
  { town: "Berlin", region: "Berlin", country: "DE", postal: "10115", timezone: "Europe/Berlin" },
  { town: "Tokyo", region: "Tokyo", country: "JP", postal: "100-0001", timezone: "Asia/Tokyo" },
  { town: "Sydney", region: "New South Wales", country: "AU", postal: "2000", timezone: "Australia/Sydney" },
] as const;

function TownPresets({ disabled }: { disabled: boolean }) {
  const town = useControl((s) => s.draft.settings.town);
  const applyTown = useControl((s) => s.applyTown);
  return (
    <div className="mb-4 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
      <p className="text-sm font-medium">Set the town</p>
      <p className="mt-1 text-sm text-muted">One tap fills town, region, country, postal code, and timezone.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {TOWNS.map((t) => (
          <button
            key={t.town}
            type="button"
            disabled={disabled}
            onClick={() => applyTown(t)}
            className={cn(
              "h-11 rounded-full px-4 text-sm font-medium shadow-[var(--shadow-border)]",
              town === t.town ? "bg-accent text-accent-fg" : "bg-raised text-fg",
            )}
          >
            {t.town}
          </button>
        ))}
      </div>
    </div>
  );
}

function SectionHead({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <header className="mb-6 max-w-2xl">
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-subtle">{kicker}</p>
      <h1 className="mt-1 text-2xl font-semibold tracking-tight text-fg sm:text-[1.75rem]">
        {title}
      </h1>
      <p className="mt-2 text-sm text-muted">{body}</p>
    </header>
  );
}

export function OverviewPanel() {
  const draft = useControl((s) => s.draft);
  const setSection = useControl((s) => s.setSection);
  const hardenSystem = useControl((s) => s.hardenSystem);
  const grants = countGrants(draft.roles);
  const score = securityScore(draft.settings);
  const owner = memberById(draft, draft.settings.ownerMemberId);
  const wifi = draft.networks.find((n) => n.connected);
  const paper = resolveWallpaper(draft.settings);

  const tiles = [
    { label: "Owner", value: owner?.name ?? "Unset", go: "owner" as const },
    { label: "Town", value: draft.settings.town, go: "location" as const },
    { label: "Network", value: wifi?.ssid ?? "Offline", go: "network" as const },
    { label: "Wallpaper", value: paper.name, go: "wallpaper" as const },
  ];

  return (
    <div>
      <SectionHead
        kicker="Control plane"
        title={draft.settings.systemName}
        body="Running as Root, even with nothing else set up. Wallpaper, a new owner, town, networks, security, and globals all apply immediately. No save button. No approval."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {tiles.map((t) => (
          <button
            key={t.label}
            type="button"
            onClick={() => setSection(t.go)}
            className="rounded-2xl bg-surface p-5 text-left shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-subtle">
              {t.label}
            </p>
            <p className="mt-2 text-lg font-medium tracking-tight">{t.value}</p>
          </button>
        ))}
      </div>
      <div className="mt-3 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-subtle">
                Secure system
              </p>
              <p className="mt-2 text-3xl font-medium tracking-tight tabular">{score}</p>
              <p className="mt-1 text-sm text-muted">Hardening score out of 100</p>
            </div>
            <Button size="sm" onClick={hardenSystem}>
              Secure now
            </Button>
          </div>
          <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-raised">
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
        <div className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-subtle">
            Permission cells
          </p>
          <dl className="mt-4 grid grid-cols-3 gap-3">
            <div>
              <dt className="text-xs text-subtle">Write</dt>
              <dd className="mt-1 text-xl font-medium tabular">{grants.write}</dd>
            </div>
            <div>
              <dt className="text-xs text-subtle">Read</dt>
              <dd className="mt-1 text-xl font-medium tabular">{grants.read}</dd>
            </div>
            <div>
              <dt className="text-xs text-subtle">None</dt>
              <dd className="mt-1 text-xl font-medium tabular">{grants.none}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export function WallpaperPanel() {
  const access = useAccess("wallpaper");
  const settings = useControl((s) => s.draft.settings);
  const setSetting = useControl((s) => s.setSetting);
  if (access === "none") return <Denied />;
  const write = canWrite(access);
  const active = resolveWallpaper(settings);

  return (
    <div>
      <SectionHead
        kicker="Workspace"
        title="Wallpaper"
        body="Pick a preset, a color, or your own image. Root applies it the moment you choose — no prompt, no policy."
      />
      <AccessBanner access={access} />
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {WALLPAPERS.map((w) => {
          const selected = w.id === settings.wallpaperId;
          return (
            <button
              key={w.id}
              type="button"
              disabled={!write}
              onClick={() => setSetting("wallpaperId", w.id)}
              className={cn(
                "group relative overflow-hidden rounded-2xl text-left shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 active:scale-[0.98]",
                selected && "outline outline-2 outline-accent",
              )}
            >
              <div className="aspect-[16/10] overflow-hidden bg-raised">
                {w.kind === "photo" ? (
                  <img
                    src={w.src}
                    alt=""
                    className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-black/20"
                  />
                ) : (
                  <div className="h-full w-full" style={{ background: w.wash }} />
                )}
              </div>
              <div className="flex items-center justify-between gap-2 px-3 py-2.5">
                <span className="text-sm font-medium">{w.name}</span>
                {selected ? <Check className="size-4 text-fg" /> : null}
              </div>
            </button>
          );
        })}
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label
          className={cn(
            "flex cursor-pointer items-center justify-between gap-3 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
            settings.wallpaperId === "color" && "outline outline-2 outline-accent",
            !write && "pointer-events-none opacity-60",
          )}
        >
          <div>
            <p className="text-sm font-medium">Any color</p>
            <p className="mt-1 text-sm text-muted">{active.kind === "wash" && settings.wallpaperId === "color" ? settings.customColor : "Paint the desktop"}</p>
          </div>
          <input
            type="color"
            aria-label="Wallpaper color"
            disabled={!write}
            value={settings.customColor || "#1c3a4a"}
            onChange={(e) => {
              setSetting("customColor", e.target.value);
              setSetting("wallpaperId", "color");
            }}
            className="size-11 cursor-pointer rounded-lg border-0 bg-transparent p-0"
          />
        </label>
        <label
          className={cn(
            "flex cursor-pointer flex-col justify-center rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
            settings.wallpaperId === "upload" && "outline outline-2 outline-accent",
            !write && "pointer-events-none opacity-60",
          )}
        >
          <p className="text-sm font-medium">Your image</p>
          <p className="mt-1 text-sm text-muted">
            {settings.wallpaperId === "upload" ? "Using your file" : "Upload a photo. It becomes the wallpaper now."}
          </p>
          <input
            type="file"
            accept="image/*"
            disabled={!write}
            className="mt-3 block w-full text-sm text-muted file:mr-3 file:h-9 file:rounded-md file:border-0 file:bg-accent file:px-3 file:text-sm file:font-medium file:text-accent-fg"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              void compressImage(file).then((url) => {
                setSetting("customWallpaper", url);
                setSetting("wallpaperId", "upload");
              });
            }}
          />
        </label>
      </div>
    </div>
  );
}

function compressImage(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("read"));
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const max = 1280;
        const scale = Math.min(1, max / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(String(reader.result));
          return;
        }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.72));
      };
      img.onerror = () => resolve(String(reader.result));
      img.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

export function FieldsPanel({
  section,
  kicker,
  title,
  body,
}: {
  section: "appearance" | "location" | "security" | "global";
  kicker: string;
  title: string;
  body: string;
}) {
  const access = useAccess(section);
  const settings = useControl((s) => s.draft.settings);
  const setSetting = useControl((s) => s.setSetting);
  const hardenSystem = useControl((s) => s.hardenSystem);
  const fields = SECTION_FIELDS[section] ?? [];
  if (access === "none") return <Denied />;
  const write = canWrite(access);
  const score = securityScore(settings);

  return (
    <div>
      <SectionHead kicker={kicker} title={title} body={body} />
      <AccessBanner access={access} />
      {section === "location" ? <TownPresets disabled={!write} /> : null}
      {section === "security" ? (
        <div className="mb-4 flex flex-col gap-3 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium">Harden this system</p>
            <p className="mt-1 text-sm text-muted">
              Firewall, encryption, secure boot, 2FA, USB lock, stealth, 2-minute auto-lock. Score is{" "}
              <span className="tabular text-fg">{score}</span>.
            </p>
          </div>
          <Button disabled={!write} onClick={hardenSystem} className="shrink-0">
            <ShieldCheck className="size-4" />
            Secure now
          </Button>
        </div>
      ) : null}
      <div className={section === "security" ? "" : "mt-4"}>
        <FieldList fields={fields} settings={settings} disabled={!write} onChange={setSetting} />
      </div>
    </div>
  );
}

export function OwnerPanel() {
  const access = useAccess("owner");
  const draft = useControl((s) => s.draft);
  const transferOwner = useControl((s) => s.transferOwner);
  const appointOwner = useControl((s) => s.appointOwner);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  if (access === "none") return <Denied />;
  const write = canWrite(access);
  const owner = memberById(draft, draft.settings.ownerMemberId);
  const candidates = draft.members.filter((m) => m.id !== ROOT_MEMBER_ID);

  return (
    <div>
      <SectionHead
        kicker="Workspace"
        title="Owner"
        body="Name a new owner or hand it to someone already here. Root does it in one step — no approval, no waiting."
      />
      <AccessBanner access={access} />
      <div className="mt-4 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-subtle">
          Current owner
        </p>
        <div className="mt-4 flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-fg">
            {owner?.initials ?? "—"}
          </div>
          <div className="min-w-0">
            <p className="font-medium tracking-tight">{owner?.name ?? "Unset"}</p>
            <p className="truncate text-sm text-muted">{owner?.email}</p>
          </div>
          <Badge variant="root" className="ml-auto">
            <Crown className="mr-1 size-3" />
            Owner
          </Badge>
        </div>
      </div>
      <form
        className="mt-3 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]"
        onSubmit={(e) => {
          e.preventDefault();
          if (!write || !name.trim()) return;
          appointOwner(name, email);
          setName("");
          setEmail("");
        }}
      >
        <p className="font-medium">Set a new owner</p>
        <p className="mt-1 text-sm text-muted">Creates the person and makes them owner immediately.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
          <div>
            <Label htmlFor="owner-name">Name</Label>
            <Input
              id="owner-name"
              className="mt-2"
              value={name}
              disabled={!write}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jordan Hale"
            />
          </div>
          <div>
            <Label htmlFor="owner-email">Email</Label>
            <Input
              id="owner-email"
              className="mt-2"
              value={email}
              disabled={!write}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="optional"
            />
          </div>
          <Button type="submit" disabled={!write || !name.trim()} className="h-11">
            Make owner
          </Button>
        </div>
      </form>
      <div className="mt-3 divide-y divide-border overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]">
        {candidates.map((m) => {
          const active = m.id === draft.settings.ownerMemberId;
          return (
            <div key={m.id} className="flex items-center gap-3 px-5 py-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-raised text-xs font-medium">
                {m.initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{m.name}</p>
                <p className="truncate text-sm text-muted">{m.email}</p>
              </div>
              {active ? (
                <Badge variant="write">Named owner</Badge>
              ) : (
                <Button
                  size="sm"
                  variant="secondary"
                  disabled={!write}
                  onClick={() => transferOwner(m.id)}
                >
                  Make owner
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function NetworkPanel() {
  const access = useAccess("network");
  const draft = useControl((s) => s.draft);
  const setSetting = useControl((s) => s.setSetting);
  const connectWifi = useControl((s) => s.connectWifi);
  const disconnectWifi = useControl((s) => s.disconnectWifi);
  const forgetWifi = useControl((s) => s.forgetWifi);
  const addWifi = useControl((s) => s.addWifi);
  const toggleInterface = useControl((s) => s.toggleInterface);
  const [open, setOpen] = useState(false);
  const [ssid, setSsid] = useState("");
  const [sec, setSec] = useState<WifiSecurity>("wpa3");

  if (access === "none") return <Denied />;
  const write = canWrite(access);
  const settings = draft.settings;
  const visibleNets = [...draft.networks].sort(
    (a, b) => Number(b.connected) - Number(a.connected) || b.signal - a.signal,
  );

  return (
    <div>
      <SectionHead
        kicker="System"
        title="Network"
        body="Join, leave, or forget any network. Change DNS, VPN, and radios without a gatekeeper."
      />
      <AccessBanner access={access} />
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {draft.interfaces.map((iface) => (
          <div key={iface.id} className="rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)]">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-medium">{iface.name}</p>
              <Switch
                checked={iface.connected}
                disabled={!write || settings.airplaneMode}
                onCheckedChange={(c) => toggleInterface(iface.id, c)}
              />
            </div>
            <p className="mt-3 font-mono text-xs text-muted">{iface.ip}</p>
            <p className="mt-1 text-xs text-subtle">
              {iface.speed} · {iface.mac}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium">Radios</p>
            <p className="mt-1 text-sm text-muted">Airplane mode kills Wi-Fi and Bluetooth at once.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <label className="flex h-11 items-center gap-2 text-sm">
              <Switch
                checked={settings.airplaneMode}
                disabled={!write}
                onCheckedChange={(c) => setSetting("airplaneMode", c)}
              />
              Airplane
            </label>
            <label className="flex h-11 items-center gap-2 text-sm">
              <Switch
                checked={settings.ipv6}
                disabled={!write}
                onCheckedChange={(c) => setSetting("ipv6", c)}
              />
              IPv6
            </label>
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <Label htmlFor="hostname">Hostname</Label>
            <Input
              id="hostname"
              className="mt-2"
              value={settings.hostname}
              disabled={!write}
              onChange={(e) => setSetting("hostname", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="dnsMode">DNS</Label>
            <NativeSelect
              id="dnsMode"
              className="mt-2"
              value={settings.dnsMode}
              disabled={!write}
              onChange={(e) => setSetting("dnsMode", e.target.value as "automatic" | "custom")}
            >
              <option value="automatic">Automatic</option>
              <option value="custom">Custom</option>
            </NativeSelect>
          </div>
        </div>
        {settings.dnsMode === "custom" ? (
          <div className="mt-3">
            <Label htmlFor="dns">Name servers</Label>
            <Input
              id="dns"
              className="mt-2 font-mono"
              value={settings.dnsServers.replaceAll("\n", ", ")}
              disabled={!write}
              onChange={(e) =>
                setSetting(
                  "dnsServers",
                  e.target.value
                    .split(",")
                    .map((x) => x.trim())
                    .join("\n"),
                )
              }
            />
          </div>
        ) : null}
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <Label htmlFor="addressMode">Addressing</Label>
            <NativeSelect
              id="addressMode"
              className="mt-2"
              value={settings.addressMode}
              disabled={!write}
              onChange={(e) => setSetting("addressMode", e.target.value as "dhcp" | "static")}
            >
              <option value="dhcp">DHCP</option>
              <option value="static">Static</option>
            </NativeSelect>
          </div>
          <div>
            <Label htmlFor="gateway">Gateway</Label>
            <Input
              id="gateway"
              className="mt-2 font-mono"
              value={settings.gateway}
              disabled={!write}
              onChange={(e) => setSetting("gateway", e.target.value)}
            />
          </div>
        </div>
        {settings.addressMode === "static" ? (
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              <Label htmlFor="staticAddress">IP address</Label>
              <Input
                id="staticAddress"
                className="mt-2 font-mono"
                value={settings.staticAddress}
                disabled={!write}
                onChange={(e) => setSetting("staticAddress", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="subnet">Subnet mask</Label>
              <Input
                id="subnet"
                className="mt-2 font-mono"
                value={settings.subnet}
                disabled={!write}
                onChange={(e) => setSetting("subnet", e.target.value)}
              />
            </div>
          </div>
        ) : null}
        <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_2fr] sm:items-center">
          <label className="flex h-11 items-center gap-2 text-sm">
            <Switch
              checked={settings.proxyEnabled}
              disabled={!write}
              onCheckedChange={(c) => setSetting("proxyEnabled", c)}
            />
            HTTP proxy
          </label>
          <Input
            placeholder="proxy.internal:8080"
            value={settings.proxyHost}
            disabled={!write || !settings.proxyEnabled}
            onChange={(e) => setSetting("proxyHost", e.target.value)}
          />
        </div>
      </div>

      <div className="mt-3 overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]">
        <div className="flex items-center justify-between gap-3 px-5 py-4">
          <div className="flex items-center gap-2">
            {settings.wifiRadio && !settings.airplaneMode ? (
              <Wifi className="size-4" />
            ) : (
              <WifiOff className="size-4 text-muted" />
            )}
            <p className="font-medium">Wi-Fi</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm" variant="secondary" disabled={!write}>
                <Plus className="size-4" />
                Join network
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Join a network</DialogTitle>
                <DialogDescription>
                  Connects immediately as Root. Hidden SSIDs are fine.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="ssid">SSID</Label>
                  <Input
                    id="ssid"
                    className="mt-2"
                    value={ssid}
                    onChange={(e) => setSsid(e.target.value)}
                    placeholder="Network name"
                  />
                </div>
                <div>
                  <Label htmlFor="sec">Security</Label>
                  <NativeSelect
                    id="sec"
                    className="mt-2"
                    value={sec}
                    onChange={(e) => setSec(e.target.value as WifiSecurity)}
                  >
                    <option value="wpa3">WPA3</option>
                    <option value="wpa2">WPA2</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="open">Open</option>
                  </NativeSelect>
                </div>
                <Button
                  className="w-full"
                  onClick={() => {
                    addWifi(ssid, sec, true);
                    setSsid("");
                    setOpen(false);
                  }}
                >
                  Connect now
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <ul className="divide-y divide-border">
          {visibleNets.map((n) => (
            <li key={n.id} className="flex items-center gap-3 px-5 py-3">
              <Signal className="size-4 text-muted" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{n.ssid}</p>
                <p className="text-xs text-subtle">
                  {n.security.toUpperCase()}
                  {n.hidden ? " · Hidden" : ""}
                  {n.saved ? " · Saved" : ""}
                  {n.autoJoin ? " · Auto-join" : ""}
                </p>
              </div>
              <span className="hidden text-xs tabular text-subtle sm:inline">{n.signal}%</span>
              {n.connected ? (
                <Button size="sm" variant="ghost" disabled={!write} onClick={disconnectWifi}>
                  Disconnect
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="secondary"
                  disabled={!write || settings.airplaneMode || !settings.wifiRadio}
                  onClick={() => connectWifi(n.id)}
                >
                  Join
                </Button>
              )}
              {n.saved ? (
                <Button
                  size="icon-sm"
                  variant="ghost"
                  disabled={!write}
                  aria-label={`Forget ${n.ssid}`}
                  onClick={() => forgetWifi(n.id)}
                >
                  <Trash2 className="size-4" />
                </Button>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function MembersPanel() {
  const access = useAccess("members");
  const draft = useControl((s) => s.draft);
  const setMemberRole = useControl((s) => s.setMemberRole);
  const addMember = useControl((s) => s.addMember);
  const removeMember = useControl((s) => s.removeMember);
  const simulate = useControl((s) => s.simulate);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roleId, setRoleId] = useState("role-viewer");

  if (access === "none") return <Denied />;
  const write = canWrite(access);
  const assignable = draft.roles.filter((r) => r.id !== ROOT_ROLE_ID);

  return (
    <div>
      <SectionHead
        kicker="Access"
        title="Members"
        body="Add people, change their role, or preview the console as them. Root itself cannot be removed."
      />
      <AccessBanner access={access} />
      <div className="mt-4 flex justify-end">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" disabled={!write}>
              <Plus className="size-4" />
              Add member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add member</DialogTitle>
              <DialogDescription>They get the role you pick, immediately.</DialogDescription>
            </DialogHeader>
            <div className="space-y-3">
              <div>
                <Label htmlFor="mname">Name</Label>
                <Input id="mname" className="mt-2" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="memail">Email</Label>
                <Input
                  id="memail"
                  className="mt-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="optional"
                />
              </div>
              <div>
                <Label htmlFor="mrole">Role</Label>
                <NativeSelect
                  id="mrole"
                  className="mt-2"
                  value={roleId}
                  onChange={(e) => setRoleId(e.target.value)}
                >
                  {assignable.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </NativeSelect>
              </div>
              <Button
                className="w-full"
                onClick={() => {
                  addMember(name, email, roleId);
                  setName("");
                  setEmail("");
                  setOpen(false);
                }}
              >
                Add
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-3 divide-y divide-border overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]">
        {draft.members.map((m) => {
          const role = roleById(draft, m.roleId);
          const locked = m.id === ROOT_MEMBER_ID;
          return (
            <div key={m.id} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-raised text-xs font-medium">
                  {m.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-medium">
                    {m.name}
                    {locked ? (
                      <Badge variant="root" className="ml-2">
                        Root
                      </Badge>
                    ) : null}
                  </p>
                  <p className="truncate text-sm text-muted">{m.email}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <NativeSelect
                  value={m.roleId}
                  disabled={!write || locked}
                  onChange={(e) => setMemberRole(m.id, e.target.value)}
                  className="w-40"
                >
                  {draft.roles
                    .filter((r) => (locked ? true : r.id !== ROOT_ROLE_ID))
                    .map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name}
                      </option>
                    ))}
                </NativeSelect>
                <Button size="sm" variant="ghost" onClick={() => simulate(m.id)}>
                  View as
                </Button>
                {locked ? null : (
                  <Button
                    size="icon-sm"
                    variant="ghost"
                    disabled={!write}
                    aria-label={`Remove ${m.name}`}
                    onClick={() => removeMember(m.id)}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                )}
              </div>
              <span className="sr-only">{role?.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ACCESS_LABEL: Record<Access, string> = { none: "—", read: "R", write: "W" };

export function PermissionsPanel() {
  const access = useAccess("permissions");
  const draft = useControl((s) => s.draft);
  const cycleGrant = useControl((s) => s.cycleGrant);
  const addRole = useControl((s) => s.addRole);
  const removeRole = useControl((s) => s.removeRole);
  const simulate = useControl((s) => s.simulate);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [cloneFrom, setCloneFrom] = useState("role-viewer");

  if (access === "none") return <Denied />;
  const write = canWrite(access);

  return (
    <div>
      <SectionHead
        kicker="Access"
        title="Permissions"
        body="Read, write, or none — per role, per area. Root is locked to write on every cell. Cycle a cell: none → read → write."
      />
      <AccessBanner access={access} />
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2 text-xs text-muted">
          <span className="rounded-full bg-raised px-2 py-1 shadow-[var(--shadow-border)]">— none</span>
          <span className="rounded-full bg-raised px-2 py-1 shadow-[var(--shadow-border)]">R read</span>
          <span className="rounded-full bg-accent px-2 py-1 text-accent-fg">W write</span>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" disabled={!write}>
              <Plus className="size-4" />
              New role
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>New role</DialogTitle>
              <DialogDescription>Clone grants from an existing role, then edit the matrix.</DialogDescription>
            </DialogHeader>
            <div className="space-y-3">
              <div>
                <Label htmlFor="rname">Name</Label>
                <Input id="rname" className="mt-2" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="rclone">Clone from</Label>
                <NativeSelect
                  id="rclone"
                  className="mt-2"
                  value={cloneFrom}
                  onChange={(e) => setCloneFrom(e.target.value)}
                >
                  {draft.roles.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </NativeSelect>
              </div>
              <Button
                className="w-full"
                onClick={() => {
                  addRole(name, cloneFrom);
                  setName("");
                  setOpen(false);
                }}
              >
                Create
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-3 hidden overflow-x-auto rounded-2xl bg-surface shadow-[var(--shadow-border)] md:block">
        <table className="w-full min-w-[52rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="sticky left-0 bg-surface px-4 py-3 font-medium">Role</th>
              {RESOURCES.map((r) => (
                <th key={r.id} className="px-2 py-3 text-center text-xs font-medium text-muted">
                  {r.label}
                </th>
              ))}
              <th className="px-3 py-3" />
            </tr>
          </thead>
          <tbody>
            {draft.roles.map((role) => (
              <tr key={role.id} className="border-b border-border last:border-0">
                <td className="sticky left-0 bg-surface px-4 py-2">
                  <div className="flex items-center gap-2">
                    {role.locked ? <Lock className="size-3.5 text-muted" /> : null}
                    <span className="font-medium">{role.name}</span>
                  </div>
                </td>
                {RESOURCES.map((res) => {
                  const a = role.grants[res.id];
                  const locked = role.locked || role.id === ROOT_ROLE_ID;
                  return (
                    <td key={res.id} className="px-2 py-2 text-center">
                      <button
                        type="button"
                        disabled={!write || locked}
                        onClick={() => cycleGrant(role.id, res.id)}
                        className={cn(
                          "inline-flex size-11 items-center justify-center rounded-md text-xs font-medium tabular",
                          a === "write" && "bg-accent text-accent-fg",
                          a === "read" && "bg-raised text-fg shadow-[var(--shadow-border)]",
                          a === "none" && "text-subtle shadow-[var(--shadow-border)]",
                        )}
                        aria-label={`${role.name} ${res.label} ${a}`}
                      >
                        {ACCESS_LABEL[a]}
                      </button>
                    </td>
                  );
                })}
                <td className="px-3 py-2 text-right">
                  {role.builtin ? (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        const member = draft.members.find((m) => m.roleId === role.id);
                        if (member) simulate(member.id);
                      }}
                    >
                      View
                    </Button>
                  ) : (
                    <Button
                      size="icon-sm"
                      variant="ghost"
                      disabled={!write}
                      aria-label={`Delete ${role.name}`}
                      onClick={() => removeRole(role.id)}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 space-y-3 md:hidden">
        {draft.roles.map((role) => (
          <div key={role.id} className="rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)]">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-medium">{role.name}</p>
              {role.builtin ? null : (
                <Button
                  size="icon-sm"
                  variant="ghost"
                  disabled={!write}
                  onClick={() => removeRole(role.id)}
                >
                  <Trash2 className="size-4" />
                </Button>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {RESOURCES.map((res) => {
                const a = role.grants[res.id];
                const locked = role.locked || role.id === ROOT_ROLE_ID;
                return (
                  <button
                    key={res.id}
                    type="button"
                    disabled={!write || locked}
                    onClick={() => cycleGrant(role.id, res.id)}
                    className={cn(
                      "flex h-11 items-center justify-between rounded-lg px-3 text-sm",
                      a === "write" && "bg-accent text-accent-fg",
                      a === "read" && "bg-raised shadow-[var(--shadow-border)]",
                      a === "none" && "shadow-[var(--shadow-border)] text-muted",
                    )}
                  >
                    <span>{res.label}</span>
                    <span className="tabular text-xs">{ACCESS_LABEL[a]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AuditPanel() {
  const access = useAccess("audit");
  const audit = useControl((s) => s.audit);
  const clock24h = useControl((s) => s.draft.settings.clock24h);
  const [filter, setFilter] = useState<ResourceId | "all">("all");
  if (access === "none") return <Denied />;

  const rows = useMemo(
    () => (filter === "all" ? audit : audit.filter((e) => e.resource === filter)),
    [audit, filter],
  );

  return (
    <div>
      <SectionHead
        kicker="Access"
        title="Audit log"
        body="Every saved change. Root writes land here with no review queue."
      />
      <AccessBanner access={access} />
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </FilterChip>
        {RESOURCES.map((r) => (
          <FilterChip key={r.id} active={filter === r.id} onClick={() => setFilter(r.id)}>
            {r.label}
          </FilterChip>
        ))}
      </div>
      <ol className="mt-3 divide-y divide-border overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]">
        {rows.length === 0 ? (
          <li className="px-5 py-10 text-center text-sm text-muted">No events in this filter.</li>
        ) : (
          rows.map((e) => (
            <li key={e.id} className="flex items-start gap-4 px-5 py-4">
              <div className="min-w-0 flex-1">
                <p className="font-medium">{e.summary}</p>
                <p className="mt-1 text-sm text-muted">
                  {e.actorName} · {e.resource}
                </p>
              </div>
              <time className="shrink-0 text-xs tabular text-subtle">
                {formatTime(e.at, clock24h)}
              </time>
            </li>
          ))
        )}
      </ol>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-9 shrink-0 rounded-full px-3 text-sm font-medium",
        active ? "bg-accent text-accent-fg" : "bg-surface text-muted shadow-[var(--shadow-border)]",
      )}
    >
      {children}
    </button>
  );
}

function formatTime(at: number, clock24h: boolean) {
  return new Date(at).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: !clock24h,
  });
}
