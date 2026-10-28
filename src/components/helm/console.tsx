import { useEffect, useRef, useState } from "react";
import { WALLPAPERS } from "@/lib/wallpapers";
import {
  NAV,
  RESOURCES,
  accessOf,
  canWrite,
  memberById,
  securityScore,
  useControl,
  type ResourceId,
  type SectionId,
  type Settings,
} from "@/lib/control";

type Line = { id: number; kind: "in" | "out" | "err"; text: string };

const TOWNS: Record<string, { town: string; region: string; country: string; postal: string; timezone: string }> = {
  columbia: { town: "Columbia", region: "South Carolina", country: "US", postal: "29201", timezone: "America/New_York" },
  harborwick: { town: "Harborwick", region: "New York", country: "US", postal: "11222", timezone: "America/New_York" },
  austin: { town: "Austin", region: "Texas", country: "US", postal: "78701", timezone: "America/Chicago" },
  london: { town: "London", region: "England", country: "GB", postal: "EC1A", timezone: "Europe/London" },
  berlin: { town: "Berlin", region: "Berlin", country: "DE", postal: "10115", timezone: "Europe/Berlin" },
  tokyo: { town: "Tokyo", region: "Tokyo", country: "JP", postal: "100-0001", timezone: "Asia/Tokyo" },
  sydney: { town: "Sydney", region: "New South Wales", country: "AU", postal: "2000", timezone: "Australia/Sydney" },
};

let lineId = 1;

function denied(resource: ResourceId) {
  const s = useControl.getState();
  if (!s.simulating) return null;
  const access = accessOf(s.draft, s.actorId, resource);
  if (canWrite(access)) return null;
  return `denied: ${resource} is ${access}. Return to Root to write.`;
}

function promptHost() {
  return useControl.getState().draft.settings.hostname || "console";
}

