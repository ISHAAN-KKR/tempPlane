"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function MotionSection({ className, children }: HTMLAttributes<HTMLDivElement>) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) {
    return <section className={cn(className)}>{children}</section>;
  }
  return (
    <motion.section
      className={cn(className)}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
