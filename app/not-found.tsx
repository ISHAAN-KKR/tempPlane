import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-5xl font-semibold">404 — Lost in the clouds</h1>
      <p className="mt-4 text-muted-foreground">We couldn’t find that page.</p>
      <Link href="/" className="inline-block mt-8 rounded-full bg-primary px-6 py-3 text-primary-foreground">
        Back to home
      </Link>
    </div>
  );
}
