import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Access = "none" | "read" | "write";

export type ResourceId =
  | "wallpaper"
  | "appearance"
  | "owner"
  | "location"
  | "network"
  | "security"
  | "global"
  | "members"
  | "permissions"
  | "audit";

export type SectionId = "overview" | "console" | ResourceId;

export const ROOT_ROLE_ID = "role-root";
export const ROOT_MEMBER_ID = "member-root";

export const RESOURCES: { id: ResourceId; label: string; hint: string }[] = [
  { id: "wallpaper", label: "Wallpaper", hint: "Desktop background" },
  { id: "appearance", label: "Appearance", hint: "Theme, density, motion" },
  { id: "owner", label: "Owner", hint: "Named owner of this system" },
  { id: "location", label: "Town", hint: "Town, region, locale" },
  { id: "network", label: "Network", hint: "Wi-Fi, ethernet, DNS, VPN" },
  { id: "security", label: "Secure", hint: "Harden the system" },
  { id: "global", label: "Global", hint: "System-wide defaults" },
  { id: "members", label: "Members", hint: "People and roles" },
  { id: "permissions", label: "Permissions", hint: "Read / write matrix" },
  { id: "audit", label: "Audit", hint: "Change history" },
];

export type NavItem = {
  id: SectionId;
  label: string;
  group: "Workspace" | "System" | "Access";
  resource: ResourceId | null;
};

export const NAV: NavItem[] = [
  { id: "console", label: "Console", group: "Workspace", resource: null },
  { id: "overview", label: "Overview", group: "Workspace", resource: null },
  { id: "wallpaper", label: "Wallpaper", group: "Workspace", resource: "wallpaper" },
  { id: "appearance", label: "Appearance", group: "Workspace", resource: "appearance" },
  { id: "owner", label: "Owner", group: "Workspace", resource: "owner" },
  { id: "location", label: "Town", group: "Workspace", resource: "location" },
  { id: "network", label: "Network", group: "System", resource: "network" },
  { id: "security", label: "Secure", group: "System", resource: "security" },
  { id: "global", label: "Global", group: "System", resource: "global" },
  { id: "members", label: "Members", group: "Access", resource: "members" },
  { id: "permissions", label: "Permissions", group: "Access", resource: "permissions" },
  { id: "audit", label: "Audit log", group: "Access", resource: "audit" },
];

export type Role = {
  id: string;
  name: string;
  description: string;
  builtin: boolean;
  locked: boolean;
  grants: Record<ResourceId, Access>;
};

export type Member = {
  id: string;
  name: string;
  email: string;
  title: string;
  roleId: string;
  initials: string;
};

export type WifiSecurity = "open" | "wpa2" | "wpa3" | "enterprise";

export type WifiNetwork = {
  id: string;
  ssid: string;
  security: WifiSecurity;
  signal: number;
  saved: boolean;
  connected: boolean;
  hidden: boolean;
  autoJoin: boolean;
};

export type NetInterface = {
  id: string;
  name: string;
  kind: "wifi" | "ethernet" | "vpn";
  connected: boolean;
  ip: string;
  mac: string;
  speed: string;
};

export type Settings = {
  wallpaperId: string;
  customWallpaper: string;
  customColor: string;
  theme: "system" | "light" | "dark";
  density: "comfortable" | "compact";
  reduceMotion: boolean;
  sidebarLabels: boolean;
  clock24h: boolean;
  ownerMemberId: string;
  systemName: string;
  supportEmail: string;
  town: string;
  region: string;
  country: string;
  postal: string;
  timezone: string;
  language: string;
  hostname: string;
  airplaneMode: boolean;
  wifiRadio: boolean;
  ethernetEnabled: boolean;
  vpnEnabled: boolean;
  ipv6: boolean;
  addressMode: "dhcp" | "static";
  staticAddress: string;
  gateway: string;
  subnet: string;
  dnsMode: "automatic" | "custom";
  dnsServers: string;
  proxyEnabled: boolean;
  proxyHost: string;
  firewall: boolean;
  diskEncryption: boolean;
  secureBoot: boolean;
  stealthMode: boolean;
  twoFactorRequired: boolean;
  autoLockMinutes: number;
  loginAlerts: boolean;
  usbRestricted: boolean;
  remoteLogin: boolean;
  telemetry: boolean;
  crashReports: boolean;
  autoTimezone: boolean;
  autoUpdates: boolean;
  spotlightIndex: boolean;
  bluetooth: boolean;
  locationServices: boolean;
  notifyMentions: boolean;
  emailDigest: "off" | "daily" | "weekly";
};

export type AuditEvent = {
  id: string;
  at: number;
  actorName: string;
  summary: string;
  resource: ResourceId | "workspace";
};

