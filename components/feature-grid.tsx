import { Activity, AlarmClock, CloudFog, Map, ShieldCheck, Sparkles } from "lucide-react";
import { MotionSection } from "./motion-section";
import { cn } from "@/lib/utils";

const items = [
  { icon: AlarmClock, title: "Instant risk", text: "Clear on-time vs delay outlook." },
  { icon: CloudFog, title: "Seasonal context", text: "Fog, monsoon and traffic patterns." },
  { icon: Map, title: "Route insights", text: "Know vulnerable connections." },
  { icon: ShieldCheck, title: "Trustworthy UX", text: "Accessible, fast, and elegant." },
  { icon: Activity, title: "Live-ish demo", text: "Local data with realistic behaviour." },
  { icon: Sparkles, title: "Micro-interactions", text: "Smooth hovers and subtle motion." }
];

export function FeatureGrid({ compact = false }: { compact?: boolean }) {
  return (
    <MotionSection className={cn("grid gap-4", compact ? "grid-cols-2" : "md:grid-cols-3")}>
      {items.map((it, i) => (
        <div key={i} className="glass p-5 rounded-3xl">
          <it.icon className="h-5 w-5 text-primary" />
          <h4 className="mt-2 font-semibold">{it.title}</h4>
          <p className="text-sm text-muted-foreground">{it.text}</p>
        </div>
      ))}
    </MotionSection>
  );
}
