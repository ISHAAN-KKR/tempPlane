import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MotionSection } from "./motion-section";

export function Hero() {
  return (
    <MotionSection className="container pt-16 pb-8">
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2 text-xs rounded-full border px-3 py-1 bg-foreground/5">
            Built for India • Premium glass look
          </p>
          <h1 className="mt-4 font-display text-5xl leading-tight">
            Predict delays. <span className="text-primary">Plan better.</span>
          </h1>
          <p className="mt-3 text-muted-foreground max-w-prose">
            AeroPulse gives travellers and ops teams a clear, realistic risk score before you head out.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/dashboard">
              <Button className="rounded-full">Check delay risk</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="rounded-full">View pricing</Button>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl glass">
            <Image
              alt="AeroPulse cover"
              src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1600&auto=format&fit=crop"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
