"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { predictDelay } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, Clock8 } from "lucide-react";

const schema = z.object({
  flight: z.string().min(3, "Enter a valid flight code."),
  date: z.string().min(8, "Choose a date."),
  origin: z.string().min(3, "Enter origin IATA/city."),
  destination: z.string().min(3, "Enter destination.")
});

type Values = z.infer<typeof schema>;

export function DemoPredictForm() {
  const { register, handleSubmit, formState } = useForm<Values>({ resolver: zodResolver(schema) });
  const [result, setResult] = useState<null | ReturnType<typeof predictDelay>>(null);

  const onSubmit = (v: Values) => {
    const r = predictDelay(v);
    setResult(r);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="grid sm:grid-cols-2 gap-3 mt-4">
        <div>
          <Input aria-label="Flight code" placeholder="6E 512" {...register("flight")} />
          {formState.errors.flight && <p className="text-xs text-red-500 mt-1">{formState.errors.flight.message}</p>}
        </div>
        <div>
          <Input aria-label="Date" type="date" {...register("date")} />
          {formState.errors.date && <p className="text-xs text-red-500 mt-1">{formState.errors.date.message}</p>}
        </div>
        <div>
          <Input aria-label="Origin" placeholder="DEL" {...register("origin")} />
          {formState.errors.origin && <p className="text-xs text-red-500 mt-1">{formState.errors.origin.message}</p>}
        </div>
        <div>
          <Input aria-label="Destination" placeholder="CCU" {...register("destination")} />
          {formState.errors.destination && <p className="text-xs text-red-500 mt-1">{formState.errors.destination.message}</p>}
        </div>
        <div className="sm:col-span-2">
          <Button type="submit" className="w-full rounded-full">Predict</Button>
        </div>
      </form>

      {result && (
        <div className="mt-4 rounded-3xl p-4 border glass">
          <div className="flex items-center gap-3">
            {result.risk === "Low" && <CheckCircle2 className="h-6 w-6 text-green-500" />}
            {result.risk === "Medium" && <Clock8 className="h-6 w-6 text-yellow-500" />}
            {result.risk === "High" && <AlertTriangle className="h-6 w-6 text-red-500" />}
            <div>
              <p className="text-sm text-muted-foreground">Prediction</p>
              <h4 className="text-xl font-semibold">
                {result.label} • Risk: {result.risk}
              </h4>
              <p className="text-sm text-muted-foreground">
                On-time probability: {(result.probability * 100).toFixed(0)}%
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
