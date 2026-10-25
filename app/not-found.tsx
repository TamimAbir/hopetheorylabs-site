import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-8 px-6 py-24 md:px-8 md:py-32">
        <div className="col-span-12 md:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
            404 / NOT FOUND
          </p>
          <h1 className="mt-6 font-heading text-4xl leading-tight tracking-[-0.03em] text-paper md:text-6xl">
            This page doesn&apos;t exist. Let&apos;s get you back.
          </h1>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-teal px-5 py-3 text-sm font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              Home
            </Link>
            <a
              href="https://wa.me/8801718463471"
              className="text-sm font-semibold text-teal underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
