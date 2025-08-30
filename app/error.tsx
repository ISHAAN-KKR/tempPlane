"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <html>
      <body>
        <div className="container py-24 text-center">
          <h1 className="text-4xl font-semibold">Something went wrong</h1>
          <p className="mt-2 text-muted-foreground">Please try again.</p>
          <button onClick={() => reset()} className="mt-6 rounded-full bg-primary px-6 py-3 text-primary-foreground">
            Retry
          </button>
        </div>
      </body>
    </html>
  );
}
