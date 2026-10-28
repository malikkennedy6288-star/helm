import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { C as Crown, S as Download, _ as MapPin, b as KeyRound, c as SlidersHorizontal, d as ShieldCheck, f as Search, g as Menu, h as Palette, i as Users, l as Signal, m as Plus, n as Wifi, o as Trash2, p as ScrollText, r as WifiOff, s as Terminal, t as X, u as Shield, v as Lock, w as Check, x as Image$1, y as LayoutDashboard } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Label2, c as Separator2, i as ItemIndicator2, l as Trigger, n as Content2, o as Portal2, r as Item2, s as Root2, t as CheckboxItem2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { n as Portal, r as Provider, t as Content2$1 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Da_kBNNl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,box-shadow,color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg shadow-sm hover:opacity-90",
			secondary: "bg-raised text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-raised",
			ghost: "bg-transparent text-muted hover:bg-raised hover:text-fg",
			danger: "bg-danger text-danger-fg hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-[13px]",
			lg: "h-12 px-5",
			icon: "size-11",
			"icon-sm": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var badgeVariants = cva("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-raised text-muted shadow-[var(--shadow-border)]",
		accent: "bg-accent text-accent-fg",
		write: "bg-accent/15 text-fg",
		read: "bg-raised text-muted shadow-[var(--shadow-border)]",
		none: "text-subtle shadow-[var(--shadow-border)]",
		danger: "bg-danger/15 text-danger",
		root: "bg-accent text-accent-fg"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-raised px-3 text-sm text-fg shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 placeholder:text-subtle file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:shadow-[var(--shadow-border-hover)] disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-bg/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-1/2 top-1/2 z-50 w-[min(28rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-surface p-5 text-fg shadow-[var(--shadow-border),var(--shadow-lift)] outline-none", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-3 top-3 inline-flex size-11 items-center justify-center rounded-md text-muted hover:bg-raised hover:text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-4 space-y-1 pr-8", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("text-lg font-semibold tracking-tight", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-muted", className),
		...props
	});
}
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 min-w-48 overflow-hidden rounded-xl bg-surface p-1 text-fg shadow-[var(--shadow-border),var(--shadow-lift)]", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex min-h-10 cursor-pointer select-none items-center gap-2 rounded-lg px-3 text-sm outline-none data-[highlighted]:bg-raised", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-subtle", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-border", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex min-h-10 cursor-pointer select-none items-center rounded-lg py-1.5 pl-8 pr-3 text-sm outline-none data-[highlighted]:bg-raised", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex size-4 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var Sheet = Dialog$1;
var SheetContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, { className: "fixed inset-0 z-50 bg-bg/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed inset-y-0 left-0 z-50 flex h-full w-[min(20rem,100vw)] flex-col bg-surface text-fg shadow-[var(--shadow-border),var(--shadow-lift)] outline-none", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-2 top-2 inline-flex size-11 items-center justify-center rounded-md text-muted hover:bg-raised hover:text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = "SheetContent";
var TooltipProvider = Provider;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md bg-accent px-2 py-1 text-xs text-accent-fg shadow-sm", className),
	...props
}) }));
TooltipContent.displayName = Content2$1.displayName;
var WALLPAPERS = [
	{
		id: "linen",
		name: "Linen",
		kind: "photo",
		src: "/wallpapers/linen.jpg"
	},
	{
		id: "basalt",
		name: "Basalt",
		kind: "photo",
		src: "/wallpapers/basalt.jpg"
	},
	{
		id: "harbor",
		name: "Harbor",
		kind: "photo",
		src: "/wallpapers/harbor.jpg"
	},
	{
		id: "canopy",
		name: "Canopy",
		kind: "photo",
		src: "/wallpapers/canopy.jpg"
	},
	{
		id: "adobe",
		name: "Adobe",
		kind: "photo",
		src: "/wallpapers/adobe.jpg"
	},
	{
		id: "rain",
		name: "Rain",
		kind: "photo",
		src: "/wallpapers/rain.jpg"
	},
	{
		id: "ink",
		name: "Ink",
		kind: "wash",
		wash: "#0b0b0a"
	},
	{
		id: "paper",
		name: "Paper",
		kind: "wash",
		wash: "#e8e4dc"
	}
];
function wallpaperById(id) {
	return WALLPAPERS.find((w) => w.id === id) ?? WALLPAPERS[0];
}
function resolveWallpaper(input) {
	if (input.wallpaperId === "upload" && input.customWallpaper) return {
		id: "upload",
		name: "Your image",
		kind: "photo",
		src: input.customWallpaper
	};
	if (input.wallpaperId === "color") return {
		id: "color",
		name: "Custom color",
		kind: "wash",
		wash: input.customColor || "#1a1916"
	};
	return wallpaperById(input.wallpaperId);
}
var ROOT_ROLE_ID = "role-root";
var ROOT_MEMBER_ID = "member-root";
var RESOURCES = [
	{
		id: "wallpaper",
		label: "Wallpaper",
		hint: "Desktop background"
	},
	{
		id: "appearance",
		label: "Appearance",
		hint: "Theme, density, motion"
	},
	{
		id: "owner",
		label: "Owner",
		hint: "Named owner of this system"
	},
	{
		id: "location",
		label: "Town",
		hint: "Town, region, locale"
	},
	{
		id: "network",
		label: "Network",
		hint: "Wi-Fi, ethernet, DNS, VPN"
	},
	{
		id: "security",
		label: "Secure",
		hint: "Harden the system"
	},
	{
		id: "global",
		label: "Global",
		hint: "System-wide defaults"
	},
	{
		id: "members",
		label: "Members",
		hint: "People and roles"
	},
	{
		id: "permissions",
		label: "Permissions",
		hint: "Read / write matrix"
	},
	{
		id: "audit",
		label: "Audit",
		hint: "Change history"
	}
];
var NAV = [
	{
		id: "console",
		label: "Console",
		group: "Workspace",
		resource: null
	},
	{
		id: "overview",
		label: "Overview",
		group: "Workspace",
		resource: null
	},
	{
		id: "wallpaper",
		label: "Wallpaper",
		group: "Workspace",
		resource: "wallpaper"
	},
	{
		id: "appearance",
		label: "Appearance",
		group: "Workspace",
		resource: "appearance"
	},
	{
		id: "owner",
		label: "Owner",
		group: "Workspace",
		resource: "owner"
	},
	{
		id: "location",
		label: "Town",
		group: "Workspace",
		resource: "location"
	},
	{
		id: "network",
		label: "Network",
		group: "System",
		resource: "network"
	},
	{
		id: "security",
		label: "Secure",
		group: "System",
		resource: "security"
	},
	{
		id: "global",
		label: "Global",
		group: "System",
		resource: "global"
	},
	{
		id: "members",
		label: "Members",
		group: "Access",
		resource: "members"
	},
	{
		id: "permissions",
		label: "Permissions",
		group: "Access",
		resource: "permissions"
	},
	{
		id: "audit",
		label: "Audit log",
		group: "Access",
		resource: "audit"
	}
];
var ALL_WRITE = Object.fromEntries(RESOURCES.map((r) => [r.id, "write"]));
var SECTION_FIELDS = {
	appearance: [
		{
			key: "theme",
			label: "Theme",
			description: "Applies immediately. System follows the device.",
			type: "segmented",
			options: [
				{
					value: "system",
					label: "System"
				},
				{
					value: "light",
					label: "Light"
				},
				{
					value: "dark",
					label: "Dark"
				}
			]
		},
		{
			key: "density",
			label: "Density",
			description: "Compact tightens rows across every panel.",
			type: "segmented",
			options: [{
				value: "comfortable",
				label: "Comfortable"
			}, {
				value: "compact",
				label: "Compact"
			}]
		},
		{
			key: "reduceMotion",
			label: "Reduce motion",
			description: "Turns off non-essential transitions.",
			type: "toggle"
		},
		{
			key: "sidebarLabels",
			label: "Sidebar labels",
			description: "Icons-only rail on wide screens when off.",
			type: "toggle"
		},
		{
			key: "clock24h",
			label: "24-hour clock",
			description: "Audit timestamps use this format.",
			type: "toggle"
		}
	],
	location: [
		{
			key: "town",
			label: "Town",
			description: "City or town used for locale, weather, and legal notices.",
			type: "text"
		},
		{
			key: "region",
			label: "Region",
			description: "State, province, or prefecture.",
			type: "text"
		},
		{
			key: "country",
			label: "Country",
			description: "Drives formats for dates, numbers, and units.",
			type: "select",
			options: [
				{
					value: "US",
					label: "United States"
				},
				{
					value: "CA",
					label: "Canada"
				},
				{
					value: "GB",
					label: "United Kingdom"
				},
				{
					value: "DE",
					label: "Germany"
				},
				{
					value: "JP",
					label: "Japan"
				},
				{
					value: "AU",
					label: "Australia"
				},
				{
					value: "FR",
					label: "France"
				},
				{
					value: "MX",
					label: "Mexico"
				}
			]
		},
		{
			key: "postal",
			label: "Postal code",
			description: "Optional. Used only for local services.",
			type: "text"
		},
		{
			key: "timezone",
			label: "Timezone",
			description: "Overridden when auto timezone is on in Global.",
			type: "select",
			options: [
				"America/New_York",
				"America/Chicago",
				"America/Denver",
				"America/Los_Angeles",
				"UTC",
				"Europe/London",
				"Europe/Berlin",
				"Asia/Tokyo",
				"Australia/Sydney"
			].map((z) => ({
				value: z,
				label: z.replaceAll("_", " ")
			}))
		},
		{
			key: "language",
			label: "Language",
			description: "Interface language for this system.",
			type: "select",
			options: [
				{
					value: "en",
					label: "English"
				},
				{
					value: "es",
					label: "Spanish"
				},
				{
					value: "fr",
					label: "French"
				},
				{
					value: "de",
					label: "German"
				},
				{
					value: "ja",
					label: "Japanese"
				}
			]
		}
	],
	security: [
		{
			key: "firewall",
			label: "Firewall",
			description: "Block unsolicited inbound connections.",
			type: "toggle"
		},
		{
			key: "diskEncryption",
			label: "Disk encryption",
			description: "Encrypt local storage at rest.",
			type: "toggle"
		},
		{
			key: "secureBoot",
			label: "Secure boot",
			description: "Refuse unsigned system images.",
			type: "toggle"
		},
		{
			key: "stealthMode",
			label: "Stealth mode",
			description: "Do not respond to ping or host discovery.",
			type: "toggle"
		},
		{
			key: "twoFactorRequired",
			label: "Require two-factor",
			description: "Every member must complete 2FA on next session.",
			type: "toggle"
		},
		{
			key: "autoLockMinutes",
			label: "Auto-lock",
			description: "Lock the console after idle minutes.",
			type: "slider",
			min: 1,
			max: 60,
			step: 1,
			suffix: "min"
		},
		{
			key: "loginAlerts",
			label: "Login alerts",
			description: "Mail the owner when a new device appears.",
			type: "toggle"
		},
		{
			key: "usbRestricted",
			label: "Restrict USB",
			description: "Allow only approved storage devices.",
			type: "toggle"
		},
		{
			key: "remoteLogin",
			label: "Remote login",
			description: "Permit SSH-style remote shells. Off is safer.",
			type: "toggle"
		}
	],
	global: [
		{
			key: "systemName",
			label: "System name",
			description: "Shown in the rail, owner card, and network shares.",
			type: "text"
		},
		{
			key: "supportEmail",
			label: "Support email",
			description: "Where members send access questions.",
			type: "text"
		},
		{
			key: "telemetry",
			label: "Diagnostics",
			description: "Share anonymous reliability metrics.",
			type: "toggle"
		},
		{
			key: "crashReports",
			label: "Crash reports",
			description: "Send stack traces after a failure.",
			type: "toggle"
		},
		{
			key: "autoTimezone",
			label: "Auto timezone",
			description: "Set timezone from this town’s network.",
			type: "toggle"
		},
		{
			key: "autoUpdates",
			label: "Auto updates",
			description: "Apply security patches without asking.",
			type: "toggle"
		},
		{
			key: "spotlightIndex",
			label: "Index this system",
			description: "Include settings in command search.",
			type: "toggle"
		},
		{
			key: "bluetooth",
			label: "Bluetooth",
			description: "Radio for nearby accessories.",
			type: "toggle"
		},
		{
			key: "locationServices",
			label: "Location services",
			description: "Apps may use this town for local data.",
			type: "toggle"
		},
		{
			key: "emailDigest",
			label: "Email digest",
			description: "Rollup of access and security events.",
			type: "select",
			options: [
				{
					value: "off",
					label: "Off"
				},
				{
					value: "daily",
					label: "Daily"
				},
				{
					value: "weekly",
					label: "Weekly"
				}
			]
		},
		{
			key: "notifyMentions",
			label: "Mentions",
			description: "Notify when someone is addressed here.",
			type: "toggle"
		}
	]
};
function fullWriteGrants() {
	return { ...ALL_WRITE };
}
function factoryNetworks() {
	return [
		{
			id: "net-harbor",
			ssid: "Harbor-Fiber",
			security: "wpa3",
			signal: 92,
			saved: true,
			connected: true,
			hidden: false,
			autoJoin: true
		},
		{
			id: "net-guest",
			ssid: "Harbor-Guest",
			security: "wpa2",
			signal: 84,
			saved: false,
			connected: false,
			hidden: false,
			autoJoin: false
		},
		{
			id: "net-lab",
			ssid: "Northwind-Lab",
			security: "enterprise",
			signal: 71,
			saved: true,
			connected: false,
			hidden: false,
			autoJoin: false
		},
		{
			id: "net-cafe",
			ssid: "Cobblestone Cafe",
			security: "open",
			signal: 38,
			saved: false,
			connected: false,
			hidden: false,
			autoJoin: false
		},
		{
			id: "net-iot",
			ssid: "Backbone-IoT",
			security: "wpa2",
			signal: 55,
			saved: true,
			connected: false,
			hidden: true,
			autoJoin: false
		}
	];
}
function factoryInterfaces() {
	return [
		{
			id: "if-wifi",
			name: "Wi-Fi",
			kind: "wifi",
			connected: true,
			ip: "10.4.12.28",
			mac: "F2:8C:11:A4:90:2B",
			speed: "1.2 Gbps"
		},
		{
			id: "if-eth",
			name: "Ethernet",
			kind: "ethernet",
			connected: true,
			ip: "10.4.12.4",
			mac: "F2:8C:11:A4:90:2A",
			speed: "10 Gbps"
		},
		{
			id: "if-vpn",
			name: "VPN",
			kind: "vpn",
			connected: false,
			ip: "—",
			mac: "utun0",
			speed: "—"
		}
	];
}
function factoryWorkspace() {
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
			emailDigest: "weekly"
		},
		roles: [
			{
				id: ROOT_ROLE_ID,
				name: "Root",
				description: "Always-on superuser. Full read and write with no red tape — even with nothing else configured.",
				builtin: true,
				locked: true,
				grants: fullWriteGrants()
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
					audit: "read"
				}
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
					audit: "read"
				}
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
					audit: "read"
				}
			}
		],
		members: [
			{
				id: ROOT_MEMBER_ID,
				name: "Root",
				email: "root@local",
				title: "Superuser",
				roleId: ROOT_ROLE_ID,
				initials: "R"
			},
			{
				id: "member-avery",
				name: "Avery Chen",
				email: "avery@northwind.example",
				title: "Named owner",
				roleId: "role-admin",
				initials: "AC"
			},
			{
				id: "member-sam",
				name: "Sam Rivera",
				email: "sam@northwind.example",
				title: "Operator",
				roleId: "role-operator",
				initials: "SR"
			},
			{
				id: "member-quinn",
				name: "Quinn Patel",
				email: "quinn@northwind.example",
				title: "Analyst",
				roleId: "role-viewer",
				initials: "QP"
			}
		],
		networks: factoryNetworks(),
		interfaces: factoryInterfaces()
	};
}
function factoryAudit() {
	const now = Date.now();
	return [
		{
			id: "evt-1",
			at: now - 108e4,
			actorName: "Root",
			summary: "Connected to Harbor-Fiber",
			resource: "network"
		},
		{
			id: "evt-2",
			at: now - 324e4,
			actorName: "Root",
			summary: "Set wallpaper to Linen",
			resource: "wallpaper"
		},
		{
			id: "evt-3",
			at: now - 216e5,
			actorName: "Avery Chen",
			summary: "Enabled disk encryption",
			resource: "security"
		}
	];
}
var ACCESS_CYCLE = [
	"none",
	"read",
	"write"
];
function nextAccess(current) {
	return ACCESS_CYCLE[(ACCESS_CYCLE.indexOf(current) + 1) % ACCESS_CYCLE.length];
}
function ensureRoot(ws) {
	const factory = factoryWorkspace();
	const rootRole = {
		...factory.roles[0],
		grants: fullWriteGrants()
	};
	const rootMember = { ...factory.members[0] };
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
			ownerMemberId: ownerStillHere ? ws.settings.ownerMemberId : "member-avery"
		},
		networks: ws.networks?.length ? ws.networks : factory.networks,
		interfaces: ws.interfaces?.length ? ws.interfaces : factory.interfaces
	};
}
function roleById(ws, id) {
	return ws.roles.find((r) => r.id === id);
}
function memberById(ws, id) {
	return ws.members.find((m) => m.id === id);
}
function accessOf(ws, memberId, resource) {
	if (memberId === "member-root") return "write";
	const member = memberById(ws, memberId);
	if (!member || member.roleId === "role-root") return "write";
	const role = roleById(ws, member.roleId);
	if (!role || role.locked) return "write";
	return role.grants[resource] ?? "none";
}
function canWrite(access) {
	return access === "write";
}
function cloneWorkspace(ws) {
	return structuredClone(ws);
}
function initialsFrom(name) {
	const parts = name.trim().split(/\s+/).filter(Boolean);
	if (parts.length === 0) return "•";
	if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
	return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
}
function formatSettingValue(key, value) {
	if (key === "customWallpaper") return value ? "custom image" : "cleared";
	if (typeof value === "boolean") return value ? "on" : "off";
	return String(value);
}
function resourceForKey(key) {
	for (const [section, fields] of Object.entries(SECTION_FIELDS)) if (fields?.some((f) => f.key === key)) return section;
	if (key === "wallpaperId" || key === "customWallpaper" || key === "customColor") return "wallpaper";
	if (key === "ownerMemberId") return "owner";
	if (key === "hostname" || key === "airplaneMode" || key === "wifiRadio" || key === "ethernetEnabled" || key === "vpnEnabled" || key === "ipv6" || key === "addressMode" || key === "staticAddress" || key === "gateway" || key === "subnet" || key === "dnsMode" || key === "dnsServers" || key === "proxyEnabled" || key === "proxyHost") return "network";
	return "global";
}
function diffWorkspace(saved, draft) {
	const events = [];
	const keys = Object.keys(saved.settings);
	for (const key of keys) if (saved.settings[key] !== draft.settings[key]) events.push({
		resource: resourceForKey(key),
		summary: `Set ${key} to ${formatSettingValue(key, draft.settings[key])}`
	});
	for (const role of draft.roles) {
		const prev = saved.roles.find((r) => r.id === role.id);
		if (!prev) {
			events.push({
				resource: "permissions",
				summary: `Created role ${role.name}`
			});
			continue;
		}
		for (const res of RESOURCES) if (prev.grants[res.id] !== role.grants[res.id]) events.push({
			resource: "permissions",
			summary: `${role.name}: ${res.label} ${prev.grants[res.id]} → ${role.grants[res.id]}`
		});
	}
	for (const prev of saved.roles) if (!draft.roles.some((r) => r.id === prev.id)) events.push({
		resource: "permissions",
		summary: `Removed role ${prev.name}`
	});
	for (const member of draft.members) {
		const prev = saved.members.find((m) => m.id === member.id);
		if (!prev) {
			events.push({
				resource: "members",
				summary: `Added member ${member.name}`
			});
			continue;
		}
		if (prev.roleId !== member.roleId) {
			const from = saved.roles.find((r) => r.id === prev.roleId)?.name ?? prev.roleId;
			const to = draft.roles.find((r) => r.id === member.roleId)?.name ?? member.roleId;
			events.push({
				resource: "members",
				summary: `${member.name}: ${from} → ${to}`
			});
		}
	}
	for (const prev of saved.members) if (!draft.members.some((m) => m.id === prev.id)) events.push({
		resource: "members",
		summary: `Removed member ${prev.name}`
	});
	const savedWifi = saved.networks.find((n) => n.connected)?.ssid;
	const draftWifi = draft.networks.find((n) => n.connected)?.ssid;
	if (savedWifi !== draftWifi) events.push({
		resource: "network",
		summary: draftWifi ? `Connected to ${draftWifi}` : "Disconnected Wi-Fi"
	});
	return events;
}
function countGrants(roles) {
	let write = 0;
	let read = 0;
	let none = 0;
	for (const role of roles) for (const res of RESOURCES) {
		const a = role.grants[res.id];
		if (a === "write") write += 1;
		else if (a === "read") read += 1;
		else none += 1;
	}
	return {
		write,
		read,
		none,
		total: write + read + none
	};
}
function securityScore(s) {
	const checks = [
		s.firewall,
		s.diskEncryption,
		s.secureBoot,
		s.twoFactorRequired,
		s.usbRestricted,
		!s.remoteLogin,
		s.loginAlerts,
		s.autoLockMinutes <= 10
	];
	return Math.round(checks.filter(Boolean).length / checks.length * 100);
}
function uid(prefix) {
	return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}
