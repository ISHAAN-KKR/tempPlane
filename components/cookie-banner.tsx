"use client";

import { useThemeStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const { cookiesAccepted, acceptCookies } = useThemeStore();
  if (cookiesAccepted) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 glass rounded-full px-4 py-2 flex items-center gap-3">
      <p className="text-sm">We use cookies for a smoother experience.</p>
      <Button size="sm" onClick={acceptCookies} className="rounded-full">
        Got it
      </Button>
    </div>
  );
}
