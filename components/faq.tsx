"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { faq } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
      <Accordion.Root type="single" collapsible className="grid gap-3">
        {faq.map((f, i) => (
          <Accordion.Item key={i} value={`item-${i}`} className="glass rounded-2xl">
            <Accordion.Header>
              <Accordion.Trigger className="w-full px-4 py-3 flex items-center justify-between">
                <span className="text-left">{f.q}</span>
                <ChevronDown className="h-4 w-4" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-4 pb-4 text-sm text-muted-foreground">{f.a}</Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