export type Workspace = {
  settings: Settings;
  roles: Role[];
  members: Member[];
  networks: WifiNetwork[];
  interfaces: NetInterface[];
};

export type FieldType = "text" | "textarea" | "toggle" | "select" | "slider" | "segmented";

export type FieldDef = {
  key: keyof Settings;
  label: string;
  description: string;
  type: FieldType;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
};

const ALL_WRITE = Object.fromEntries(RESOURCES.map((r) => [r.id, "write"])) as Record<
  ResourceId,
  Access
>;

export const TIMEZONES = [
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "UTC",
  "Europe/London",
  "Europe/Berlin",
  "Asia/Tokyo",
  "Australia/Sydney",
];

export const COUNTRIES = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "GB", label: "United Kingdom" },
  { value: "DE", label: "Germany" },
  { value: "JP", label: "Japan" },
  { value: "AU", label: "Australia" },
  { value: "FR", label: "France" },
  { value: "MX", label: "Mexico" },
];

export const LANGUAGES = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "ja", label: "Japanese" },
];

export const SECTION_FIELDS: Partial<Record<SectionId, FieldDef[]>> = {
  appearance: [
    {
      key: "theme",
      label: "Theme",
      description: "Applies immediately. System follows the device.",
      type: "segmented",
      options: [
        { value: "system", label: "System" },
        { value: "light", label: "Light" },
        { value: "dark", label: "Dark" },
      ],
    },
    {
      key: "density",
      label: "Density",
      description: "Compact tightens rows across every panel.",
      type: "segmented",
      options: [
        { value: "comfortable", label: "Comfortable" },
        { value: "compact", label: "Compact" },
      ],
    },
    {
      key: "reduceMotion",
      label: "Reduce motion",
      description: "Turns off non-essential transitions.",
      type: "toggle",
    },
    {
      key: "sidebarLabels",
      label: "Sidebar labels",
      description: "Icons-only rail on wide screens when off.",
      type: "toggle",
    },
    {
      key: "clock24h",
      label: "24-hour clock",
      description: "Audit timestamps use this format.",
      type: "toggle",
    },
  ],
  location: [
    {
      key: "town",
      label: "Town",
      description: "City or town used for locale, weather, and legal notices.",
      type: "text",
    },
    {
      key: "region",
      label: "Region",
      description: "State, province, or prefecture.",
      type: "text",
    },
    {
      key: "country",
      label: "Country",
      description: "Drives formats for dates, numbers, and units.",
      type: "select",
      options: COUNTRIES,
    },
    {
      key: "postal",
      label: "Postal code",
      description: "Optional. Used only for local services.",
      type: "text",
    },
    {
      key: "timezone",
      label: "Timezone",
      description: "Overridden when auto timezone is on in Global.",
      type: "select",
      options: TIMEZONES.map((z) => ({ value: z, label: z.replaceAll("_", " ") })),
    },
    {
      key: "language",
      label: "Language",
      description: "Interface language for this system.",
      type: "select",
      options: LANGUAGES,
    },
  ],
  security: [
    {
      key: "firewall",
      label: "Firewall",
      description: "Block unsolicited inbound connections.",
      type: "toggle",
    },
    {
      key: "diskEncryption",
      label: "Disk encryption",
      description: "Encrypt local storage at rest.",
      type: "toggle",
    },
    {
      key: "secureBoot",
      label: "Secure boot",
      description: "Refuse unsigned system images.",
      type: "toggle",
    },
    {
      key: "stealthMode",
      label: "Stealth mode",
      description: "Do not respond to ping or host discovery.",
      type: "toggle",
    },
    {
      key: "twoFactorRequired",
      label: "Require two-factor",
      description: "Every member must complete 2FA on next session.",
      type: "toggle",
    },
    {
      key: "autoLockMinutes",
      label: "Auto-lock",
      description: "Lock the console after idle minutes.",
      type: "slider",
      min: 1,
      max: 60,
      step: 1,
      suffix: "min",
    },
    {
      key: "loginAlerts",
      label: "Login alerts",
      description: "Mail the owner when a new device appears.",
      type: "toggle",
    },
    {
      key: "usbRestricted",
      label: "Restrict USB",
      description: "Allow only approved storage devices.",
      type: "toggle",
    },
    {
      key: "remoteLogin",
      label: "Remote login",
      description: "Permit SSH-style remote shells. Off is safer.",
      type: "toggle",
    },
  ],
  global: [
    {
      key: "systemName",
      label: "System name",
      description: "Shown in the rail, owner card, and network shares.",
      type: "text",
    },
    {
      key: "supportEmail",
      label: "Support email",
      description: "Where members send access questions.",
      type: "text",
    },
    {
      key: "telemetry",
      label: "Diagnostics",
      description: "Share anonymous reliability metrics.",
      type: "toggle",
    },
    {
      key: "crashReports",
      label: "Crash reports",
      description: "Send stack traces after a failure.",
      type: "toggle",
    },
    {
      key: "autoTimezone",
      label: "Auto timezone",
      description: "Set timezone from this town’s network.",
      type: "toggle",
    },
    {
      key: "autoUpdates",
      label: "Auto updates",
      description: "Apply security patches without asking.",
      type: "toggle",
    },
    {
      key: "spotlightIndex",
      label: "Index this system",
      description: "Include settings in command search.",
      type: "toggle",
    },
    {
      key: "bluetooth",
      label: "Bluetooth",
      description: "Radio for nearby accessories.",
      type: "toggle",
    },
    {
      key: "locationServices",
      label: "Location services",
      description: "Apps may use this town for local data.",
      type: "toggle",
    },
    {
      key: "emailDigest",
      label: "Email digest",
      description: "Rollup of access and security events.",
      type: "select",
      options: [
        { value: "off", label: "Off" },
        { value: "daily", label: "Daily" },
        { value: "weekly", label: "Weekly" },
      ],
    },
    {
      key: "notifyMentions",
      label: "Mentions",
      description: "Notify when someone is addressed here.",
      type: "toggle",
    },
  ],
};

