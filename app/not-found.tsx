import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-6 py-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">
        404 / NOT FOUND
      </p>
      <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-paper md:text-5xl">
        This page doesn&apos;t exist. Let&apos;s get you back.
      </h1>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-md bg-teal px-5 font-semibold text-ink hover:opacity-90"
        >
          Home
        </Link>
        <a
          href="https://wa.me/8801718463471"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center rounded-md border border-paper/20 px-5 font-semibold text-paper hover:border-teal hover:text-teal"
        >
          WhatsApp
        </a>
      </div>
    </main>
  );
}
