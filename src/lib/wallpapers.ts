export type Wallpaper = {
  id: string;
  name: string;
  kind: "photo" | "wash";
  src?: string;
  wash?: string;
};

export const WALLPAPERS: Wallpaper[] = [
  { id: "linen", name: "Linen", kind: "photo", src: "/wallpapers/linen.jpg" },
  { id: "basalt", name: "Basalt", kind: "photo", src: "/wallpapers/basalt.jpg" },
  { id: "harbor", name: "Harbor", kind: "photo", src: "/wallpapers/harbor.jpg" },
  { id: "canopy", name: "Canopy", kind: "photo", src: "/wallpapers/canopy.jpg" },
  { id: "adobe", name: "Adobe", kind: "photo", src: "/wallpapers/adobe.jpg" },
  { id: "rain", name: "Rain", kind: "photo", src: "/wallpapers/rain.jpg" },
  { id: "ink", name: "Ink", kind: "wash", wash: "#0b0b0a" },
  { id: "paper", name: "Paper", kind: "wash", wash: "#e8e4dc" },
];

export function wallpaperById(id: string) {
  return WALLPAPERS.find((w) => w.id === id) ?? WALLPAPERS[0]!;
}

export function resolveWallpaper(input: {
  wallpaperId: string;
  customWallpaper?: string;
  customColor?: string;
}): Wallpaper {
  if (input.wallpaperId === "upload" && input.customWallpaper) {
    return { id: "upload", name: "Your image", kind: "photo", src: input.customWallpaper };
  }
  if (input.wallpaperId === "color") {
    return {
      id: "color",
      name: "Custom color",
      kind: "wash",
      wash: input.customColor || "#1a1916",
    };
  }
  return wallpaperById(input.wallpaperId);
}
