import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-28 text-center">
      <div className="mx-auto max-w-xl px-4 space-y-6">
        <p className="eyebrow">404</p>
        <h1 className="text-4xl tracking-tight">Page not found</h1>
        <Link
          href="/"
          className="btn-primary"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