function run(raw: string): { lines: string[]; error?: boolean; clear?: boolean } {
  const input = raw.trim();
  if (!input) return { lines: [] };
  const [cmd, ...rest] = input.split(/\s+/);
  const arg = rest.join(" ").trim();
  const store = useControl.getState();
  const settings = store.draft.settings;
  const key = cmd!.toLowerCase();

  if (key === "clear") return { lines: [], clear: true };
  if (key === "help") {
    return {
      lines: [
        "status                         system snapshot",
        "whoami                         current session",
        "wallpaper list",
        "wallpaper <name>               linen basalt harbor canopy adobe rain ink paper",
        "wallpaper color <#hex>",
        "owner <name>                   appoint a new owner",
        "town <name>                    columbia harborwick austin london berlin tokyo sydney",
        "town set <Town>                any town name",
        "secure                         harden the system",
        "wifi                           list networks",
        "join <ssid>                    connect now",
        "disconnect",
        "get <key>",
        "set <key> <value>",
        "open <panel>",
        "clear",
      ],
    };
  }
  if (key === "whoami") {
    const member = memberById(store.draft, store.actorId);
    return {
      lines: [
        store.simulating
          ? `${member?.name ?? "unknown"} · preview · ${member?.roleId ?? ""}`
          : "root · uid 0 · full write",
      ],
    };
  }
  if (key === "status") {
    const owner = memberById(store.draft, settings.ownerMemberId);
    const wifi = store.draft.networks.find((n) => n.connected);
    return {
      lines: [
        `host      ${settings.hostname}`,
        `system    ${settings.systemName}`,
        `owner     ${owner?.name ?? "unset"}`,
        `town      ${settings.town}, ${settings.region}`,
        `wallpaper ${settings.wallpaperId}`,
        `network   ${wifi?.ssid ?? "offline"}`,
        `secure    ${securityScore(settings)}`,
        `session   ${store.simulating ? "preview" : "root"}`,
      ],
    };
  }
  if (key === "wallpaper") {
    if (!arg || arg === "list") {
      return { lines: WALLPAPERS.map((w) => `${w.id.padEnd(10)} ${w.name}`) };
    }
    const block = denied("wallpaper");
    if (block) return { lines: [block], error: true };
    if (arg.toLowerCase().startsWith("color")) {
      const hex = arg.split(/\s+/)[1];
      if (!hex || !/^#?[0-9a-fA-F]{6}$/.test(hex)) {
        return { lines: ["usage: wallpaper color #1c3a4a"], error: true };
      }
      const color = hex.startsWith("#") ? hex : `#${hex}`;
      store.setSetting("customColor", color);
      store.setSetting("wallpaperId", "color");
      return { lines: [`wallpaper → ${color}`] };
    }
    const found = WALLPAPERS.find((w) => w.id === arg.toLowerCase() || w.name.toLowerCase() === arg.toLowerCase());
    if (!found) return { lines: [`unknown wallpaper: ${arg}`], error: true };
    store.setSetting("wallpaperId", found.id);
    return { lines: [`wallpaper → ${found.name}`] };
  }
  if (key === "owner") {
    if (!arg) {
      const owner = memberById(store.draft, settings.ownerMemberId);
      return { lines: [owner ? `${owner.name}  ${owner.email}` : "no owner"] };
    }
    const block = denied("owner");
    if (block) return { lines: [block], error: true };
    store.appointOwner(arg, "");
    return { lines: [`owner → ${arg}`] };
  }
  if (key === "town") {
    if (!arg) return { lines: [`${settings.town}, ${settings.region} · ${settings.timezone}`] };
    const block = denied("location");
    if (block) return { lines: [block], error: true };
    const parts = arg.split(/\s+/);
    if (parts[0]?.toLowerCase() === "set") {
      const name = parts.slice(1).join(" ");
      if (!name) return { lines: ["usage: town set Harborwick"], error: true };
      store.applyTown({ town: name });
      return { lines: [`town → ${name}`] };
    }
    const preset = TOWNS[arg.toLowerCase()];
    if (!preset) return { lines: [`unknown town preset: ${arg}`, "try: town set <name>"], error: true };
    store.applyTown(preset);
    return { lines: [`town → ${preset.town}, ${preset.region}`] };
  }
  if (key === "secure") {
    const block = denied("security");
    if (block) return { lines: [block], error: true };
    store.hardenSystem();
    return { lines: ["hardened · firewall, encryption, secure boot, 2FA, stealth, USB lock"] };
  }
  if (key === "wifi") {
    return {
      lines: store.draft.networks.map(
        (n) => `${n.connected ? "*" : " "} ${n.ssid.padEnd(22)} ${n.security}  ${n.signal}%`,
      ),
    };
  }
  if (key === "join") {
    if (!arg) return { lines: ["usage: join <ssid>"], error: true };
    const block = denied("network");
    if (block) return { lines: [block], error: true };
    const existing = store.draft.networks.find((n) => n.ssid.toLowerCase() === arg.toLowerCase());
    if (existing) store.connectWifi(existing.id);
    else store.addWifi(arg, "wpa3", true);
    return { lines: [`connected → ${arg}`] };
  }
  if (key === "disconnect") {
    const block = denied("network");
    if (block) return { lines: [block], error: true };
    store.disconnectWifi();
    return { lines: ["wifi disconnected"] };
  }
  if (key === "open") {
    const id = arg.toLowerCase();
    const item = NAV.find((n) => n.id === id || n.label.toLowerCase() === id);
    if (!item) return { lines: [`unknown panel: ${arg}`], error: true };
    store.setSection(item.id);
    return { lines: [`opened ${item.label}`] };
  }
  if (key === "get") {
    if (!arg || !(arg in settings)) return { lines: ["usage: get <setting>"], error: true };
    const value = settings[arg as keyof Settings];
    return { lines: [`${arg} = ${String(value)}`] };
  }
  if (key === "set") {
    const [name, ...valueParts] = arg.split(/\s+/);
    const value = valueParts.join(" ");
    if (!name || !(name in settings) || value === "") {
      return { lines: ["usage: set <key> <value>"], error: true };
    }
    const settingKey = name as keyof Settings;
    const current = settings[settingKey];
    const resource = resourceForSetting(settingKey);
    if (resource) {
      const block = denied(resource);
      if (block) return { lines: [block], error: true };
    }
    if (typeof current === "boolean") {
      const on = value === "on" || value === "true" || value === "1";
      const off = value === "off" || value === "false" || value === "0";
      if (!on && !off) return { lines: ["expected on or off"], error: true };
      store.setSetting(settingKey, on as never);
      return { lines: [`${name} → ${on ? "on" : "off"}`] };
    }
    if (typeof current === "number") {
      const n = Number(value);
      if (Number.isNaN(n)) return { lines: ["expected a number"], error: true };
      store.setSetting(settingKey, n as never);
      return { lines: [`${name} → ${n}`] };
    }
    store.setSetting(settingKey, value as never);
    return { lines: [`${name} → ${value}`] };
  }
  return { lines: [`unknown command: ${cmd}`, "type help"], error: true };
}