export function fullWriteGrants(): Record<ResourceId, Access> {
  return { ...ALL_WRITE };
}

function factoryNetworks(): WifiNetwork[] {
  return [
    {
      id: "net-harbor",
      ssid: "Harbor-Fiber",
      security: "wpa3",
      signal: 92,
      saved: true,
      connected: true,
      hidden: false,
      autoJoin: true,
    },
    {
      id: "net-guest",
      ssid: "Harbor-Guest",
      security: "wpa2",
      signal: 84,
      saved: false,
      connected: false,
      hidden: false,
      autoJoin: false,
    },
    {
      id: "net-lab",
      ssid: "Northwind-Lab",
      security: "enterprise",
      signal: 71,
      saved: true,
      connected: false,
      hidden: false,
      autoJoin: false,
    },
    {
      id: "net-cafe",
      ssid: "Cobblestone Cafe",
      security: "open",
      signal: 38,
      saved: false,
      connected: false,
      hidden: false,
      autoJoin: false,
    },
    {
      id: "net-iot",
      ssid: "Backbone-IoT",
      security: "wpa2",
      signal: 55,
      saved: true,
      connected: false,
      hidden: true,
      autoJoin: false,
    },
  ];
}

function factoryInterfaces(): NetInterface[] {
  return [
    {
      id: "if-wifi",
      name: "Wi-Fi",
      kind: "wifi",
      connected: true,
      ip: "10.4.12.28",
      mac: "F2:8C:11:A4:90:2B",
      speed: "1.2 Gbps",
    },
    {
      id: "if-eth",
      name: "Ethernet",
      kind: "ethernet",
      connected: true,
      ip: "10.4.12.4",
      mac: "F2:8C:11:A4:90:2A",
      speed: "10 Gbps",
    },
    {
      id: "if-vpn",
      name: "VPN",
      kind: "vpn",
      connected: false,
      ip: "—",
      mac: "utun0",
      speed: "—",
    },
  ];
}

