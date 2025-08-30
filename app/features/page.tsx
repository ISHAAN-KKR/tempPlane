import { FeatureGrid } from "@/components/feature-grid";
import { MotionSection } from "@/components/motion-section";
import Image from "next/image";

export default function FeaturesPage() {
  return (
    <div className="container py-12 space-y-12">
      <MotionSection>
        <h1 className="text-4xl font-semibold">Features built for Indian flyers</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Glassy visuals, precise predictions, delightful UX. Works beautifully on mobile and desktop.
        </p>
      </MotionSection>
      <FeatureGrid />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-3xl">
          <h3 className="text-xl font-semibold">Interactive product shots</h3>
          <p className="text-sm text-muted-foreground mb-4">Micro-interactions and smooth motion on hover.</p>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              alt="Dashboard mock"
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="glass p-6 rounded-3xl">
          <h3 className="text-xl font-semibold">Code-level quality</h3>
          <ul className="mt-3 list-disc pl-6 text-sm text-muted-foreground space-y-1">
            <li>Type-safe forms with React Hook Form + Zod</li>
            <li>Zustand state for theme, drawers, toggles</li>
            <li>Recharts-driven analytics</li>
            <li>MDX-ready blog with SEO</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
