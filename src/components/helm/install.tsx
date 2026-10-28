import { useEffect, useState, useSyncExternalStore } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type InstallPrompt = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

type Snap = {
  canPrompt: boolean;
  installed: boolean;
};

let promptEvent: InstallPrompt | null = null;
let snap: Snap = { canPrompt: false, installed: false };
const listeners = new Set<() => void>();
let wired = false;

function emit(next: Partial<Snap>) {
  snap = { ...snap, ...next };
  listeners.forEach((fn) => fn());
}

function standalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    ("standalone" in navigator && Boolean((navigator as Navigator & { standalone?: boolean }).standalone))
  );
}

function wireInstall() {
  if (wired || typeof window === "undefined") return;
  wired = true;
  if (standalone()) emit({ installed: true });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    promptEvent = event as InstallPrompt;
    emit({ canPrompt: true, installed: false });
  });

  window.addEventListener("appinstalled", () => {
    promptEvent = null;
    emit({ canPrompt: false, installed: true });
  });

  if (import.meta.env.PROD && "serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function getSnap() {
  return snap;
}

export function InstallApp({ prominent = false }: { prominent?: boolean }) {
  const state = useSyncExternalStore(subscribe, getSnap, getSnap);
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState<"android" | "ios" | "desktop">("android");

  useEffect(() => {
    wireInstall();
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(ua)) setHint("ios");
    else if (/Android/i.test(ua)) setHint("android");
    else setHint("desktop");
  }, []);

  if (state.installed) {
    if (!prominent) return null;
    return (
      <p className="rounded-2xl bg-surface px-5 py-4 text-sm text-muted shadow-[var(--shadow-border)]">
        Helm is installed on this device.
      </p>
    );
  }

  async function install() {
    if (promptEvent) {
      await promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      promptEvent = null;
      emit({
        canPrompt: false,
        installed: choice.outcome === "accepted",
      });
      if (choice.outcome === "accepted") return;
    }
    setOpen(true);
  }

  return (
    <>
      {prominent ? (
        <div className="mb-4 flex flex-col gap-3 rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium">Install Helm</p>
            <p className="mt-1 text-sm text-muted">
              Adds it to your home screen. Opens full screen, with your settings kept on this device.
            </p>
          </div>
          <Button className="shrink-0" onClick={install}>
            <Download className="size-4" />
            Install
          </Button>
        </div>
      ) : (
        <Button size="sm" onClick={install} aria-label="Install Helm">
          <Download className="size-4" />
          <span className="hidden min-[380px]:inline">Install</span>
        </Button>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Install Helm</DialogTitle>
            <DialogDescription>
              {state.canPrompt
                ? "Your browser can install it directly."
                : "Add Helm to your home screen. It opens like an app, without the browser bar."}
            </DialogDescription>
          </DialogHeader>
          {hint === "android" ? (
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted">
              <li>Open Helm in Chrome once it is published.</li>
              <li>Tap the menu, then Install app or Add to Home screen.</li>
              <li>Confirm. The icon lands next to your other apps.</li>
            </ol>
          ) : null}
          {hint === "ios" ? (
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted">
              <li>Open Helm in Safari.</li>
              <li>Tap Share, then Add to Home Screen.</li>
              <li>Tap Add.</li>
            </ol>
          ) : null}
          {hint === "desktop" ? (
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted">
              <li>Open the published Helm link in Chrome or Edge.</li>
              <li>Click the install icon in the address bar.</li>
              <li>Or open that link on your phone and use the menu to install.</li>
            </ol>
          ) : null}
          <Button className="mt-5 w-full" onClick={() => setOpen(false)}>
            Got it
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