export function factoryWorkspace(): Workspace {
  return {
    settings: {
      wallpaperId: "linen",
      customWallpaper: "",
      customColor: "#1c3a4a",
      theme: "dark",
      density: "comfortable",
      reduceMotion: false,
      sidebarLabels: true,
      clock24h: false,
      ownerMemberId: "member-avery",
      systemName: "Northwind Labs",
      supportEmail: "ops@northwind.example",
      town: "Harborwick",
      region: "New York",
      country: "US",
      postal: "11222",
      timezone: "America/New_York",
      language: "en",
      hostname: "northwind-console",
      airplaneMode: false,
      wifiRadio: true,
      ethernetEnabled: true,
      vpnEnabled: false,
      ipv6: true,
      addressMode: "dhcp",
      staticAddress: "10.4.12.28",
      gateway: "10.4.12.1",
      subnet: "255.255.255.0",
      dnsMode: "automatic",
      dnsServers: "1.1.1.1\n9.9.9.9",
      proxyEnabled: false,
      proxyHost: "",
      firewall: true,
      diskEncryption: true,
      secureBoot: true,
      stealthMode: false,
      twoFactorRequired: true,
      autoLockMinutes: 5,
      loginAlerts: true,
      usbRestricted: false,
      remoteLogin: false,
      telemetry: false,
      crashReports: true,
      autoTimezone: true,
      autoUpdates: true,
      spotlightIndex: true,
      bluetooth: true,
      locationServices: true,
      notifyMentions: true,
      emailDigest: "weekly",
    },
    roles: [
      {
        id: ROOT_ROLE_ID,
        name: "Root",
        description: "Always-on superuser. Full read and write with no red tape — even with nothing else configured.",
        builtin: true,
        locked: true,
        grants: fullWriteGrants(),
      },
      {
        id: "role-admin",
        name: "Admin",
        description: "Operate the system. Cannot rewrite Root.",
        builtin: true,
        locked: false,
        grants: {
          wallpaper: "write",
          appearance: "write",
          owner: "read",
          location: "write",
          network: "write",
          security: "write",
          global: "write",
          members: "write",
          permissions: "write",
          audit: "read",
        },
      },
      {
        id: "role-operator",
        name: "Operator",
        description: "Day-to-day look and town. Read-only on the wire.",
        builtin: true,
        locked: false,
        grants: {
          wallpaper: "write",
          appearance: "write",
          owner: "none",
          location: "write",
          network: "read",
          security: "read",
          global: "read",
          members: "read",
          permissions: "none",
          audit: "read",
        },
      },
      {
        id: "role-viewer",
        name: "Viewer",
        description: "Look, don’t touch.",
        builtin: true,
        locked: false,
        grants: {
          wallpaper: "read",
          appearance: "read",
          owner: "none",
          location: "read",
          network: "none",
          security: "none",
          global: "read",
          members: "read",
          permissions: "none",
          audit: "read",
        },
      },
    ],
    members: [
      {
        id: ROOT_MEMBER_ID,
        name: "Root",
        email: "root@local",
        title: "Superuser",
        roleId: ROOT_ROLE_ID,
        initials: "R",
      },
      {
        id: "member-avery",
        name: "Avery Chen",
        email: "avery@northwind.example",
        title: "Named owner",
        roleId: "role-admin",
        initials: "AC",
      },
      {
        id: "member-sam",
        name: "Sam Rivera",
        email: "sam@northwind.example",
        title: "Operator",
        roleId: "role-operator",
        initials: "SR",
      },
      {
        id: "member-quinn",
        name: "Quinn Patel",
        email: "quinn@northwind.example",
        title: "Analyst",
        roleId: "role-viewer",
        initials: "QP",
      },
    ],
    networks: factoryNetworks(),
    interfaces: factoryInterfaces(),
  };
}

export function factoryAudit(): AuditEvent[] {
  const now = Date.now();
  return [
    {
      id: "evt-1",
      at: now - 1000 * 60 * 18,
      actorName: "Root",
      summary: "Connected to Harbor-Fiber",
      resource: "network",
    },
    {
      id: "evt-2",
      at: now - 1000 * 60 * 54,
      actorName: "Root",
      summary: "Set wallpaper to Linen",
      resource: "wallpaper",
    },
    {
      id: "evt-3",
      at: now - 1000 * 60 * 60 * 6,
      actorName: "Avery Chen",
      summary: "Enabled disk encryption",
      resource: "security",
    },
  ];
}

export const ACCESS_CYCLE: Access[] = ["none", "read", "write"];

export function nextAccess(current: Access): Access {
  return ACCESS_CYCLE[(ACCESS_CYCLE.indexOf(current) + 1) % ACCESS_CYCLE.length]!;
}

export function ensureRoot(ws: Workspace): Workspace {
  const factory = factoryWorkspace();
  const rootRole = { ...factory.roles[0]!, grants: fullWriteGrants() };
  const rootMember = { ...factory.members[0]! };
  const roles = [rootRole, ...ws.roles.filter((r) => r.id !== ROOT_ROLE_ID)];
  const members = [rootMember, ...ws.members.filter((m) => m.id !== ROOT_MEMBER_ID)];
  const ownerStillHere = members.some((m) => m.id === ws.settings.ownerMemberId);
  return {
    ...ws,
    roles,
    members,
    settings: {
      ...factory.settings,
      ...ws.settings,
      ownerMemberId: ownerStillHere ? ws.settings.ownerMemberId : "member-avery",
    },
    networks: ws.networks?.length ? ws.networks : factory.networks,
    interfaces: ws.interfaces?.length ? ws.interfaces : factory.interfaces,
  };
}

export function roleById(ws: Workspace, id: string): Role | undefined {
  return ws.roles.find((r) => r.id === id);
}

export function memberById(ws: Workspace, id: string): Member | undefined {
  return ws.members.find((m) => m.id === id);
}

export function accessOf(ws: Workspace, memberId: string, resource: ResourceId): Access {
  if (memberId === ROOT_MEMBER_ID) return "write";
  const member = memberById(ws, memberId);
  if (!member || member.roleId === ROOT_ROLE_ID) return "write";
  const role = roleById(ws, member.roleId);
  if (!role || role.locked) return "write";
  return role.grants[resource] ?? "none";
}

