// file: components/stats-strip.tsx
export default function StatsStrip() {
  return (
    <section className="mt-8 grid gap-4 md:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-3xl bg-sky-100/70 p-6 shadow-lg ring-1 ring-sky-200">
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

      {/* Card 2 */}
      <div className="rounded-3xl bg-sky-100/70 p-6 shadow-lg ring-1 ring-sky-200">
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

      {/* Card 3 */}
      <div className="rounded-3xl bg-sky-100/70 p-6 shadow-lg ring-1 ring-sky-200">
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
  );
}
