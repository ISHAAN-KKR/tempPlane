"use client";

import { testimonials } from "@/lib/data";
import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  return (
    <section className="container py-16">
      <div className="glass rounded-3xl p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">Trusted by travellers</h3>
          <div className="flex gap-1 text-yellow-500" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <div className="relative h-40 w-40 overflow-hidden rounded-2xl">
            <Image alt={testimonials[idx].name} src={testimonials[idx].avatar} fill className="object-cover" />
          </div>
          <div>
            <p className="text-lg">“{testimonials[idx].quote}”</p>
            <p className="mt-2 text-sm text-muted-foreground">
              — {testimonials[idx].name}, {testimonials[idx].role}
            </p>
            <div className="mt-4 flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 w-8 rounded-full ${idx === i ? "bg-primary" : "bg-foreground/20"}`}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