export function canRead(access: Access) {
  return access !== "none";
}

export function canWrite(access: Access) {
  return access === "write";
}

export function cloneWorkspace(ws: Workspace): Workspace {
  return structuredClone(ws);
}

export function initialsFrom(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "•";
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return `${parts[0]![0] ?? ""}${parts[1]![0] ?? ""}`.toUpperCase();
}

type SettingKey = keyof Settings;

function formatSettingValue(key: SettingKey, value: Settings[SettingKey]): string {
  if (key === "customWallpaper") return value ? "custom image" : "cleared";
  if (typeof value === "boolean") return value ? "on" : "off";
  return String(value);
}

function resourceForKey(key: SettingKey): ResourceId {
  for (const [section, fields] of Object.entries(SECTION_FIELDS)) {
    if (fields?.some((f) => f.key === key)) return section as ResourceId;
  }
  if (key === "wallpaperId" || key === "customWallpaper" || key === "customColor") return "wallpaper";
  if (key === "ownerMemberId") return "owner";
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
  return "global";
}

export function diffWorkspace(saved: Workspace, draft: Workspace): Omit<AuditEvent, "id" | "at" | "actorName">[] {
  const events: Omit<AuditEvent, "id" | "at" | "actorName">[] = [];
  const keys = Object.keys(saved.settings) as SettingKey[];
  for (const key of keys) {
    if (saved.settings[key] !== draft.settings[key]) {
      events.push({
        resource: resourceForKey(key),
        summary: `Set ${key} to ${formatSettingValue(key, draft.settings[key])}`,
      });
    }
  }
  for (const role of draft.roles) {
    const prev = saved.roles.find((r) => r.id === role.id);
    if (!prev) {
      events.push({ resource: "permissions", summary: `Created role ${role.name}` });
      continue;
    }
    for (const res of RESOURCES) {
      if (prev.grants[res.id] !== role.grants[res.id]) {
        events.push({
          resource: "permissions",
          summary: `${role.name}: ${res.label} ${prev.grants[res.id]} → ${role.grants[res.id]}`,
        });
      }
    }
  }
  for (const prev of saved.roles) {
    if (!draft.roles.some((r) => r.id === prev.id)) {
      events.push({ resource: "permissions", summary: `Removed role ${prev.name}` });
    }
  }
  for (const member of draft.members) {
    const prev = saved.members.find((m) => m.id === member.id);
    if (!prev) {
      events.push({ resource: "members", summary: `Added member ${member.name}` });
      continue;
    }
    if (prev.roleId !== member.roleId) {
      const from = saved.roles.find((r) => r.id === prev.roleId)?.name ?? prev.roleId;
      const to = draft.roles.find((r) => r.id === member.roleId)?.name ?? member.roleId;
      events.push({ resource: "members", summary: `${member.name}: ${from} → ${to}` });
    }
  }
  for (const prev of saved.members) {
    if (!draft.members.some((m) => m.id === prev.id)) {
      events.push({ resource: "members", summary: `Removed member ${prev.name}` });
    }
  }
  const savedWifi = saved.networks.find((n) => n.connected)?.ssid;
  const draftWifi = draft.networks.find((n) => n.connected)?.ssid;
  if (savedWifi !== draftWifi) {
    events.push({
      resource: "network",
      summary: draftWifi ? `Connected to ${draftWifi}` : "Disconnected Wi-Fi",
    });
  }
  return events;
}

export function countGrants(roles: Role[]) {
  let write = 0;
  let read = 0;
  let none = 0;
  for (const role of roles) {
    for (const res of RESOURCES) {
      const a = role.grants[res.id];
      if (a === "write") write += 1;
      else if (a === "read") read += 1;
      else none += 1;
    }
  }
  return { write, read, none, total: write + read + none };
}