function resourceForSetting(key: keyof Settings): ResourceId | null {
  if (key === "wallpaperId" || key === "customWallpaper" || key === "customColor") return "wallpaper";
  if (key === "ownerMemberId") return "owner";
  if (key === "town" || key === "region" || key === "country" || key === "postal" || key === "timezone" || key === "language") {
    return "location";
  }
  if (
    key === "hostname" ||
    key === "airplaneMode" ||
    key === "wifiRadio" ||
    key === "ethernetEnabled" ||
    key === "vpnEnabled" ||
    key === "ipv6" ||
    key === "addressMode" ||
    key === "staticAddress" ||
    key === "gateway" ||
    key === "subnet" ||
    key === "dnsMode" ||
    key === "dnsServers" ||
    key === "proxyEnabled" ||
    key === "proxyHost"
  ) {
    return "network";
  }
  if (
    key === "firewall" ||
    key === "diskEncryption" ||
    key === "secureBoot" ||
    key === "stealthMode" ||
    key === "twoFactorRequired" ||
    key === "autoLockMinutes" ||
    key === "loginAlerts" ||
    key === "usbRestricted" ||
    key === "remoteLogin"
  ) {
    return "security";
  }
  if (key === "theme" || key === "density" || key === "reduceMotion" || key === "sidebarLabels" || key === "clock24h") {
    return "appearance";
  }
  return "global";
}

export function ConsolePanel() {
  const hostname = useControl((s) => s.draft.settings.hostname);
  const [lines, setLines] = useState<Line[]>([
    { id: lineId++, kind: "out", text: "Helm console · root" },
    { id: lineId++, kind: "out", text: "Changes apply immediately. Type help." },
  ]);
  const [value, setValue] = useState("");
  const scroller = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
  }, [lines]);

  function submit() {
    const text = value;
    setValue("");
    const result = run(text);
    setLines((prev) => {
      const next = result.clear ? [] : [...prev];
      if (text.trim()) next.push({ id: lineId++, kind: "in", text });
      for (const line of result.lines) {
        next.push({ id: lineId++, kind: result.error ? "err" : "out", text: line });
      }
      return next.slice(-200);
    });
    inputRef.current?.focus();
  }

  return (
    <div
      className="flex min-h-0 flex-1 flex-col bg-bg font-mono text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex h-11 shrink-0 items-center justify-between border-b border-border px-4 text-xs text-subtle">
        <span>root@{hostname}</span>
        <span>{RESOURCES.length} areas · write</span>
      </div>
      <div ref={scroller} className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
        {lines.map((line) => (
          <p
            key={line.id}
            className={
              line.kind === "err" ? "text-danger" : line.kind === "in" ? "text-fg" : "text-muted"
            }
          >
            {line.kind === "in" ? (
              <span className="text-subtle">root@{promptHost()}:~# </span>
            ) : null}
            {line.text}
          </p>
        ))}
      </div>
      <form
        className="flex h-14 shrink-0 items-center gap-2 border-t border-border px-4"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <label className="shrink-0 text-subtle" htmlFor="console-input">
          root@{hostname}:~#
        </label>
        <input
          id="console-input"
          ref={inputRef}
          value={value}
          autoFocus
          autoComplete="off"
          spellCheck={false}
          onChange={(e) => setValue(e.target.value)}
          className="h-11 min-w-0 flex-1 bg-transparent text-fg outline-none"
        />
      </form>
    </div>
  );
}

export function isConsole(section: SectionId) {
  return section === "console";
}
