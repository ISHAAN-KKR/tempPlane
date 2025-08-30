"use client";

import { plans } from "@/lib/data";
import { useThemeStore } from "@/lib/store";
import { inr } from "@/lib/utils";
import { Button } from "./ui/button";
import { Info, Sparkles } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function Pricing() {
  const { annual, setAnnual } = useThemeStore();
  return (
    <section>
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Simple pricing</h1>
        <p className="text-muted-foreground mt-2">Monthly or annual. No lock-in.</p>
        <div className="inline-flex mt-4 items-center gap-2 rounded-full border px-2 py-1">
          <button
            onClick={() => setAnnual(false)}
            className={`rounded-full px-3 py-1 text-sm ${!annual ? "bg-primary text-primary-foreground" : ""}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`rounded-full px-3 py-1 text-sm ${annual ? "bg-primary text-primary-foreground" : ""}`}
          >
            Annual <span className="ml-1 inline-flex items-center gap-1 text-xs"><Sparkles className="h-3 w-3" />save ~2 months</span>
          </button>
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {plans.map((p) => {
          const price = annual ? p.priceYearly : p.priceMonthly;
          return (
            <div key={p.id} className={`rounded-3xl p-6 glass relative ${p.mostPopular ? "ring-2 ring-primary" : ""}`}>
              {p.mostPopular && <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">Most Popular</span>}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-2 text-3xl font-semibold">{inr(price)} <span className="text-sm text-muted-foreground">{annual ? "/year" : "/month"}</span></div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full rounded-full">Get started</Button>
              <div className="mt-3 text-xs text-muted-foreground flex items-center gap-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5" />
                  </TooltipTrigger>
                  <TooltipContent>Prices include GST where applicable.</TooltipContent>
                </Tooltip>
                No card for Basic plan.
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
