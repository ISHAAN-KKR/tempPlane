import type { KPI, MetricPoint, Plan } from "@/types";

export const BRAND_NAME = "AeroPulse";
export const TAGLINE = "Predict delays. Plan better.";
export const TARGET_AUDIENCE = "Indian frequent flyers, travel admins, and OTA ops teams";
export const CTA_PRIMARY = "Check delay risk";
export const CTA_SECONDARY = "View analytics";

export const plans: Plan[] = [
  {
    id: "free",
    name: "Basic",
    priceMonthly: 0,
    priceYearly: 0,
    features: ["3 risk checks/day", "Email tips", "Blog access"]
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 499,
    priceYearly: 4990,
    features: ["Unlimited checks", "Route-based insights", "SMS alerts"],
    mostPopular: true
  },
  {
    id: "biz",
    name: "Business",
    priceMonthly: 1999,
    priceYearly: 19990,
    features: ["Team workspace", "CSV exports", "Priority support"]
  }
];

export const kpis: KPI[] = [
  { label: "On-time this week", value: "78%", delta: "+3%" },
  { label: "Avg delay (mins)", value: "14", delta: "-2" },
  { label: "High-risk routes", value: "6", delta: "±0" },
  { label: "Morning fog days", value: "2", delta: "+1" }
];

export const metricSeries: MetricPoint[] = [
  { date: "2025-08-01", onTime: 82, delayed: 18 },
  { date: "2025-08-05", onTime: 80, delayed: 20 },
  { date: "2025-08-10", onTime: 77, delayed: 23 },
  { date: "2025-08-15", onTime: 79, delayed: 21 },
  { date: "2025-08-20", onTime: 81, delayed: 19 },
  { date: "2025-08-25", onTime: 78, delayed: 22 }
];

export const testimonials = [
  {
    name: "Ananya",
    role: "Frequent flyer",
    quote:
      "Simple and accurate. I add 20 minutes when AeroPulse says medium risk and it saves my day.",
    avatar: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Ravi",
    role: "Travel admin",
    quote: "Team loves the charts. We now schedule buffers for vulnerable routes.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"
  }
];

export const faq = [
  {
    q: "Is this a booking site?",
    a: "No. We’re a prediction and analytics layer that helps you plan better with your existing bookings."
  },
  {
    q: "How do you predict?",
    a: "We use historic patterns, seasonal factors and simple rules to present a realistic risk score. This demo uses local seed data."
  },
  {
    q: "Is my data stored?",
    a: "In this demo, inputs stay in your browser. No backend involved."
  }
];