export function securityScore(s: Settings) {
  const checks = [
    s.firewall,
    s.diskEncryption,
    s.secureBoot,
    s.twoFactorRequired,
    s.usbRestricted,
    !s.remoteLogin,
    s.loginAlerts,
    s.autoLockMinutes <= 10,
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

export type ControlState = {
  saved: Workspace;
  draft: Workspace;
  actorId: string;
  simulating: boolean;
  section: SectionId;
  audit: AuditEvent[];
  hydrated: boolean;
  setSection: (id: SectionId) => void;
  setSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
  setGrant: (roleId: string, resource: ResourceId, access: Access) => void;
  cycleGrant: (roleId: string, resource: ResourceId) => void;
  setMemberRole: (memberId: string, roleId: string) => void;
  addRole: (name: string, cloneFromId: string) => void;
  removeRole: (roleId: string) => void;
  addMember: (name: string, email: string, roleId: string) => void;
  removeMember: (memberId: string) => void;
  transferOwner: (memberId: string) => void;
  appointOwner: (name: string, email: string) => void;
  applyTown: (patch: Partial<Pick<Settings, "town" | "region" | "country" | "postal" | "timezone">>) => void;
  connectWifi: (id: string) => void;
  disconnectWifi: () => void;
  forgetWifi: (id: string) => void;
  addWifi: (ssid: string, security: WifiSecurity, autoJoin: boolean) => void;
  toggleInterface: (id: string, connected: boolean) => void;
  hardenSystem: () => void;
  save: () => number;
  discard: () => void;
  resetFactory: () => void;
  simulate: (memberId: string) => void;
  returnToRoot: () => void;
};

function uid(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

const empty = factoryWorkspace();

export const useControl = create<ControlState>()(
  persist(
    (set, get) => ({
      saved: empty,
      draft: cloneWorkspace(empty),
      actorId: ROOT_MEMBER_ID,
      simulating: false,
      section: "overview",
      audit: factoryAudit(),
      hydrated: false,
      setSection: (id) => set({ section: id }),
      setSetting: (key, value) =>
        set((s) => {
          let settings = { ...s.draft.settings, [key]: value };
          let networks = s.draft.networks;
          let interfaces = s.draft.interfaces;
          if (key === "airplaneMode" && value === true) {
            settings = {
              ...settings,
              wifiRadio: false,
              bluetooth: false,
              vpnEnabled: false,
            };
            networks = networks.map((n) => ({ ...n, connected: false }));
            interfaces = interfaces.map((i) => ({
              ...i,
              connected: false,
              ip: "—",
              speed: "—",
            }));
          }
          if (key === "airplaneMode" && value === false) {
            settings = { ...settings, wifiRadio: true, bluetooth: true };
          }
          if (key === "wifiRadio" && value === false) {
            networks = networks.map((n) => ({ ...n, connected: false }));
            interfaces = interfaces.map((i) =>
              i.kind === "wifi" ? { ...i, connected: false, ip: "—", speed: "—" } : i,
            );
          }
          if (key === "staticAddress" || key === "addressMode") {
            const ip =
              (key === "addressMode" ? value === "static" : settings.addressMode === "static")
                ? String(key === "staticAddress" ? value : settings.staticAddress)
                : "10.4.12.28";
            interfaces = interfaces.map((i) =>
              i.connected && (i.kind === "wifi" || i.kind === "ethernet") ? { ...i, ip } : i,
            );
          }
          return { draft: { ...s.draft, settings, networks, interfaces } };
        }),
      setGrant: (roleId, resource, access) =>
        set((s) => {
          if (roleId === ROOT_ROLE_ID) return s;
          return {
            draft: {
              ...s.draft,
              roles: s.draft.roles.map((r) =>
                r.id === roleId && !r.locked
                  ? { ...r, grants: { ...r.grants, [resource]: access } }
                  : r,
              ),
            },
          };
        }),
      cycleGrant: (roleId, resource) => {
        const role = get().draft.roles.find((r) => r.id === roleId);
        if (!role || role.locked || roleId === ROOT_ROLE_ID) return;
        get().setGrant(roleId, resource, nextAccess(role.grants[resource]));
      },
      setMemberRole: (memberId, roleId) =>
        set((s) => {
          if (memberId === ROOT_MEMBER_ID) return s;
          return {
            draft: {
              ...s.draft,
              members: s.draft.members.map((m) =>
                m.id === memberId ? { ...m, roleId } : m,
              ),
            },
          };
        }),
      addRole: (name, cloneFromId) =>
        set((s) => {
          const source =
            s.draft.roles.find((r) => r.id === cloneFromId) ??
            s.draft.roles.find((r) => r.id === "role-viewer")!;
          const role: Role = {
            id: uid("role"),
            name: name.trim() || "Custom role",
            description: `Custom role cloned from ${source.name}.`,
            builtin: false,
            locked: false,
            grants: { ...source.grants },
          };
          return { draft: { ...s.draft, roles: [...s.draft.roles, role] } };
        }),
      removeRole: (roleId) =>
        set((s) => {
          if (roleId === ROOT_ROLE_ID) return s;
          const role = s.draft.roles.find((r) => r.id === roleId);
          if (!role || role.locked || role.builtin) return s;
          return {
            draft: {
              ...s.draft,
              roles: s.draft.roles.filter((r) => r.id !== roleId),
              members: s.draft.members.map((m) =>
                m.roleId === roleId ? { ...m, roleId: "role-viewer" } : m,
              ),
            },
          };
        }),
      addMember: (name, email, roleId) =>
        set((s) => {
          const trimmed = name.trim();
          if (!trimmed) return s;
          const member: Member = {
            id: uid("member"),
            name: trimmed,
            email: email.trim() || `${trimmed.toLowerCase().replace(/\s+/g, ".")}@local`,
            title: "Member",
            roleId: roleId === ROOT_ROLE_ID ? "role-viewer" : roleId,
            initials: initialsFrom(trimmed),
          };
          return { draft: { ...s.draft, members: [...s.draft.members, member] } };
        }),
      removeMember: (memberId) =>
        set((s) => {
          if (memberId === ROOT_MEMBER_ID) return s;
          const nextMembers = s.draft.members.filter((m) => m.id !== memberId);
          const ownerId =
            s.draft.settings.ownerMemberId === memberId
              ? nextMembers.find((m) => m.id !== ROOT_MEMBER_ID)?.id ?? ROOT_MEMBER_ID
              : s.draft.settings.ownerMemberId;
          return {
            draft: {
              ...s.draft,
              members: nextMembers,
              settings: { ...s.draft.settings, ownerMemberId: ownerId },
            },
          };
        }),
      transferOwner: (memberId) =>
        set((s) => {
          if (!s.draft.members.some((m) => m.id === memberId)) return s;
          return {
            draft: {
              ...s.draft,
              settings: { ...s.draft.settings, ownerMemberId: memberId },
            },
          };
        }),
      appointOwner: (name, email) => {
        const trimmed = name.trim();
        if (!trimmed) return;
        const id = uid("member");
        set((s) => ({
          draft: {
            ...s.draft,
            members: [
              ...s.draft.members,
              {
                id,
                name: trimmed,
                email: email.trim() || `${trimmed.toLowerCase().replace(/\s+/g, ".")}@local`,
                title: "Named owner",
                roleId: "role-admin",
                initials: initialsFrom(trimmed),
              },
            ],
            settings: { ...s.draft.settings, ownerMemberId: id },
          },
        }));
      },
      applyTown: (patch) =>
        set((s) => ({
          draft: {
            ...s.draft,
            settings: { ...s.draft.settings, ...patch },
          },
        })),
      connectWifi: (id) =>
        set((s) => {
          const target = s.draft.networks.find((n) => n.id === id);
          if (!target) return s;
          return {
            draft: {
              ...s.draft,
              settings: { ...s.draft.settings, wifiRadio: true, airplaneMode: false },
              networks: s.draft.networks.map((n) => ({
                ...n,
                connected: n.id === id,
                saved: n.id === id ? true : n.saved,
              })),
              interfaces: s.draft.interfaces.map((iface) =>
                iface.kind === "wifi"
                  ? { ...iface, connected: true, ip: "10.4.12.28", speed: "1.2 Gbps" }
                  : iface,
              ),
            },
          };
        }),
      disconnectWifi: () =>
        set((s) => ({
          draft: {
            ...s.draft,
            networks: s.draft.networks.map((n) => ({ ...n, connected: false })),
            interfaces: s.draft.interfaces.map((iface) =>
              iface.kind === "wifi" ? { ...iface, connected: false, ip: "—", speed: "—" } : iface,
            ),
          },
        })),
      forgetWifi: (id) =>
        set((s) => ({
          draft: {
            ...s.draft,
            networks: s.draft.networks
              .map((n) =>
                n.id === id ? { ...n, saved: false, connected: false, autoJoin: false } : n,
              )
              .filter((n) => n.saved || n.signal > 0),
          },
        })),
      addWifi: (ssid, security, autoJoin) => {
        const name = ssid.trim();
        if (!name) return;
        const existing = get().draft.networks.find(
          (n) => n.ssid.toLowerCase() === name.toLowerCase(),
        );
        if (existing) {
          get().connectWifi(existing.id);
          return;
        }
        const net: WifiNetwork = {
          id: uid("net"),
          ssid: name,
          security,
          signal: 80,
          saved: true,
          connected: true,
          hidden: false,
          autoJoin,
        };
        set((s) => ({
          draft: {
            ...s.draft,
            settings: { ...s.draft.settings, wifiRadio: true, airplaneMode: false },
            networks: [net, ...s.draft.networks.map((n) => ({ ...n, connected: false }))],
            interfaces: s.draft.interfaces.map((iface) =>
              iface.kind === "wifi"
                ? { ...iface, connected: true, ip: "10.4.12.28", speed: "1.2 Gbps" }
                : iface,
            ),
          },
        }));
      },
      toggleInterface: (id, connected) =>
        set((s) => {
          const iface = s.draft.interfaces.find((i) => i.id === id);
          if (!iface) return s;
          let settings = s.draft.settings;
          let networks = s.draft.networks;
          if (iface.kind === "vpn") settings = { ...settings, vpnEnabled: connected };
          if (iface.kind === "wifi") {
            settings = { ...settings, wifiRadio: connected };
            if (!connected) networks = networks.map((n) => ({ ...n, connected: false }));
          }
          if (iface.kind === "ethernet") settings = { ...settings, ethernetEnabled: connected };
          return {
            draft: {
              ...s.draft,
              settings,
              networks,
              interfaces: s.draft.interfaces.map((i) =>
                i.id === id
                  ? {
                      ...i,
                      connected,
                      ip: connected ? (i.kind === "vpn" ? "10.8.0.2" : i.ip === "—" ? "10.4.12.4" : i.ip) : "—",
                      speed: connected ? (i.speed === "—" ? "1 Gbps" : i.speed) : "—",
                    }
                  : i,
              ),
            },
          };
        }),
      hardenSystem: () =>
        set((s) => ({
          draft: {
            ...s.draft,
            settings: {
              ...s.draft.settings,
              firewall: true,
              diskEncryption: true,
              secureBoot: true,
              stealthMode: true,
              twoFactorRequired: true,
              autoLockMinutes: 2,
              loginAlerts: true,
              usbRestricted: true,
              remoteLogin: false,
              autoUpdates: true,
            },
          },
        })),
      save: () => {
        const s = get();
        const events = diffWorkspace(s.saved, s.draft).map((e, i) => ({
          ...e,
          id: `evt-${Date.now()}-${i}`,
          at: Date.now() + i,
          actorName: "Root",
        }));
        const next = ensureRoot(s.draft);
        set({
          saved: cloneWorkspace(next),
          draft: cloneWorkspace(next),
          audit: [...events.reverse(), ...s.audit].slice(0, 100),
        });
        return events.length;
      },
      discard: () => set((s) => ({ draft: cloneWorkspace(s.saved) })),
      resetFactory: () => {
        const fresh = factoryWorkspace();
        set({
          saved: cloneWorkspace(fresh),
          draft: cloneWorkspace(fresh),
          actorId: ROOT_MEMBER_ID,
          simulating: false,
          section: "overview",
          audit: factoryAudit(),
        });
      },
      simulate: (memberId) => {
        const exists = get().draft.members.some((m) => m.id === memberId);
        set({
          actorId: exists ? memberId : ROOT_MEMBER_ID,
          simulating: exists && memberId !== ROOT_MEMBER_ID,
        });
      },
      returnToRoot: () => set({ actorId: ROOT_MEMBER_ID, simulating: false }),
    }),
    {
      name: "helm-control-v2",
      skipHydration: true,
      partialize: (s) => ({
        saved: s.saved,
        draft: s.draft,
        section: s.section,
        audit: s.audit,
      }),
      onRehydrateStorage: () => (state) => {
        if (!state) {
          useControl.setState({ hydrated: true, actorId: ROOT_MEMBER_ID, simulating: false });
          return;
        }
        useControl.setState({
          draft: ensureRoot(state.draft),
          saved: ensureRoot(state.saved),
          actorId: ROOT_MEMBER_ID,
          simulating: false,
          hydrated: true,
        });
      },
    },
  ),
);

export function useDirty() {
  return useControl((s) => JSON.stringify(s.saved) !== JSON.stringify(s.draft));
}

export function useAccess(resource: ResourceId): Access {
  return useControl((s) => {
    if (!s.simulating || s.actorId === ROOT_MEMBER_ID) return "write";
    return accessOf(s.draft, s.actorId, resource);
  });
}

export function useActor() {
  const actorId = useControl((s) => s.actorId);
  const simulating = useControl((s) => s.simulating);
  const members = useControl((s) => s.draft.members);
  const roles = useControl((s) => s.draft.roles);
  const member = members.find((m) => m.id === actorId) ?? members.find((m) => m.id === ROOT_MEMBER_ID)!;
  const role = roles.find((r) => r.id === member.roleId) ?? roles[0]!;
  const isRoot = !simulating || member.id === ROOT_MEMBER_ID || role.id === ROOT_ROLE_ID;
  return { member, role, isRoot, simulating: simulating && !isRoot };
}

let autosaveTimer: ReturnType<typeof setTimeout> | undefined;
let autosaving = false;

useControl.subscribe((state) => {
  if (autosaving || !state.hydrated) return;
  if (JSON.stringify(state.saved) === JSON.stringify(state.draft)) return;
  if (autosaveTimer) clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(() => {
    const s = useControl.getState();
    if (!s.hydrated || JSON.stringify(s.saved) === JSON.stringify(s.draft)) return;
    autosaving = true;
    s.save();
    autosaving = false;
  }, 180);
});
