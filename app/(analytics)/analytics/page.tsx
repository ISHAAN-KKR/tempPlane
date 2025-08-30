"use client";

import { metricSeries } from "@/lib/data";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from "recharts";

export default function AnalyticsPage() {
  return (
    <div className="container py-12 space-y-6">
      <h1 className="text-3xl font-semibold">Analytics</h1>
      <section className="grid lg:grid-cols-2 gap-6">
        <div className="glass rounded-3xl p-4">
          <h3 className="font-semibold mb-2">Delays by period</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={metricSeries}>
                <CartesianGrid strokeOpacity={0.15} vertical={false} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="delayed" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="glass rounded-3xl p-4">
          <h3 className="font-semibold mb-2">On-time trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={metricSeries}>
                <CartesianGrid strokeOpacity={0.15} vertical={false} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="onTime" stroke="#0EA5E9" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
      <p className="text-sm text-muted-foreground">Charts are demo-only with local JSON seed data.</p>
    </div>
  );
}
