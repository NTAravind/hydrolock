import Image from "next/image";
import { SubscribeForm } from "./subscribe-form";


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-white">
      {/* ── Geometric decorations ──────────────────────────────────── */}

      {/* Top-right cluster */}
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 flex w-48 flex-col items-end sm:w-64">
        {/* row 1 */}
        <div className="flex">
          <div className="h-20 w-20 bg-neutral-100 sm:h-28 sm:w-28" />
          <div className="h-20 w-20 bg-neutral-900 sm:h-28 sm:w-28" />
        </div>
        {/* row 2 — half squares (clipped) */}
        <div className="flex">
          <div className="h-10 w-20 overflow-hidden sm:h-14 sm:w-28">
            <div className="h-20 w-20 bg-neutral-200 sm:h-28 sm:w-28" />
          </div>
          <div className="h-10 w-20 overflow-hidden sm:h-14 sm:w-28">
            <div className="h-20 w-20 bg-neutral-400 sm:h-28 sm:w-28" />
          </div>
        </div>
      </div>

      {/* Bottom-right cluster */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 flex w-56 flex-col items-end sm:w-72">
        {/* row 1 */}
        <div className="flex">
          <div className="h-16 w-16 bg-neutral-300 sm:h-24 sm:w-24" />
          <div className="h-16 w-16 bg-neutral-800 sm:h-24 sm:w-24" />
        </div>
        {/* row 2 */}
        <div className="flex">
          <div className="h-16 w-16 bg-neutral-500 sm:h-24 sm:w-24" />
          <div className="h-16 w-16 bg-neutral-200 sm:h-24 sm:w-24" />
          <div className="h-16 w-16 bg-neutral-700 sm:h-24 sm:w-24" />
        </div>
      </div>

      {/* ── Content ────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-1 flex-col px-10 pb-10 pt-8 sm:px-16 sm:pb-12 sm:pt-10">

        {/* Logo */}
        <header>
          <Image
            src="/images/logo.png"
            alt="Hydrolock"
            width={1129}
            height={1129}
            priority
            className="h-28 w-auto sm:h-32"
          />
        </header>

        {/* Main content */}
        <div className="mt-16 flex flex-col sm:mt-20">

          {/* Accent-border label + descriptor */}
          <div className="border-l-4 border-neutral-900 pl-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
              Hydrolock
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-500">
              Premium car care, made by us. Join our waitlist to be the first
              to know when we launch.
            </p>
          </div>

          {/* Coming Soon — primary headline */}
          <h1 className="mt-6 text-6xl font-extrabold leading-[1.0] tracking-tight text-neutral-900 sm:text-7xl lg:text-8xl">
            Coming<br />Soon.
          </h1>

          {/* Form */}
          <SubscribeForm className="mt-10" />
        </div>


      </div>
    </main>
  );
}