var empty = factoryWorkspace();
var useControl = create()(persist((set, get) => ({
	saved: empty,
	draft: cloneWorkspace(empty),
	actorId: ROOT_MEMBER_ID,
	simulating: false,
	section: "overview",
	audit: factoryAudit(),
	hydrated: false,
	setSection: (id) => set({ section: id }),
	setSetting: (key, value) => set((s) => {
		let settings = {
			...s.draft.settings,
			[key]: value
		};
		let networks = s.draft.networks;
		let interfaces = s.draft.interfaces;
		if (key === "airplaneMode" && value === true) {
			settings = {
				...settings,
				wifiRadio: false,
				bluetooth: false,
				vpnEnabled: false
			};
			networks = networks.map((n) => ({
				...n,
				connected: false
			}));
			interfaces = interfaces.map((i) => ({
				...i,
				connected: false,
				ip: "—",
				speed: "—"
			}));
		}
		if (key === "airplaneMode" && value === false) settings = {
			...settings,
			wifiRadio: true,
			bluetooth: true
		};
		if (key === "wifiRadio" && value === false) {
			networks = networks.map((n) => ({
				...n,
				connected: false
			}));
			interfaces = interfaces.map((i) => i.kind === "wifi" ? {
				...i,
				connected: false,
				ip: "—",
				speed: "—"
			} : i);
		}
		if (key === "staticAddress" || key === "addressMode") {
			const ip = (key === "addressMode" ? value === "static" : settings.addressMode === "static") ? String(key === "staticAddress" ? value : settings.staticAddress) : "10.4.12.28";
			interfaces = interfaces.map((i) => i.connected && (i.kind === "wifi" || i.kind === "ethernet") ? {
				...i,
				ip
			} : i);
		}
		return { draft: {
			...s.draft,
			settings,
			networks,
			interfaces
		} };
	}),
	setGrant: (roleId, resource, access) => set((s) => {
		if (roleId === "role-root") return s;
		return { draft: {
			...s.draft,
			roles: s.draft.roles.map((r) => r.id === roleId && !r.locked ? {
				...r,
				grants: {
					...r.grants,
					[resource]: access
				}
			} : r)
		} };
	}),
	cycleGrant: (roleId, resource) => {
		const role = get().draft.roles.find((r) => r.id === roleId);
		if (!role || role.locked || roleId === "role-root") return;
		get().setGrant(roleId, resource, nextAccess(role.grants[resource]));
	},
	setMemberRole: (memberId, roleId) => set((s) => {
		if (memberId === "member-root") return s;
		return { draft: {
			...s.draft,
			members: s.draft.members.map((m) => m.id === memberId ? {
				...m,
				roleId
			} : m)
		} };
	}),
	addRole: (name, cloneFromId) => set((s) => {
		const source = s.draft.roles.find((r) => r.id === cloneFromId) ?? s.draft.roles.find((r) => r.id === "role-viewer");
		const role = {
			id: uid("role"),
			name: name.trim() || "Custom role",
			description: `Custom role cloned from ${source.name}.`,
			builtin: false,
			locked: false,
			grants: { ...source.grants }
		};
		return { draft: {
			...s.draft,
			roles: [...s.draft.roles, role]
		} };
	}),
	removeRole: (roleId) => set((s) => {
		if (roleId === "role-root") return s;
		const role = s.draft.roles.find((r) => r.id === roleId);
		if (!role || role.locked || role.builtin) return s;
		return { draft: {
			...s.draft,
			roles: s.draft.roles.filter((r) => r.id !== roleId),
			members: s.draft.members.map((m) => m.roleId === roleId ? {
				...m,
				roleId: "role-viewer"
			} : m)
		} };
	}),
	addMember: (name, email, roleId) => set((s) => {
		const trimmed = name.trim();
		if (!trimmed) return s;
		const member = {
			id: uid("member"),
			name: trimmed,
			email: email.trim() || `${trimmed.toLowerCase().replace(/\s+/g, ".")}@local`,
			title: "Member",
			roleId: roleId === "role-root" ? "role-viewer" : roleId,
			initials: initialsFrom(trimmed)
		};
		return { draft: {
			...s.draft,
			members: [...s.draft.members, member]
		} };
	}),
	removeMember: (memberId) => set((s) => {
		if (memberId === "member-root") return s;
		const nextMembers = s.draft.members.filter((m) => m.id !== memberId);
		const ownerId = s.draft.settings.ownerMemberId === memberId ? nextMembers.find((m) => m.id !== "member-root")?.id ?? "member-root" : s.draft.settings.ownerMemberId;
		return { draft: {
			...s.draft,
			members: nextMembers,
			settings: {
				...s.draft.settings,
				ownerMemberId: ownerId
			}
		} };
	}),
	transferOwner: (memberId) => set((s) => {
		if (!s.draft.members.some((m) => m.id === memberId)) return s;
		return { draft: {
			...s.draft,
			settings: {
				...s.draft.settings,
				ownerMemberId: memberId
			}
		} };
	}),
	appointOwner: (name, email) => {
		const trimmed = name.trim();
		if (!trimmed) return;
		const id = uid("member");
		set((s) => ({ draft: {
			...s.draft,
			members: [...s.draft.members, {
				id,
				name: trimmed,
				email: email.trim() || `${trimmed.toLowerCase().replace(/\s+/g, ".")}@local`,
				title: "Named owner",
				roleId: "role-admin",
				initials: initialsFrom(trimmed)
			}],
			settings: {
				...s.draft.settings,
				ownerMemberId: id
			}
		} }));
	},
	applyTown: (patch) => set((s) => ({ draft: {
		...s.draft,
		settings: {
			...s.draft.settings,
			...patch
		}
	} })),
	connectWifi: (id) => set((s) => {
		if (!s.draft.networks.find((n) => n.id === id)) return s;
		return { draft: {
			...s.draft,
			settings: {
				...s.draft.settings,
				wifiRadio: true,
				airplaneMode: false
			},
			networks: s.draft.networks.map((n) => ({
				...n,
				connected: n.id === id,
				saved: n.id === id ? true : n.saved
			})),
			interfaces: s.draft.interfaces.map((iface) => iface.kind === "wifi" ? {
				...iface,
				connected: true,
				ip: "10.4.12.28",
				speed: "1.2 Gbps"
			} : iface)
		} };
	}),
	disconnectWifi: () => set((s) => ({ draft: {
		...s.draft,
		networks: s.draft.networks.map((n) => ({
			...n,
			connected: false
		})),
		interfaces: s.draft.interfaces.map((iface) => iface.kind === "wifi" ? {
			...iface,
			connected: false,
			ip: "—",
			speed: "—"
		} : iface)
	} })),
	forgetWifi: (id) => set((s) => ({ draft: {
		...s.draft,
		networks: s.draft.networks.map((n) => n.id === id ? {
			...n,
			saved: false,
			connected: false,
			autoJoin: false
		} : n).filter((n) => n.saved || n.signal > 0)
	} })),
	addWifi: (ssid, security, autoJoin) => {
		const name = ssid.trim();
		if (!name) return;
		const existing = get().draft.networks.find((n) => n.ssid.toLowerCase() === name.toLowerCase());
		if (existing) {
			get().connectWifi(existing.id);
			return;
		}
		const net = {
			id: uid("net"),
			ssid: name,
			security,
			signal: 80,
			saved: true,
			connected: true,
			hidden: false,
			autoJoin
		};
		set((s) => ({ draft: {
			...s.draft,
			settings: {
				...s.draft.settings,
				wifiRadio: true,
				airplaneMode: false
			},
			networks: [net, ...s.draft.networks.map((n) => ({
				...n,
				connected: false
			}))],
			interfaces: s.draft.interfaces.map((iface) => iface.kind === "wifi" ? {
				...iface,
				connected: true,
				ip: "10.4.12.28",
				speed: "1.2 Gbps"
			} : iface)
		} }));
	},
	toggleInterface: (id, connected) => set((s) => {
		const iface = s.draft.interfaces.find((i) => i.id === id);
		if (!iface) return s;
		let settings = s.draft.settings;
		let networks = s.draft.networks;
		if (iface.kind === "vpn") settings = {
			...settings,
			vpnEnabled: connected
		};
		if (iface.kind === "wifi") {
			settings = {
				...settings,
				wifiRadio: connected
			};
			if (!connected) networks = networks.map((n) => ({
				...n,
				connected: false
			}));
		}
		if (iface.kind === "ethernet") settings = {
			...settings,
			ethernetEnabled: connected
		};
		return { draft: {
			...s.draft,
			settings,
			networks,
			interfaces: s.draft.interfaces.map((i) => i.id === id ? {
				...i,
				connected,
				ip: connected ? i.kind === "vpn" ? "10.8.0.2" : i.ip === "—" ? "10.4.12.4" : i.ip : "—",
				speed: connected ? i.speed === "—" ? "1 Gbps" : i.speed : "—"
			} : i)
		} };
	}),
	hardenSystem: () => set((s) => ({ draft: {
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
			autoUpdates: true
		}
	} })),
	save: () => {
		const s = get();
		const events = diffWorkspace(s.saved, s.draft).map((e, i) => ({
			...e,
			id: `evt-${Date.now()}-${i}`,
			at: Date.now() + i,
			actorName: "Root"
		}));
		const next = ensureRoot(s.draft);
		set({
			saved: cloneWorkspace(next),
			draft: cloneWorkspace(next),
			audit: [...events.reverse(), ...s.audit].slice(0, 100)
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
			audit: factoryAudit()
		});
	},
	simulate: (memberId) => {
		const exists = get().draft.members.some((m) => m.id === memberId);
		set({
			actorId: exists ? memberId : ROOT_MEMBER_ID,
			simulating: exists && memberId !== "member-root"
		});
	},
	returnToRoot: () => set({
		actorId: ROOT_MEMBER_ID,
		simulating: false
	})
}), {
	name: "helm-control-v2",
	skipHydration: true,
	partialize: (s) => ({
		saved: s.saved,
		draft: s.draft,
		section: s.section,
		audit: s.audit
	}),
	onRehydrateStorage: () => (state) => {
		if (!state) {
			useControl.setState({
				hydrated: true,
				actorId: ROOT_MEMBER_ID,
				simulating: false
			});
			return;
		}
		useControl.setState({
			draft: ensureRoot(state.draft),
			saved: ensureRoot(state.saved),
			actorId: ROOT_MEMBER_ID,
			simulating: false,
			hydrated: true
		});
	}
}));
function useAccess(resource) {
	return useControl((s) => {
		if (!s.simulating || s.actorId === "member-root") return "write";
		return accessOf(s.draft, s.actorId, resource);
	});
}
function useActor() {
	const actorId = useControl((s) => s.actorId);
	const simulating = useControl((s) => s.simulating);
	const members = useControl((s) => s.draft.members);
	const roles = useControl((s) => s.draft.roles);
	const member = members.find((m) => m.id === actorId) ?? members.find((m) => m.id === "member-root");
	const role = roles.find((r) => r.id === member.roleId) ?? roles[0];
	const isRoot = !simulating || member.id === "member-root" || role.id === "role-root";
	return {
		member,
		role,
		isRoot,
		simulating: simulating && !isRoot
	};
}
var autosaveTimer;
var autosaving = false;
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
var TOWNS$1 = {
	columbia: {
		town: "Columbia",
		region: "South Carolina",
		country: "US",
		postal: "29201",
		timezone: "America/New_York"
	},
	harborwick: {
		town: "Harborwick",
		region: "New York",
		country: "US",
		postal: "11222",
		timezone: "America/New_York"
	},
	austin: {
		town: "Austin",
		region: "Texas",
		country: "US",
		postal: "78701",
		timezone: "America/Chicago"
	},
	london: {
		town: "London",
		region: "England",
		country: "GB",
		postal: "EC1A",
		timezone: "Europe/London"
	},
	berlin: {
		town: "Berlin",
		region: "Berlin",
		country: "DE",
		postal: "10115",
		timezone: "Europe/Berlin"
	},
	tokyo: {
		town: "Tokyo",
		region: "Tokyo",
		country: "JP",
		postal: "100-0001",
		timezone: "Asia/Tokyo"
	},
	sydney: {
		town: "Sydney",
		region: "New South Wales",
		country: "AU",
		postal: "2000",
		timezone: "Australia/Sydney"
	}
};
var lineId = 1;
function denied(resource) {
	const s = useControl.getState();
	if (!s.simulating) return null;
	const access = accessOf(s.draft, s.actorId, resource);
	if (canWrite(access)) return null;
	return `denied: ${resource} is ${access}. Return to Root to write.`;
}
function promptHost() {
	return useControl.getState().draft.settings.hostname || "console";
}
function run(raw) {
	const input = raw.trim();
	if (!input) return { lines: [] };
	const [cmd, ...rest] = input.split(/\s+/);
	const arg = rest.join(" ").trim();
	const store = useControl.getState();
	const settings = store.draft.settings;
	const key = cmd.toLowerCase();
	if (key === "clear") return {
		lines: [],
		clear: true
	};
	if (key === "help") return { lines: [
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
		"clear"
	] };
	if (key === "whoami") {
		const member = memberById(store.draft, store.actorId);
		return { lines: [store.simulating ? `${member?.name ?? "unknown"} · preview · ${member?.roleId ?? ""}` : "root · uid 0 · full write"] };
	}
	if (key === "status") {
		const owner = memberById(store.draft, settings.ownerMemberId);
		const wifi = store.draft.networks.find((n) => n.connected);
		return { lines: [
			`host      ${settings.hostname}`,
			`system    ${settings.systemName}`,
			`owner     ${owner?.name ?? "unset"}`,
			`town      ${settings.town}, ${settings.region}`,
			`wallpaper ${settings.wallpaperId}`,
			`network   ${wifi?.ssid ?? "offline"}`,
			`secure    ${securityScore(settings)}`,
			`session   ${store.simulating ? "preview" : "root"}`
		] };
	}
	if (key === "wallpaper") {
		if (!arg || arg === "list") return { lines: WALLPAPERS.map((w) => `${w.id.padEnd(10)} ${w.name}`) };
		const block = denied("wallpaper");
		if (block) return {
			lines: [block],
			error: true
		};
		if (arg.toLowerCase().startsWith("color")) {
			const hex = arg.split(/\s+/)[1];
			if (!hex || !/^#?[0-9a-fA-F]{6}$/.test(hex)) return {
				lines: ["usage: wallpaper color #1c3a4a"],
				error: true
			};
			const color = hex.startsWith("#") ? hex : `#${hex}`;
			store.setSetting("customColor", color);
			store.setSetting("wallpaperId", "color");
			return { lines: [`wallpaper → ${color}`] };
		}
		const found = WALLPAPERS.find((w) => w.id === arg.toLowerCase() || w.name.toLowerCase() === arg.toLowerCase());
		if (!found) return {
			lines: [`unknown wallpaper: ${arg}`],
			error: true
		};
		store.setSetting("wallpaperId", found.id);
		return { lines: [`wallpaper → ${found.name}`] };
	}
	if (key === "owner") {
		if (!arg) {
			const owner = memberById(store.draft, settings.ownerMemberId);
			return { lines: [owner ? `${owner.name}  ${owner.email}` : "no owner"] };
		}
		const block = denied("owner");
		if (block) return {
			lines: [block],
			error: true
		};
		store.appointOwner(arg, "");
		return { lines: [`owner → ${arg}`] };
	}
	if (key === "town") {
		if (!arg) return { lines: [`${settings.town}, ${settings.region} · ${settings.timezone}`] };
		const block = denied("location");
		if (block) return {
			lines: [block],
			error: true
		};
		const parts = arg.split(/\s+/);
		if (parts[0]?.toLowerCase() === "set") {
			const name = parts.slice(1).join(" ");
			if (!name) return {
				lines: ["usage: town set Harborwick"],
				error: true
			};
			store.applyTown({ town: name });
			return { lines: [`town → ${name}`] };
		}
		const preset = TOWNS$1[arg.toLowerCase()];
		if (!preset) return {
			lines: [`unknown town preset: ${arg}`, "try: town set <name>"],
			error: true
		};
		store.applyTown(preset);
		return { lines: [`town → ${preset.town}, ${preset.region}`] };
	}
	if (key === "secure") {
		const block = denied("security");
		if (block) return {
			lines: [block],
			error: true
		};
		store.hardenSystem();
		return { lines: ["hardened · firewall, encryption, secure boot, 2FA, stealth, USB lock"] };
	}
	if (key === "wifi") return { lines: store.draft.networks.map((n) => `${n.connected ? "*" : " "} ${n.ssid.padEnd(22)} ${n.security}  ${n.signal}%`) };
	if (key === "join") {
		if (!arg) return {
			lines: ["usage: join <ssid>"],
			error: true
		};
		const block = denied("network");
		if (block) return {
			lines: [block],
			error: true
		};
		const existing = store.draft.networks.find((n) => n.ssid.toLowerCase() === arg.toLowerCase());
		if (existing) store.connectWifi(existing.id);
		else store.addWifi(arg, "wpa3", true);
		return { lines: [`connected → ${arg}`] };
	}
	if (key === "disconnect") {
		const block = denied("network");
		if (block) return {
			lines: [block],
			error: true
		};
		store.disconnectWifi();
		return { lines: ["wifi disconnected"] };
	}
	if (key === "open") {
		const id = arg.toLowerCase();
		const item = NAV.find((n) => n.id === id || n.label.toLowerCase() === id);
		if (!item) return {
			lines: [`unknown panel: ${arg}`],
			error: true
		};
		store.setSection(item.id);
		return { lines: [`opened ${item.label}`] };
	}
	if (key === "get") {
		if (!arg || !(arg in settings)) return {
			lines: ["usage: get <setting>"],
			error: true
		};
		const value = settings[arg];
		return { lines: [`${arg} = ${String(value)}`] };
	}
	if (key === "set") {
		const [name, ...valueParts] = arg.split(/\s+/);
		const value = valueParts.join(" ");
		if (!name || !(name in settings) || value === "") return {
			lines: ["usage: set <key> <value>"],
			error: true
		};
		const settingKey = name;
		const current = settings[settingKey];
		const resource = resourceForSetting(settingKey);
		if (resource) {
			const block = denied(resource);
			if (block) return {
				lines: [block],
				error: true
			};
		}
		if (typeof current === "boolean") {
			const on = value === "on" || value === "true" || value === "1";
			if (!on && !(value === "off" || value === "false" || value === "0")) return {
				lines: ["expected on or off"],
				error: true
			};
			store.setSetting(settingKey, on);
			return { lines: [`${name} → ${on ? "on" : "off"}`] };
		}
		if (typeof current === "number") {
			const n = Number(value);
			if (Number.isNaN(n)) return {
				lines: ["expected a number"],
				error: true
			};
			store.setSetting(settingKey, n);
			return { lines: [`${name} → ${n}`] };
		}
		store.setSetting(settingKey, value);
		return { lines: [`${name} → ${value}`] };
	}
	return {
		lines: [`unknown command: ${cmd}`, "type help"],
		error: true
	};
}
function resourceForSetting(key) {
	if (key === "wallpaperId" || key === "customWallpaper" || key === "customColor") return "wallpaper";
	if (key === "ownerMemberId") return "owner";
	if (key === "town" || key === "region" || key === "country" || key === "postal" || key === "timezone" || key === "language") return "location";
	if (key === "hostname" || key === "airplaneMode" || key === "wifiRadio" || key === "ethernetEnabled" || key === "vpnEnabled" || key === "ipv6" || key === "addressMode" || key === "staticAddress" || key === "gateway" || key === "subnet" || key === "dnsMode" || key === "dnsServers" || key === "proxyEnabled" || key === "proxyHost") return "network";
	if (key === "firewall" || key === "diskEncryption" || key === "secureBoot" || key === "stealthMode" || key === "twoFactorRequired" || key === "autoLockMinutes" || key === "loginAlerts" || key === "usbRestricted" || key === "remoteLogin") return "security";
	if (key === "theme" || key === "density" || key === "reduceMotion" || key === "sidebarLabels" || key === "clock24h") return "appearance";
	return "global";
}
function ConsolePanel() {
	const hostname = useControl((s) => s.draft.settings.hostname);
	const [lines, setLines] = (0, import_react.useState)([{
		id: lineId++,
		kind: "out",
		text: "Helm console · root"
	}, {
		id: lineId++,
		kind: "out",
		text: "Changes apply immediately. Type help."
	}]);
	const [value, setValue] = (0, import_react.useState)("");
	const scroller = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
	}, [lines]);
	function submit() {
		const text = value;
		setValue("");
		const result = run(text);
		setLines((prev) => {
			const next = result.clear ? [] : [...prev];
			if (text.trim()) next.push({
				id: lineId++,
				kind: "in",
				text
			});
			for (const line of result.lines) next.push({
				id: lineId++,
				kind: result.error ? "err" : "out",
				text: line
			});
			return next.slice(-200);
		});
		inputRef.current?.focus();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col bg-bg font-mono text-sm",
		onClick: () => inputRef.current?.focus(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-11 shrink-0 items-center justify-between border-b border-border px-4 text-xs text-subtle",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["root@", hostname] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [RESOURCES.length, " areas · write"] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scroller,
				className: "min-h-0 flex-1 overflow-y-auto px-4 py-4",
				children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: line.kind === "err" ? "text-danger" : line.kind === "in" ? "text-fg" : "text-muted",
					children: [line.kind === "in" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-subtle",
						children: [
							"root@",
							promptHost(),
							":~# "
						]
					}) : null, line.text]
				}, line.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex h-14 shrink-0 items-center gap-2 border-t border-border px-4",
				onSubmit: (e) => {
					e.preventDefault();
					submit();
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "shrink-0 text-subtle",
					htmlFor: "console-input",
					children: [
						"root@",
						hostname,
						":~#"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "console-input",
					ref: inputRef,
					value,
					autoFocus: true,
					autoComplete: "off",
					spellCheck: false,
					onChange: (e) => setValue(e.target.value),
					className: "h-11 min-w-0 flex-1 bg-transparent text-fg outline-none"
				})]
			})
		]
	});
}
var promptEvent = null;
var snap = {
	canPrompt: false,
	installed: false
};
var listeners = /* @__PURE__ */ new Set();
var wired = false;
function emit(next) {
	snap = {
		...snap,
		...next
	};
	listeners.forEach((fn) => fn());
}
function standalone() {
	return window.matchMedia("(display-mode: standalone)").matches || "standalone" in navigator && Boolean(navigator.standalone);
}
function wireInstall() {
	if (wired || typeof window === "undefined") return;
	wired = true;
	if (standalone()) emit({ installed: true });
	window.addEventListener("beforeinstallprompt", (event) => {
		event.preventDefault();
		promptEvent = event;
		emit({
			canPrompt: true,
			installed: false
		});
	});
	window.addEventListener("appinstalled", () => {
		promptEvent = null;
		emit({
			canPrompt: false,
			installed: true
		});
	});
	if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").catch(() => {});
}
function subscribe(fn) {
	listeners.add(fn);
	return () => listeners.delete(fn);
}
function getSnap() {
	return snap;
}
function InstallApp({ prominent = false }) {
	const state = (0, import_react.useSyncExternalStore)(subscribe, getSnap, getSnap);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [hint, setHint] = (0, import_react.useState)("android");
	(0, import_react.useEffect)(() => {
		wireInstall();
		const ua = navigator.userAgent;
		if (/iPhone|iPad|iPod/i.test(ua)) setHint("ios");
		else if (/Android/i.test(ua)) setHint("android");
		else setHint("desktop");
	}, []);
	if (state.installed) {
		if (!prominent) return null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-2xl bg-surface px-5 py-4 text-sm text-muted shadow-[var(--shadow-border)]",
			children: "Helm is installed on this device."
		});
	}
	async function install() {
		if (promptEvent) {
			await promptEvent.prompt();
			const choice = await promptEvent.userChoice;
			promptEvent = null;
			emit({
				canPrompt: false,
				installed: choice.outcome === "accepted"
			});
			if (choice.outcome === "accepted") return;
		}
		setOpen(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [prominent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex flex-col gap-3 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] sm:flex-row sm:items-center sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium",
			children: "Install Helm"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: "Adds it to your home screen. Opens full screen, with your settings kept on this device."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			className: "shrink-0",
			onClick: install,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Install"]
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		size: "sm",
		onClick: install,
		"aria-label": "Install Helm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden min-[380px]:inline",
			children: "Install"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Install Helm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: state.canPrompt ? "Your browser can install it directly." : "Add Helm to your home screen. It opens like an app, without the browser bar." })] }),
			hint === "android" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-4 list-decimal space-y-2 pl-5 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Open Helm in Chrome once it is published." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tap the menu, then Install app or Add to Home screen." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Confirm. The icon lands next to your other apps." })
				]
			}) : null,
			hint === "ios" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-4 list-decimal space-y-2 pl-5 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Open Helm in Safari." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tap Share, then Add to Home Screen." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tap Add." })
				]
			}) : null,
			hint === "desktop" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-4 list-decimal space-y-2 pl-5 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Open the published Helm link in Chrome or Edge." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Click the install icon in the address bar." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Or open that link on your phone and use the menu to install." })
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-5 w-full",
				onClick: () => setOpen(false),
				children: "Got it"
			})
		] })
	})] });
}
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium text-fg leading-none", className),
	...props
}));
Label.displayName = Root.displayName;
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full shadow-[var(--shadow-border)] transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-40 data-[state=checked]:bg-accent data-[state=unchecked]:bg-raised after:absolute after:inset-[-10px] after:content-['']", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block size-5 translate-x-0.5 rounded-full bg-fg shadow-sm transition-transform duration-150 ease-out data-[state=checked]:translate-x-[22px] data-[state=checked]:bg-accent-fg") })
}));
Switch.displayName = Switch$1.displayName;
var NativeSelect = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
	ref,
	className: cn("flex h-11 w-full appearance-none rounded-md bg-raised bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 fill=%22none%22 stroke=%22%239a9890%22 stroke-width=%221.6%22><path d=%22M2.5 4.5 6 8l3.5-3.5%22/></svg>')] bg-[length:12px] bg-[right_12px_center] bg-no-repeat px-3 pr-9 text-sm text-fg shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:shadow-[var(--shadow-border-hover)] disabled:cursor-not-allowed disabled:opacity-50", className),
	...props,
	children
}));
NativeSelect.displayName = "NativeSelect";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-28 w-full rounded-md bg-raised px-3 py-2.5 text-sm text-fg shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 placeholder:text-subtle focus-visible:outline-none focus-visible:shadow-[var(--shadow-border-hover)] disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-raised shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-accent" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-5 rounded-full bg-accent shadow-sm ring-offset-bg transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
function SettingRow({ field, value, disabled, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("grid gap-3 border-b border-border py-[var(--row-pad,16px)] last:border-b-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,16rem)] sm:items-center", disabled && "opacity-60"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				htmlFor: field.key,
				className: "text-[15px]",
				children: field.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: field.description
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sm:justify-self-end sm:w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldControl, {
				field,
				value,
				disabled,
				onChange
			})
		})]
	});
}
function FieldControl({ field, value, disabled, onChange }) {
	if (field.type === "toggle") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-11 items-center justify-end",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			id: field.key,
			checked: Boolean(value),
			disabled,
			onCheckedChange: (c) => onChange(c)
		})
	});
	if (field.type === "text") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		id: field.key,
		value: String(value ?? ""),
		disabled,
		onChange: (e) => onChange(e.target.value)
	});
	if (field.type === "textarea") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
		id: field.key,
		value: String(value ?? ""),
		disabled,
		onChange: (e) => onChange(e.target.value),
		className: "sm:w-full"
	});
	if (field.type === "select") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
		id: field.key,
		value: String(value ?? ""),
		disabled,
		onChange: (e) => onChange(e.target.value),
		children: field.options?.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: o.value,
			children: o.label
		}, o.value))
	});
	if (field.type === "slider") {
		const n = typeof value === "number" ? value : Number(value);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
				min: field.min,
				max: field.max,
				step: field.step,
				value: [n],
				disabled,
				onValueChange: ([v]) => onChange(v ?? n),
				className: "flex-1"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "w-14 text-right text-sm tabular text-muted",
				children: [n, field.suffix ? ` ${field.suffix}` : ""]
			})]
		});
	}
	if (field.type === "segmented") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex rounded-lg bg-raised p-1 shadow-[var(--shadow-border)]",
		children: field.options?.map((o) => {
			const active = String(value) === o.value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled,
				onClick: () => onChange(o.value),
				className: cn("h-9 flex-1 rounded-md px-2 text-[13px] font-medium transition-[background-color,color,opacity] duration-150", active ? "bg-accent text-accent-fg" : "text-muted hover:text-fg"),
				children: o.label
			}, o.value);
		})
	});
	return null;
}
function FieldList({ fields, settings, disabled, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl bg-surface px-5 shadow-[var(--shadow-border)]",
		children: fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
			field,
			value: settings[field.key],
			disabled,
			onChange: (v) => onChange(field.key, v)
		}, field.key))
	});
}
function AccessBanner({ access }) {
	if (access === "write") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl bg-raised px-4 py-3 text-sm text-muted shadow-[var(--shadow-border)]",
		children: access === "none" ? "You have no access to this area. Return to Root to edit without red tape." : "Read only. You can inspect these settings but not change them."
	});
}
function Denied() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-surface px-6 py-16 text-center shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-lg font-medium tracking-tight",
			children: "No access"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: "This area is hidden from the current role. Return to Root — Root always has write."
		})]
	});
}
var TOWNS = [
	{
		town: "Columbia",
		region: "South Carolina",
		country: "US",
		postal: "29201",
		timezone: "America/New_York"
	},
	{
		town: "Harborwick",
		region: "New York",
		country: "US",
		postal: "11222",
		timezone: "America/New_York"
	},
	{
		town: "Austin",
		region: "Texas",
		country: "US",
		postal: "78701",
		timezone: "America/Chicago"
	},
	{
		town: "London",
		region: "England",
		country: "GB",
		postal: "EC1A",
		timezone: "Europe/London"
	},
	{
		town: "Berlin",
		region: "Berlin",
		country: "DE",
		postal: "10115",
		timezone: "Europe/Berlin"
	},
	{
		town: "Tokyo",
		region: "Tokyo",
		country: "JP",
		postal: "100-0001",
		timezone: "Asia/Tokyo"
	},
	{
		town: "Sydney",
		region: "New South Wales",
		country: "AU",
		postal: "2000",
		timezone: "Australia/Sydney"
	}
];
function TownPresets({ disabled }) {
	const town = useControl((s) => s.draft.settings.town);
	const applyTown = useControl((s) => s.applyTown);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium",
				children: "Set the town"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: "One tap fills town, region, country, postal code, and timezone. Or type any town in the fields below."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: TOWNS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled,
					onClick: () => applyTown(t),
					className: cn("h-11 rounded-full px-4 text-sm font-medium shadow-[var(--shadow-border)]", town === t.town ? "bg-accent text-accent-fg" : "bg-raised text-fg"),
					children: t.town
				}, t.town))
			})
		]
	});
}
function SectionHead({ kicker, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-6 max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-medium uppercase tracking-[0.16em] text-subtle",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 text-2xl font-semibold tracking-tight text-fg sm:text-[1.75rem]",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: body
			})
		]
	});
}
function OverviewPanel() {
	const draft = useControl((s) => s.draft);
	const setSection = useControl((s) => s.setSection);
	const hardenSystem = useControl((s) => s.hardenSystem);
	const grants = countGrants(draft.roles);
	const score = securityScore(draft.settings);
	const owner = memberById(draft, draft.settings.ownerMemberId);
	const wifi = draft.networks.find((n) => n.connected);
	const paper = resolveWallpaper(draft.settings);
	const tiles = [
		{
			label: "Owner",
			value: owner?.name ?? "Unset",
			go: "owner"
		},
		{
			label: "Town",
			value: draft.settings.town,
			go: "location"
		},
		{
			label: "Network",
			value: wifi?.ssid ?? "Offline",
			go: "network"
		},
		{
			label: "Wallpaper",
			value: paper.name,
			go: "wallpaper"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: "Control plane",
			title: draft.settings.systemName,
			body: "Running as Root, even with nothing else set up. Wallpaper, a new owner, town, networks, security, and globals all apply immediately. No save button. No approval."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallApp, { prominent: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: tiles.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setSection(t.go),
				className: "rounded-2xl bg-surface p-5 text-left shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium uppercase tracking-[0.14em] text-subtle",
					children: t.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-lg font-medium tracking-tight",
					children: t.value
				})]
			}, t.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium uppercase tracking-[0.14em] text-subtle",
							children: "Secure system"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-3xl font-medium tracking-tight tabular",
							children: score
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Hardening score out of 100"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: hardenSystem,
						children: "Secure now"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 h-1.5 overflow-hidden rounded-full bg-raised",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-accent",
						style: { width: `${score}%` }
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium uppercase tracking-[0.14em] text-subtle",
					children: "Permission cells"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 grid grid-cols-3 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs text-subtle",
							children: "Write"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-xl font-medium tabular",
							children: grants.write
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs text-subtle",
							children: "Read"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-xl font-medium tabular",
							children: grants.read
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs text-subtle",
							children: "None"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-xl font-medium tabular",
							children: grants.none
						})] })
					]
				})]
			})]
		})
	] });
}
function WallpaperPanel() {
	const access = useAccess("wallpaper");
	const settings = useControl((s) => s.draft.settings);
	const setSetting = useControl((s) => s.setSetting);
	if (access === "none") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Denied, {});
	const write = canWrite(access);
	const active = resolveWallpaper(settings);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: "Workspace",
			title: "Wallpaper",
			body: "Pick a preset, a color, or your own image. Root applies it the moment you choose — no prompt, no policy."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessBanner, { access }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4",
			children: WALLPAPERS.map((w) => {
				const selected = w.id === settings.wallpaperId;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: !write,
					onClick: () => setSetting("wallpaperId", w.id),
					className: cn("group relative overflow-hidden rounded-2xl text-left shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 active:scale-[0.98]", selected && "outline outline-2 outline-accent"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[16/10] overflow-hidden bg-raised",
						children: w.kind === "photo" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: w.src,
							alt: "",
							className: "h-full w-full object-cover outline outline-1 -outline-offset-1 outline-black/20"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full w-full",
							style: { background: w.wash }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2 px-3 py-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: w.name
						}), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-fg" }) : null]
					})]
				}, w.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: cn("flex cursor-pointer items-center justify-between gap-3 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]", settings.wallpaperId === "color" && "outline outline-2 outline-accent", !write && "pointer-events-none opacity-60"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "Any color"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: active.kind === "wash" && settings.wallpaperId === "color" ? settings.customColor : "Paint the desktop"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "color",
					"aria-label": "Wallpaper color",
					disabled: !write,
					value: settings.customColor || "#1c3a4a",
					onChange: (e) => {
						setSetting("customColor", e.target.value);
						setSetting("wallpaperId", "color");
					},
					className: "size-11 cursor-pointer rounded-lg border-0 bg-transparent p-0"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: cn("flex cursor-pointer flex-col justify-center rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]", settings.wallpaperId === "upload" && "outline outline-2 outline-accent", !write && "pointer-events-none opacity-60"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Your image"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: settings.wallpaperId === "upload" ? "Using your file" : "Upload a photo. It becomes the wallpaper now."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: "image/*",
						disabled: !write,
						className: "mt-3 block w-full text-sm text-muted file:mr-3 file:h-9 file:rounded-md file:border-0 file:bg-accent file:px-3 file:text-sm file:font-medium file:text-accent-fg",
						onChange: (e) => {
							const file = e.target.files?.[0];
							if (!file) return;
							compressImage(file).then((url) => {
								setSetting("customWallpaper", url);
								setSetting("wallpaperId", "upload");
							});
						}
					})
				]
			})]
		})
	] });
}
function compressImage(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onerror = () => reject(/* @__PURE__ */ new Error("read"));
		reader.onload = () => {
			const img = new Image();
			img.onload = () => {
				const scale = Math.min(1, 1280 / Math.max(img.width, img.height));
				const canvas = document.createElement("canvas");
				canvas.width = Math.max(1, Math.round(img.width * scale));
				canvas.height = Math.max(1, Math.round(img.height * scale));
				const ctx = canvas.getContext("2d");
				if (!ctx) {
					resolve(String(reader.result));
					return;
				}
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
				resolve(canvas.toDataURL("image/jpeg", .72));
			};
			img.onerror = () => resolve(String(reader.result));
			img.src = String(reader.result);
		};
		reader.readAsDataURL(file);
	});
}
function FieldsPanel({ section, kicker, title, body }) {
	const access = useAccess(section);
	const settings = useControl((s) => s.draft.settings);
	const setSetting = useControl((s) => s.setSetting);
	const hardenSystem = useControl((s) => s.hardenSystem);
	const fields = SECTION_FIELDS[section] ?? [];
	if (access === "none") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Denied, {});
	const write = canWrite(access);
	const score = securityScore(settings);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker,
			title,
			body
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessBanner, { access }),
		section === "location" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TownPresets, { disabled: !write }) : null,
		section === "security" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-col gap-3 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium",
				children: "Harden this system"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [
					"Firewall, encryption, secure boot, 2FA, USB lock, stealth, 2-minute auto-lock. Score is",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular text-fg",
						children: score
					}),
					"."
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				disabled: !write,
				onClick: hardenSystem,
				className: "shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4" }), "Secure now"]
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: section === "security" ? "" : "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldList, {
				fields,
				settings,
				disabled: !write,
				onChange: setSetting
			})
		})
	] });
}
function OwnerPanel() {
	const access = useAccess("owner");
	const draft = useControl((s) => s.draft);
	const transferOwner = useControl((s) => s.transferOwner);
	const appointOwner = useControl((s) => s.appointOwner);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	if (access === "none") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Denied, {});
	const write = canWrite(access);
	const owner = memberById(draft, draft.settings.ownerMemberId);
	const candidates = draft.members.filter((m) => m.id !== ROOT_MEMBER_ID);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: "Workspace",
			title: "Owner",
			body: "Name a new owner or hand it to someone already here. Root does it in one step — no approval, no waiting."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessBanner, { access }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-medium uppercase tracking-[0.14em] text-subtle",
				children: "Current owner"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-12 items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-fg",
						children: owner?.initials ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium tracking-tight",
							children: owner?.name ?? "Unset"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm text-muted",
							children: owner?.email
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "root",
						className: "ml-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "mr-1 size-3" }), "Owner"]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-3 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
			onSubmit: (e) => {
				e.preventDefault();
				if (!write || !name.trim()) return;
				appointOwner(name, email);
				setName("");
				setEmail("");
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "Set a new owner"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Creates the person and makes them owner immediately."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "owner-name",
							children: "Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "owner-name",
							className: "mt-2",
							value: name,
							disabled: !write,
							onChange: (e) => setName(e.target.value),
							placeholder: "Jordan Hale"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "owner-email",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "owner-email",
							className: "mt-2",
							value: email,
							disabled: !write,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "optional"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: !write || !name.trim(),
							className: "h-11",
							children: "Make owner"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 divide-y divide-border overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]",
			children: candidates.map((m) => {
				const active = m.id === draft.settings.ownerMemberId;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-10 items-center justify-center rounded-full bg-raised text-xs font-medium",
							children: m.initials
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: m.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm text-muted",
								children: m.email
							})]
						}),
						active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "write",
							children: "Named owner"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							disabled: !write,
							onClick: () => transferOwner(m.id),
							children: "Make owner"
						})
					]
				}, m.id);
			})
		})
	] });
}
function NetworkPanel() {
	const access = useAccess("network");
	const draft = useControl((s) => s.draft);
	const setSetting = useControl((s) => s.setSetting);
	const connectWifi = useControl((s) => s.connectWifi);
	const disconnectWifi = useControl((s) => s.disconnectWifi);
	const forgetWifi = useControl((s) => s.forgetWifi);
	const addWifi = useControl((s) => s.addWifi);
	const toggleInterface = useControl((s) => s.toggleInterface);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [ssid, setSsid] = (0, import_react.useState)("");
	const [sec, setSec] = (0, import_react.useState)("wpa3");
	if (access === "none") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Denied, {});
	const write = canWrite(access);
	const settings = draft.settings;
	const visibleNets = [...draft.networks].sort((a, b) => Number(b.connected) - Number(a.connected) || b.signal - a.signal);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: "System",
			title: "Network",
			body: "Join, leave, or forget any network. Change DNS, VPN, and radios without a gatekeeper."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessBanner, { access }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-3",
			children: draft.interfaces.map((iface) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: iface.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: iface.connected,
							disabled: !write || settings.airplaneMode,
							onCheckedChange: (c) => toggleInterface(iface.id, c)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-mono text-xs text-muted",
						children: iface.ip
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-subtle",
						children: [
							iface.speed,
							" · ",
							iface.mac
						]
					})
				]
			}, iface.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "Radios"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Airplane mode kills Wi-Fi and Bluetooth at once."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex h-11 items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								checked: settings.airplaneMode,
								disabled: !write,
								onCheckedChange: (c) => setSetting("airplaneMode", c)
							}), "Airplane"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex h-11 items-center gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								checked: settings.ipv6,
								disabled: !write,
								onCheckedChange: (c) => setSetting("ipv6", c)
							}), "IPv6"]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "hostname",
						children: "Hostname"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "hostname",
						className: "mt-2",
						value: settings.hostname,
						disabled: !write,
						onChange: (e) => setSetting("hostname", e.target.value)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "dnsMode",
						children: "DNS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
						id: "dnsMode",
						className: "mt-2",
						value: settings.dnsMode,
						disabled: !write,
						onChange: (e) => setSetting("dnsMode", e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "automatic",
							children: "Automatic"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "custom",
							children: "Custom"
						})]
					})] })]
				}),
				settings.dnsMode === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "dns",
						children: "Name servers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "dns",
						className: "mt-2 font-mono",
						value: settings.dnsServers.replaceAll("\n", ", "),
						disabled: !write,
						onChange: (e) => setSetting("dnsServers", e.target.value.split(",").map((x) => x.trim()).join("\n"))
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "addressMode",
						children: "Addressing"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
						id: "addressMode",
						className: "mt-2",
						value: settings.addressMode,
						disabled: !write,
						onChange: (e) => setSetting("addressMode", e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "dhcp",
							children: "DHCP"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "static",
							children: "Static"
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "gateway",
						children: "Gateway"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "gateway",
						className: "mt-2 font-mono",
						value: settings.gateway,
						disabled: !write,
						onChange: (e) => setSetting("gateway", e.target.value)
					})] })]
				}),
				settings.addressMode === "static" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "staticAddress",
						children: "IP address"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "staticAddress",
						className: "mt-2 font-mono",
						value: settings.staticAddress,
						disabled: !write,
						onChange: (e) => setSetting("staticAddress", e.target.value)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "subnet",
						children: "Subnet mask"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "subnet",
						className: "mt-2 font-mono",
						value: settings.subnet,
						disabled: !write,
						onChange: (e) => setSetting("subnet", e.target.value)
					})] })]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid gap-3 sm:grid-cols-[1fr_2fr] sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex h-11 items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: settings.proxyEnabled,
							disabled: !write,
							onCheckedChange: (c) => setSetting("proxyEnabled", c)
						}), "HTTP proxy"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "proxy.internal:8080",
						value: settings.proxyHost,
						disabled: !write || !settings.proxyEnabled,
						onChange: (e) => setSetting("proxyHost", e.target.value)
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [settings.wifiRadio && !settings.airplaneMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, { className: "size-4 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "Wi-Fi"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "secondary",
							disabled: !write,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Join network"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Join a network" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Connects immediately as Root. Hidden SSIDs are fine." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "ssid",
								children: "SSID"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "ssid",
								className: "mt-2",
								value: ssid,
								onChange: (e) => setSsid(e.target.value),
								placeholder: "Network name"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "sec",
								children: "Security"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
								id: "sec",
								className: "mt-2",
								value: sec,
								onChange: (e) => setSec(e.target.value),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "wpa3",
										children: "WPA3"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "wpa2",
										children: "WPA2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "enterprise",
										children: "Enterprise"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "open",
										children: "Open"
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "w-full",
								onClick: () => {
									addWifi(ssid, sec, true);
									setSsid("");
									setOpen(false);
								},
								children: "Connect now"
							})
						]
					})] })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border",
				children: visibleNets.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 px-5 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, { className: "size-4 text-muted" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-medium",
								children: n.ssid
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-subtle",
								children: [
									n.security.toUpperCase(),
									n.hidden ? " · Hidden" : "",
									n.saved ? " · Saved" : "",
									n.autoJoin ? " · Auto-join" : ""
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden text-xs tabular text-subtle sm:inline",
							children: [n.signal, "%"]
						}),
						n.connected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							disabled: !write,
							onClick: disconnectWifi,
							children: "Disconnect"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							disabled: !write || settings.airplaneMode || !settings.wifiRadio,
							onClick: () => connectWifi(n.id),
							children: "Join"
						}),
						n.saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon-sm",
							variant: "ghost",
							disabled: !write,
							"aria-label": `Forget ${n.ssid}`,
							onClick: () => forgetWifi(n.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
						}) : null
					]
				}, n.id))
			})]
		})
	] });
}
function MembersPanel() {
	const access = useAccess("members");
	const draft = useControl((s) => s.draft);
	const setMemberRole = useControl((s) => s.setMemberRole);
	const addMember = useControl((s) => s.addMember);
	const removeMember = useControl((s) => s.removeMember);
	const simulate = useControl((s) => s.simulate);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [roleId, setRoleId] = (0, import_react.useState)("role-viewer");
	if (access === "none") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Denied, {});
	const write = canWrite(access);
	const assignable = draft.roles.filter((r) => r.id !== ROOT_ROLE_ID);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: "Access",
			title: "Members",
			body: "Add people, change their role, or preview the console as them. Root itself cannot be removed."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessBanner, { access }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open,
				onOpenChange: setOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						disabled: !write,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add member"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Add member" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "They get the role you pick, immediately." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "mname",
							children: "Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "mname",
							className: "mt-2",
							value: name,
							onChange: (e) => setName(e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "memail",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "memail",
							className: "mt-2",
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "optional"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "mrole",
							children: "Role"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
							id: "mrole",
							className: "mt-2",
							value: roleId,
							onChange: (e) => setRoleId(e.target.value),
							children: assignable.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: r.id,
								children: r.name
							}, r.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full",
							onClick: () => {
								addMember(name, email, roleId);
								setName("");
								setEmail("");
								setOpen(false);
							},
							children: "Add"
						})
					]
				})] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 divide-y divide-border overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]",
			children: draft.members.map((m) => {
				const role = roleById(draft, m.roleId);
				const locked = m.id === ROOT_MEMBER_ID;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-10 items-center justify-center rounded-full bg-raised text-xs font-medium",
								children: m.initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-medium",
									children: [m.name, locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "root",
										className: "ml-2",
										children: "Root"
									}) : null]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm text-muted",
									children: m.email
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
									value: m.roleId,
									disabled: !write || locked,
									onChange: (e) => setMemberRole(m.id, e.target.value),
									className: "w-40",
									children: draft.roles.filter((r) => locked ? true : r.id !== ROOT_ROLE_ID).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: r.id,
										children: r.name
									}, r.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => simulate(m.id),
									children: "View as"
								}),
								locked ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon-sm",
									variant: "ghost",
									disabled: !write,
									"aria-label": `Remove ${m.name}`,
									onClick: () => removeMember(m.id),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: role?.name
						})
					]
				}, m.id);
			})
		})
	] });
}
var ACCESS_LABEL = {
	none: "—",
	read: "R",
	write: "W"
};
function PermissionsPanel() {
	const access = useAccess("permissions");
	const draft = useControl((s) => s.draft);
	const cycleGrant = useControl((s) => s.cycleGrant);
	const addRole = useControl((s) => s.addRole);
	const removeRole = useControl((s) => s.removeRole);
	const simulate = useControl((s) => s.simulate);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [cloneFrom, setCloneFrom] = (0, import_react.useState)("role-viewer");
	if (access === "none") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Denied, {});
	const write = canWrite(access);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: "Access",
			title: "Permissions",
			body: "Read, write, or none — per role, per area. Root is locked to write on every cell. Cycle a cell: none → read → write."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessBanner, { access }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 text-xs text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-raised px-2 py-1 shadow-[var(--shadow-border)]",
						children: "— none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-raised px-2 py-1 shadow-[var(--shadow-border)]",
						children: "R read"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-accent px-2 py-1 text-accent-fg",
						children: "W write"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
				open,
				onOpenChange: setOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						disabled: !write,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "New role"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "New role" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Clone grants from an existing role, then edit the matrix." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "rname",
							children: "Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "rname",
							className: "mt-2",
							value: name,
							onChange: (e) => setName(e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "rclone",
							children: "Clone from"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
							id: "rclone",
							className: "mt-2",
							value: cloneFrom,
							onChange: (e) => setCloneFrom(e.target.value),
							children: draft.roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: r.id,
								children: r.name
							}, r.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full",
							onClick: () => {
								addRole(name, cloneFrom);
								setName("");
								setOpen(false);
							},
							children: "Create"
						})
					]
				})] })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 hidden overflow-x-auto rounded-2xl bg-surface shadow-[var(--shadow-border)] md:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[52rem] border-collapse text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "sticky left-0 bg-surface px-4 py-3 font-medium",
							children: "Role"
						}),
						RESOURCES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-2 py-3 text-center text-xs font-medium text-muted",
							children: r.label
						}, r.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-3 py-3" })
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: draft.roles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border last:border-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "sticky left-0 bg-surface px-4 py-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [role.locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5 text-muted" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: role.name
								})]
							})
						}),
						RESOURCES.map((res) => {
							const a = role.grants[res.id];
							const locked = role.locked || role.id === "role-root";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-2 py-2 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: !write || locked,
									onClick: () => cycleGrant(role.id, res.id),
									className: cn("inline-flex size-11 items-center justify-center rounded-md text-xs font-medium tabular", a === "write" && "bg-accent text-accent-fg", a === "read" && "bg-raised text-fg shadow-[var(--shadow-border)]", a === "none" && "text-subtle shadow-[var(--shadow-border)]"),
									"aria-label": `${role.name} ${res.label} ${a}`,
									children: ACCESS_LABEL[a]
								})
							}, res.id);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 text-right",
							children: role.builtin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								onClick: () => {
									const member = draft.members.find((m) => m.roleId === role.id);
									if (member) simulate(member.id);
								},
								children: "View"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "icon-sm",
								variant: "ghost",
								disabled: !write,
								"aria-label": `Delete ${role.name}`,
								onClick: () => removeRole(role.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
							})
						})
					]
				}, role.id)) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 space-y-3 md:hidden",
			children: draft.roles.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: role.name
					}), role.builtin ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon-sm",
						variant: "ghost",
						disabled: !write,
						onClick: () => removeRole(role.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2",
					children: RESOURCES.map((res) => {
						const a = role.grants[res.id];
						const locked = role.locked || role.id === "role-root";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: !write || locked,
							onClick: () => cycleGrant(role.id, res.id),
							className: cn("flex h-11 items-center justify-between rounded-lg px-3 text-sm", a === "write" && "bg-accent text-accent-fg", a === "read" && "bg-raised shadow-[var(--shadow-border)]", a === "none" && "shadow-[var(--shadow-border)] text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: res.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular text-xs",
								children: ACCESS_LABEL[a]
							})]
						}, res.id);
					})
				})]
			}, role.id))
		})
	] });
}
function AuditPanel() {
	const access = useAccess("audit");
	const audit = useControl((s) => s.audit);
	const clock24h = useControl((s) => s.draft.settings.clock24h);
	const [filter, setFilter] = (0, import_react.useState)("all");
	if (access === "none") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Denied, {});
	const rows = (0, import_react.useMemo)(() => filter === "all" ? audit : audit.filter((e) => e.resource === filter), [audit, filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			kicker: "Access",
			title: "Audit log",
			body: "Every saved change. Root writes land here with no review queue."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessBanner, { access }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex gap-2 overflow-x-auto pb-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
				active: filter === "all",
				onClick: () => setFilter("all"),
				children: "All"
			}), RESOURCES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
				active: filter === r.id,
				onClick: () => setFilter(r.id),
				children: r.label
			}, r.id))]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-3 divide-y divide-border overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]",
			children: rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "px-5 py-10 text-center text-sm text-muted",
				children: "No events in this filter."
			}) : rows.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start gap-4 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: e.summary
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							e.actorName,
							" · ",
							e.resource
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
					className: "shrink-0 text-xs tabular text-subtle",
					children: formatTime(e.at, clock24h)
				})]
			}, e.id))
		})
	] });
}
function FilterChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-9 shrink-0 rounded-full px-3 text-sm font-medium", active ? "bg-accent text-accent-fg" : "bg-surface text-muted shadow-[var(--shadow-border)]"),
		children
	});
}
function formatTime(at, clock24h) {
	return new Date(at).toLocaleString(void 0, {
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "2-digit",
		hour12: !clock24h
	});
}
var ICONS = {
	console: Terminal,
	overview: LayoutDashboard,
	wallpaper: Image$1,
	appearance: Palette,
	owner: Crown,
	location: MapPin,
	network: Wifi,
	security: Shield,
	global: SlidersHorizontal,
	members: Users,
	permissions: KeyRound,
	audit: ScrollText
};
function HelmApp() {
	const settings = useControl((s) => s.draft.settings);
	const section = useControl((s) => s.section);
	const simulating = useControl((s) => s.simulating);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		Promise.resolve(useControl.persist.rehydrate()).then(() => {
			if (cancelled) return;
			const s = useControl.getState();
			useControl.setState({
				draft: ensureRoot(s.draft),
				saved: ensureRoot(s.saved),
				actorId: ROOT_MEMBER_ID,
				simulating: false,
				hydrated: true
			});
		});
		return () => {
			cancelled = true;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		const apply = () => {
			const theme = settings.theme === "system" ? window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark" : settings.theme;
			root.dataset.theme = theme;
			root.dataset.density = settings.density;
			root.dataset.motion = settings.reduceMotion ? "off" : "on";
		};
		apply();
		const mq = window.matchMedia("(prefers-color-scheme: light)");
		mq.addEventListener("change", apply);
		return () => mq.removeEventListener("change", apply);
	}, [
		settings.theme,
		settings.density,
		settings.reduceMotion
	]);
	const resolvedTheme = settings.theme === "system" ? void 0 : settings.theme;
	const paper = resolveWallpaper(settings);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, {
		delayDuration: 200,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-dvh text-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: [paper.kind === "photo" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: paper.src,
					alt: "",
					className: "h-full w-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full w-full",
					style: { background: paper.wash }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/72" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex min-h-dvh flex-col p-0 sm:p-3",
				children: [
					simulating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimBanner, {}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-h-0 flex-1 overflow-hidden sm:rounded-2xl sm:bg-bg/90 sm:shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 flex-col bg-bg/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
								className: cn("min-h-0 flex-1", section === "console" ? "flex flex-col overflow-hidden" : "overflow-y-auto px-4 py-6 sm:px-8 sm:py-8"),
								children: section === "console" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsolePanel, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto w-full max-w-4xl pb-24",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBody, { section })
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			theme: resolvedTheme === "light" ? "light" : "dark",
			position: "bottom-right",
			toastOptions: { classNames: {
				toast: "bg-surface text-fg shadow-[var(--shadow-border)] border-0",
				title: "text-fg",
				description: "text-muted"
			} }
		})]
	});
}
function SectionBody({ section }) {
	switch (section) {
		case "overview": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewPanel, {});
		case "wallpaper": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WallpaperPanel, {});
		case "appearance": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldsPanel, {
			section: "appearance",
			kicker: "Workspace",
			title: "Appearance",
			body: "Theme, density, and motion. Root applies them the moment you change them."
		});
		case "owner": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OwnerPanel, {});
		case "location": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldsPanel, {
			section: "location",
			kicker: "Workspace",
			title: "Town",
			body: "Town, region, country, and timezone. Locale for this system, set without a request."
		});
		case "network": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkPanel, {});
		case "security": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldsPanel, {
			section: "security",
			kicker: "System",
			title: "Secure",
			body: "Harden the box in one pass, or flip any control yourself. Root is not asked twice."
		});
		case "global": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldsPanel, {
			section: "global",
			kicker: "System",
			title: "Global",
			body: "System-wide defaults — name, updates, radios, diagnostics. Everything is on the table."
		});
		case "members": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MembersPanel, {});
		case "permissions": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PermissionsPanel, {});
		case "audit": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditPanel, {});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewPanel, {});
	}
}
function NavList({ onPick }) {
	const section = useControl((s) => s.section);
	const setSection = useControl((s) => s.setSection);
	const labels = useControl((s) => s.draft.settings.sidebarLabels);
	const simulating = useControl((s) => s.simulating);
	const actorId = useControl((s) => s.actorId);
	const draft = useControl((s) => s.draft);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "flex flex-col gap-5 px-3 py-2",
		children: [
			"Workspace",
			"System",
			"Access"
		].map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [labels ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1 px-2 text-[11px] font-medium uppercase tracking-[0.16em] text-subtle",
			children: group
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-0.5",
			children: NAV.filter((n) => n.group === group).map((item) => {
				const Icon = ICONS[item.id];
				if (simulating && item.resource && (() => {
					const member = draft.members.find((m) => m.id === actorId);
					const role = draft.roles.find((r) => r.id === member?.roleId);
					return role && !role.locked ? role.grants[item.resource] === "none" : false;
				})()) return null;
				const active = section === item.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setSection(item.id);
						onPick?.();
					},
					className: cn("flex h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm font-medium transition-[background-color,color] duration-150", active ? "bg-raised text-fg" : "text-muted hover:bg-raised/70 hover:text-fg"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: item.label
					})]
				}) }, item.id);
			})
		})] }, group))
	});
}
function DesktopNav() {
	const name = useControl((s) => s.draft.settings.systemName);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "hidden w-60 shrink-0 flex-col border-r border-border bg-surface/80 md:flex",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5 px-5 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelmMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm font-semibold tracking-tight",
						children: "Helm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-xs text-subtle",
						children: name
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0 flex-1 overflow-y-auto pb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavList, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border p-3 pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootChip, {})
			})
		]
	});
}
function HelmMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flex size-8 items-center justify-center rounded-lg bg-accent text-accent-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			className: "size-4",
			fill: "none",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M6 8.2C6 6.4 7.5 5 9.3 5h5.4C16.5 5 18 6.4 18 8.2v7.2c0 1.2-1.3 2-2.4 1.55L12 15.4l-3.6 1.55C7.3 17.4 6 16.6 6 15.4V8.2Z",
					stroke: "currentColor",
					strokeWidth: "1.6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "9.6",
					r: "1.5",
					stroke: "currentColor",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 11.1v2",
					stroke: "currentColor",
					strokeWidth: "1.5",
					strokeLinecap: "round"
				})
			]
		})
	});
}
function RootChip() {
	const actor = useActor();
	const returnToRoot = useControl((s) => s.returnToRoot);
	if (actor.isRoot) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 rounded-xl bg-raised px-3 py-2.5 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-7 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-fg",
			children: "R"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium leading-none",
				children: "Root"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[11px] text-subtle",
				children: "Full write · no red tape"
			})]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: returnToRoot,
		className: "flex w-full items-center gap-2 rounded-xl bg-raised px-3 py-2.5 text-left shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-7 items-center justify-center rounded-full bg-raised text-[10px] font-semibold shadow-[var(--shadow-border)]",
			children: actor.member.initials
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-sm font-medium leading-none",
				children: actor.member.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[11px] text-subtle",
				children: "Return to Root"
			})]
		})]
	});
}
function TopBar() {
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const setCommand = useCommandOpen();
	const actor = useActor();
	const members = useControl((s) => s.draft.members);
	const simulate = useControl((s) => s.simulate);
	const returnToRoot = useControl((s) => s.returnToRoot);
	const resetFactory = useControl((s) => s.resetFactory);
	const access = useAccess(useControl((s) => {
		return NAV.find((n) => n.id === s.section)?.resource ?? "global";
	}));
	const section = useControl((s) => s.section);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex h-14 shrink-0 items-center gap-2 border-b border-border px-3 sm:h-16 sm:px-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "icon-sm",
				variant: "ghost",
				className: "md:hidden",
				"aria-label": "Open menu",
				onClick: () => setMobileOpen(true),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: mobileOpen,
				onOpenChange: setMobileOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 px-5 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelmMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Helm"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-y-auto pb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavList, { onPick: () => setMobileOpen(false) })
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setCommand(true),
				className: "hidden h-10 min-w-0 flex-1 items-center gap-2 rounded-lg bg-raised px-3 text-left text-sm text-subtle shadow-[var(--shadow-border)] sm:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: "Search settings"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
						className: "ml-auto rounded bg-bg px-1.5 py-0.5 font-mono text-[10px] text-muted",
						children: "⌘K"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "icon-sm",
				variant: "ghost",
				className: "sm:hidden",
				"aria-label": "Search",
				onClick: () => setCommand(true),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ml-auto flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstallApp, {}),
					section !== "overview" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						className: "hidden sm:inline-flex",
						variant: access === "write" ? "write" : access === "read" ? "read" : "none",
						children: access === "write" ? "Write" : access === "read" ? "Read" : "No access"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						className: "hidden sm:inline-flex",
						variant: "root",
						children: "Root session"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							size: "sm",
							className: "gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-5 items-center justify-center rounded-full bg-accent text-[9px] font-semibold text-accent-fg",
								children: actor.member.initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden max-w-28 truncate sm:inline",
								children: actor.isRoot ? "Root" : actor.member.name
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Run as" }),
							members.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onSelect: () => m.id === "member-root" ? returnToRoot() : simulate(m.id),
								children: [m.name, m.id === "member-root" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto text-[11px] text-subtle",
									children: "always"
								}) : null]
							}, m.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onSelect: () => {
									resetFactory();
									toast("Restored factory defaults");
								},
								children: "Reset everything"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onSelect: () => returnToRoot(),
								children: "Return to Root"
							})
						]
					})] })
				]
			})
		]
	});
}
function SimBanner() {
	const actor = useActor();
	const returnToRoot = useControl((s) => s.returnToRoot);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3 bg-accent px-4 py-2 text-sm text-accent-fg sm:rounded-t-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "min-w-0 truncate",
			children: [
				"Previewing ",
				actor.member.name,
				" · ",
				actor.role.name,
				". Root is still in charge."
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "sm",
			variant: "secondary",
			onClick: returnToRoot,
			children: "Return to Root"
		})]
	});
}
var setCommandOpen = () => {};
function useCommandOpen() {
	const [, setTick] = (0, import_react.useState)(0);
	return (open) => {
		setCommandOpen(open);
		setTick((n) => n + 1);
	};
}
function CommandPalette() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	const setSection = useControl((s) => s.setSection);
	setCommandOpen = (v) => {
		setOpen(v);
		if (v) setQ("");
	};
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setOpen((o) => !o);
				setQ("");
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const results = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		const items = NAV.map((n) => ({
			id: n.id,
			label: n.label,
			hint: n.group,
			section: n.id
		}));
		for (const [section, fields] of Object.entries(SECTION_FIELDS)) for (const f of fields ?? []) items.push({
			id: f.key,
			label: f.label,
			hint: section,
			section
		});
		if (!query) return items.slice(0, 12);
		return items.filter((i) => i.label.toLowerCase().includes(query) || i.hint.toLowerCase().includes(query));
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "sr-only",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Search settings" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Jump to any panel or control" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-border px-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Jump to a setting",
						className: "h-12 border-0 bg-transparent shadow-none focus-visible:shadow-none",
						autoFocus: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "max-h-72 overflow-y-auto p-2",
					children: results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "px-3 py-6 text-center text-sm text-muted",
						children: "Nothing matches."
					}) : results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex h-11 w-full items-center justify-between rounded-lg px-3 text-sm hover:bg-raised",
						onClick: () => {
							setSection(r.section);
							setOpen(false);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs capitalize text-subtle",
							children: r.hint
						})]
					}) }, r.id + r.section))
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelmApp, {});
}
//#endregion
export { Home as component };
