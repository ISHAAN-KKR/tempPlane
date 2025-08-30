"use client";

import { kpis, metricSeries } from "@/lib/data";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart, Legend, CartesianGrid } from "recharts";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState, useMemo } from "react";
import { DataTable } from "./table";
import { cn } from "@/lib/utils";

const columns = [
  { key: "route", label: "Route" },
  { key: "onTime", label: "On-time %" },
  { key: "delay", label: "Avg delay (min)" },
  { key: "flights", label: "Flights" }
] as const;

const rows = [
  { route: "DEL → CCU", onTime: 76, delay: 17, flights: 42 },
  { route: "BOM → BLR", onTime: 81, delay: 12, flights: 58 },
  { route: "CCU → IXB", onTime: 72, delay: 19, flights: 16 },
  { route: "DEL → BOM", onTime: 79, delay: 15, flights: 64 },
  { route: "BLR → HYD", onTime: 84, delay: 11, flights: 50 }
];

export default function DashboardShell() {
  const [q, setQ] = useState("");

  const filtered = useMemo(
    () => rows.filter((r) => r.route.toLowerCase().includes(q.toLowerCase())),
    [q]
  );

  return (
    <div className="container py-8 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <div className="flex gap-2">
          <Input placeholder="Search route…" value={q} onChange={(e) => setQ(e.target.value)} />
          <Button className="rounded-full">Export CSV</Button>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-4">
        {kpis.map((k, i) => (
          <div key={i} className="glass rounded-3xl p-4">
            <p className="text-xs text-muted-foreground">{k.label}</p>
            <div className="flex items-end gap-2">
              <h3 className="text-2xl font-semibold">{k.value}</h3>
              {k.delta && <span className={cn("text-xs", k.delta.includes("-") ? "text-red-500" : "text-green-500")}>{k.delta}</span>}
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="glass rounded-3xl p-4">
          <h3 className="font-semibold">On-time vs Delayed</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={metricSeries}>
                <defs>
                  <linearGradient id="c1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="c2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#22D3EE" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeOpacity={0.15} vertical={false} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="onTime" stroke="#0EA5E9" fill="url(#c1)" />
                <Area type="monotone" dataKey="delayed" stroke="#22D3EE" fill="url(#c2)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="glass rounded-3xl p-4">
          <h3 className="font-semibold">On-time Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={metricSeries}>
                <CartesianGrid strokeOpacity={0.15} vertical={false} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="onTime" stroke="#0EA5E9" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="glass rounded-3xl p-4">
        <h3 className="font-semibold mb-3">Recent routes</h3>
        <DataTable columns={columns as any} rows={filtered as any} />
      </section>
    </div>
  );
}
