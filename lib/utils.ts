import { type ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function inr(n: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
}

export function predictDelay({ flight, date, origin, destination }: { flight: string; date: string; origin: string; destination: string }) {
  const hash = [...(flight + origin + destination + date)].reduce((a, c) => a + c.charCodeAt(0), 0);
  const risk = hash % 100; // 0..99
  if (risk < 30) return { label: "On-time", risk: "Low", probability: 0.86 };
  if (risk < 70) return { label: "Watch", risk: "Medium", probability: 0.68 };
  return { label: "Likely delay", risk: "High", probability: 0.42 };
}
