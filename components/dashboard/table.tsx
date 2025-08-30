"use client";

import { useMemo, useState } from "react";

type Column<T> = { key: keyof T; label: string };

export function DataTable<T extends Record<string, any>>({
  columns,
  rows
}: {
  columns: readonly Column<T>[];
  rows: T[];
}) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [asc, setAsc] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 5;

  const sorted = useMemo(() => {
    if (!sortKey) return rows;
    return [...rows].sort((a, b) => {
      const va = a[sortKey];
      const vb = b[sortKey];
      if (typeof va === "number" && typeof vb === "number") return asc ? va - vb : vb - va;
      return asc ? String(va).localeCompare(String(vb)) : String(vb).localeCompare(String(va));
    });
  }, [rows, sortKey, asc]);

  const paged = useMemo(() => {
    const start = (page - 1) * perPage;
    return sorted.slice(start, start + perPage);
  }, [sorted, page]);

  const pages = Math.Math.max(1, Math.ceil(rows.length / perPage));

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={String(c.key)} className="p-2 text-left">
                <button
                  onClick={() => {
                    if (sortKey === c.key) setAsc(!asc);
                    else {
                      setSortKey(c.key);
                      setAsc(true);
                    }
                  }}
                  className="inline-flex items-center gap-1"
                >
                  {c.label}
                  {sortKey === c.key ? (asc ? "▲" : "▼") : ""}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border/70">
          {paged.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="p-3 text-center text-muted-foreground">
                No results
              </td>
            </tr>
          ) : (
            paged.map((r, i) => (
              <tr key={i} className="hover:bg-foreground/5">
                {columns.map((c) => (
                  <td key={String(c.key)} className="p-2">{String(r[c.key])}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="mt-3 flex items-center justify-between">
        <button
          className="rounded-full px-3 py-1 bg-foreground/10"
          disabled={page == 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          Prev
        </button>
        <span className="text-xs text-muted-foreground">Page {page} / {pages}</span>
        <button
          className="rounded-full px-3 py-1 bg-foreground/10"
          disabled={page == pages}
          onClick={() => setPage((p) => Math.min(pages, p + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
}
