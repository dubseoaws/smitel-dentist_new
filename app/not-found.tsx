import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-28 text-center">
      <div className="mx-auto max-w-xl px-4 space-y-6">
        <p className="eyebrow">404</p>
        <h1 className="text-4xl tracking-tight">Page not found</h1>
        <Link
          href="/"
          className="inline-block rounded-full bg-ink text-ivory px-8 py-3.5 text-sm font-semibold hover:bg-gold-deep transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
