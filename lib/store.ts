"use client";

import { create } from "zustand";

type Theme = "light" | "dark";

type UIState = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  initTheme: () => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
  annual: boolean;
  setAnnual: (v: boolean) => void;
  cookiesAccepted: boolean;
  acceptCookies: () => void;
};

export const useThemeStore = create<UIState>((set) => ({
  theme: "light",
  setTheme: (t) => {
    localStorage.setItem("theme", t);
    set({ theme: t });
  },
  initTheme: () => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("theme") as Theme)) || null;
    if (saved) set({ theme: saved });
    else {
      const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
      set({ theme: prefersDark ? "dark" : "light" });
    }
  },
  mobileOpen: false,
  setMobileOpen: (v) => set({ mobileOpen: v }),
  annual: true,
  setAnnual: (v) => set({ annual: v }),
  cookiesAccepted: typeof window !== "undefined" ? localStorage.getItem("cookies") == "1" : False
}));
