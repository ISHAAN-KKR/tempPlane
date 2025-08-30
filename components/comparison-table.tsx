export function ComparisonTable() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Compare plans</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="p-3">Feature</th>
              <th className="p-3">Basic</th>
              <th className="p-3">Pro</th>
              <th className="p-3">Business</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/70">
            <tr>
              <td className="p-3">Daily checks</td>
              <td className="p-3">3</td>
              <td className="p-3">Unlimited</td>
              <td className="p-3">Unlimited</td>
            </tr>
            <tr>
              <td className="p-3">Team seats</td>
              <td className="p-3">—</td>
              <td className="p-3">—</td>
              <td className="p-3">Up to 20</td>
            </tr>
            <tr>
              <td className="p-3">Exports</td>
              <td className="p-3">—</td>
              <td className="p-3">—</td>
              <td className="p-3">CSV</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
