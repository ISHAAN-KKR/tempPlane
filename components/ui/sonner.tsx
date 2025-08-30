"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster(props: React.ComponentProps<typeof SonnerToaster>) {
  return <SonnerToaster expand richColors closeButton {...props} />;
}
