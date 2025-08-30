// file: app/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMemo } from "react";
import Lottie from "lottie-react";
import flightAnimation from "@/public/animations/Loading plane.json";

type FormValues = {
  airline: string;
  weather: string;
  depAirport: string;
  arrAirport: string;
  depDate: string;
  depTime: string;
};

const AIRLINES = ["IndiGo (6E)", "Air India (AI)", "Vistara (UK)", "SpiceJet (SG)", "Akasa Air (QP)"];
const AIRPORTS = ["DEL — Delhi", "BOM — Mumbai", "BLR — Bengaluru", "HYD — Hyderabad", "MAA — Chennai", "CCU — Kolkata"];
const WEATHER = ["Clear", "Cloudy", "Rain", "Thunderstorm", "Fog", "Windy"];

export default function Home() {
  const { register, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: { airline: "", weather: "Clear", depAirport: "", arrAirport: "", depDate: "", depTime: "" }
  });

  const onSubmit = (data: FormValues) => {
    alert(
      `Predicting...\nAirline: ${data.airline}\nFrom: ${data.depAirport}\nTo: ${data.arrAirport}\nDate: ${data.depDate}\nTime: ${data.depTime}\nWeather: ${data.weather}`
    );
  };

  const dep = watch("depAirport");
  const filteredArr = useMemo(() => AIRPORTS.filter((a) => a !== dep), [dep]);

  return (
    <div className="relative min-h-screen bg-sky-50 overflow-hidden">
      {/* 🔹 Background Animation */}
      <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
        <Lottie animationData={flightAnimation} loop autoplay />
      </div>

      <main className="container mx-auto px-4 relative z-10">
        <section className="mx-auto max-w-5xl py-12 sm:py-16">
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Predict Flight Delays with AI
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
            Get accurate delay predictions using real-time data and machine learning algorithms
          </p>

          {/* Form */}
          <div className="mx-auto mt-10 rounded-3xl bg-sky-100/70 p-6 shadow-lg ring-1 ring-sky-200 sm:p-8 backdrop-blur-md">
            <h2 className="text-center text-2xl font-semibold text-slate-800">Flight Details</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-4 sm:grid-cols-2">
              {/* Airline */}
              <div>
                <label className="text-sm font-medium text-slate-700">Airline</label>
                <select {...register("airline", { required: true })} className="h-10 w-full rounded-xl border px-3 text-sm">
                  <option value="">Select Airline</option>
                  {AIRLINES.map((a) => <option key={a}>{a}</option>)}
                </select>
              </div>

              {/* Weather */}
              <div>
                <label className="text-sm font-medium text-slate-700">Weather Condition</label>
                <select {...register("weather")} className="h-10 w-full rounded-xl border px-3 text-sm">
                  {WEATHER.map((w) => <option key={w}>{w}</option>)}
                </select>
              </div>

              {/* Departure Airport */}
              <div>
                <label className="text-sm font-medium text-slate-700">Departure Airport</label>
                <select {...register("depAirport", { required: true })} className="h-10 w-full rounded-xl border px-3 text-sm">
                  <option value="">Select Airport</option>
                  {AIRPORTS.map((a) => <option key={a}>{a}</option>)}
                </select>
              </div>

              {/* Arrival Airport */}
              <div>
                <label className="text-sm font-medium text-slate-700">Arrival Airport</label>
                <select {...register("arrAirport", { required: true })} className="h-10 w-full rounded-xl border px-3 text-sm">
                  <option value="">Select Airport</option>
                  {filteredArr.map((a) => <option key={a}>{a}</option>)}
                </select>
              </div>

              {/* Departure Date */}
              <div>
                <label className="text-sm font-medium text-slate-700">Departure Date</label>
                <Input type="date" {...register("depDate", { required: true })} />
              </div>

              {/* Departure Time */}
              <div>
                <label className="text-sm font-medium text-slate-700">Departure Time</label>
                <Input type="time" {...register("depTime", { required: true })} />
              </div>

              {/* CTA */}
              <div className="sm:col-span-2 mt-2">
                <Button type="submit" className="h-12 w-full rounded-2xl bg-blue-600 text-white hover:bg-blue-700">
                  <span className="mr-2">👩‍💻</span> Predict Flight Status
                </Button>
              </div>
            </form>
          </div>

          {/* Stats Strip */}
          <section className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-sky-100/70 p-6 shadow-lg ring-1 ring-sky-200 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 font-medium">Flights Delayed Today</p>
                  <p className="mt-2 text-4xl font-extrabold text-red-500 leading-none">23%</p>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-2xl">
                  ⏰
                </span>
              </div>
            </div>

            <div className="rounded-3xl bg-sky-100/70 p-6 shadow-lg ring-1 ring-sky-200 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 font-medium">Most Delayed Airline</p>
                  <p className="mt-1 text-2xl font-extrabold text-slate-900 leading-none">United Airlines</p>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                  ✈️
                </span>
              </div>
            </div>

            <div className="rounded-3xl bg-sky-100/70 p-6 shadow-lg ring-1 ring-sky-200 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 font-medium">Average Delay</p>
                  <p className="mt-2 text-4xl font-extrabold text-blue-600 leading-none">42&nbsp;min</p>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                  📊
                </span>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
