export type Plan = {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  mostPopular?: boolean;
};

export type PostFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
};

export type KPI = {
  label: string;
  value: string;
  delta?: string;
};

export type MetricPoint = { date: string; onTime: number; delayed: number };

export type FlightQuery = {
  flight: string;
  date: string;
  origin: string;
  destination: string;
};
