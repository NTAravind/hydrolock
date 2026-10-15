import Image from "next/image";
import { SubscribeForm } from "./subscribe-form";

// ─── Crisp 100% Black SVG Cleaning Tool Illustrations ───────────────────────

function SprayBottle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 165"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="22" y="68" width="52" height="90" rx="11" />
      <path d="M33 68 L33 50 Q33 44 39 44 L57 44 Q64 44 64 50 L64 68" />
      <path d="M22 86 C4 86 4 116 22 116" />
      <line x1="48" y1="44" x2="48" y2="24" />
      <path d="M48 24 L12 24" strokeWidth="2.25" />
      <circle cx="9" cy="24" r="3" fill="currentColor" stroke="none" />
      <line x1="6" y1="17" x2="1" y2="13" strokeWidth="1.5" />
      <line x1="6" y1="24" x2="0" y2="24" strokeWidth="1.5" />
      <line x1="6" y1="31" x2="1" y2="35" strokeWidth="1.5" />
      <rect x="28" y="88" width="38" height="52" rx="4" />
      <line x1="33" y1="103" x2="61" y2="103" strokeWidth="1.25" />
      <line x1="33" y1="113" x2="56" y2="113" strokeWidth="1.25" />
      <line x1="33" y1="123" x2="59" y2="123" strokeWidth="1.25" />
    </svg>
  );
}

function DetailBrush({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="14" y="5" width="12" height="128" rx="6" />
      <line x1="14" y1="88" x2="26" y2="88" strokeWidth="1.25" />
      <line x1="14" y1="96" x2="26" y2="96" strokeWidth="1.25" />
      <line x1="14" y1="104" x2="26" y2="104" strokeWidth="1.25" />
      <rect x="11" y="130" width="18" height="14" rx="2" />
      <path d="M8 144 L32 144 L35 170 Q35 194 20 194 Q5 194 5 170 Z" />
      <line x1="13" y1="146" x2="8" y2="192" strokeWidth="1.25" />
      <line x1="20" y1="145" x2="20" y2="194" strokeWidth="1.25" />
      <line x1="27" y1="146" x2="32" y2="192" strokeWidth="1.25" />
    </svg>
  );
}

function WaxBottle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 90 155"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="8" y="58" width="74" height="90" rx="16" />
      <path d="M8 74 Q8 58 20 54 L70 54 Q82 58 82 74" />
      <rect x="30" y="36" width="30" height="20" rx="5" />
      <rect x="25" y="22" width="40" height="16" rx="7" />
      <rect x="16" y="78" width="58" height="58" rx="6" />
      <line x1="24" y1="95" x2="66" y2="95" strokeWidth="1.25" />
      <line x1="24" y1="107" x2="60" y2="107" strokeWidth="1.25" />
      <line x1="24" y1="119" x2="63" y2="119" strokeWidth="1.25" />
    </svg>
  );
}

function WashMitt({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 130 135"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M28 128 L28 52 C28 26 48 11 72 11 C96 11 116 30 116 56 L116 83 C116 107 96 122 72 128 Z" />
      <path d="M28 63 C11 56 9 35 26 29 L28 44" />
      <path d="M28 118 Q50 124 72 123 Q86 122 94 117" strokeWidth="1.25" />
      <path d="M48 51 Q65 42 83 51" strokeWidth="1.25" />
      <path d="M44 68 Q65 57 87 68" strokeWidth="1.25" />
      <path d="M43 85 Q67 74 91 85" strokeWidth="1.25" />
      <path d="M46 102 Q68 91 89 102" strokeWidth="1.25" />
    </svg>
  );
}

function Squeegee({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 210 72"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="12" width="145" height="17" rx="5" />
      <path d="M5 29 L150 29 L153 41 L2 41 Z" />
      <path d="M30 41 Q30 51 28 56 Q27 60 30 61 Q33 60 32 56 Q30 51 30 41" fill="currentColor" stroke="none" />
      <path d="M76 41 Q76 53 74 59 Q73 63 76 64 Q79 63 78 59 Q76 53 76 41" fill="currentColor" stroke="none" />
      <path d="M120 41 Q120 51 118 56 Q117 60 120 61 Q123 60 122 56 Q120 51 120 41" fill="currentColor" stroke="none" />
      <rect x="150" y="8" width="14" height="26" rx="4" />
      <rect x="162" y="12" width="42" height="18" rx="9" />
      <line x1="170" y1="13" x2="170" y2="29" strokeWidth="1.25" />
      <line x1="178" y1="13" x2="178" y2="29" strokeWidth="1.25" />
      <line x1="186" y1="13" x2="186" y2="29" strokeWidth="1.25" />
      <line x1="194" y1="13" x2="194" y2="29" strokeWidth="1.25" />
    </svg>
  );
}

function Sponge({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 82"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="5" width="110" height="72" rx="14" />
      <ellipse cx="28" cy="26" rx="8" ry="6" strokeWidth="1.25" />
      <ellipse cx="60" cy="20" rx="9" ry="6" strokeWidth="1.25" />
      <ellipse cx="92" cy="28" rx="7" ry="5" strokeWidth="1.25" />
      <ellipse cx="20" cy="54" rx="7" ry="5" strokeWidth="1.25" />
      <ellipse cx="55" cy="56" rx="9" ry="6" strokeWidth="1.25" />
      <ellipse cx="90" cy="54" rx="7" ry="5" strokeWidth="1.25" />
      <ellipse cx="38" cy="40" rx="6" ry="4" strokeWidth="1.25" />
      <ellipse cx="75" cy="38" rx="6" ry="4" strokeWidth="1.25" />
    </svg>
  );
}

function Bucket({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 130"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 40 L8 118 Q8 124 50 124 Q92 124 92 118 L85 40 Z" />
      <ellipse cx="50" cy="40" rx="35" ry="10" />
      <path d="M22 38 Q22 12 50 12 Q78 12 78 38" />
      <path d="M10 90 Q50 100 90 90" strokeWidth="1.25" />
      <circle cx="35" cy="78" r="5" strokeWidth="1.25" />
      <circle cx="55" cy="72" r="7" strokeWidth="1.25" />
      <circle cx="70" cy="80" r="4" strokeWidth="1.25" />
    </svg>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z" />
    </svg>
  );
}

function FoamBubbles({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <circle cx="20" cy="20" r="14" />
      <circle cx="42" cy="18" r="9" />
      <circle cx="36" cy="40" r="12" />
      <circle cx="16" cy="44" r="8" />
    </svg>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-white text-black selection:bg-black selection:text-white">
      {/* ── Background Vectors (100% Black, Clean Layout with Zero Overlaps) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden text-black"
      >
        {/* ── Top Edge Patterns (Spaced Cleanly) ── */}
        <SprayBottle className="absolute left-[1%] top-0 h-28 w-auto -translate-y-8 -rotate-12 sm:h-38 sm:-translate-y-10 md:left-[3%] md:h-48 md:-translate-y-12" />
        <DetailBrush className="hidden sm:block absolute left-[22%] top-0 h-44 w-auto -translate-y-12 md:h-56" />
        <Sponge className="absolute left-1/2 top-0 h-14 w-auto -translate-x-1/2 -translate-y-5 rotate-6 sm:h-18 sm:-translate-y-6 md:h-22 md:-translate-y-7" />
        <WaxBottle className="hidden sm:block absolute right-[20%] top-0 h-32 w-auto -translate-y-10 rotate-8 md:h-42 md:-translate-y-12" />
        <DetailBrush className="absolute right-[2%] top-0 h-28 w-auto -translate-y-7 rotate-12 sm:h-38 sm:-translate-y-10 md:right-[3%] md:h-52" />

        {/* ── Upper Accents ── */}
        <Sparkle className="absolute left-[12%] top-[14%] size-3.5 text-black sm:size-5" />
        <Sparkle className="absolute right-[14%] top-[16%] size-3.5 text-black sm:size-5" />
        <FoamBubbles className="hidden sm:block absolute right-[6%] top-[22%] h-12 w-auto text-black" />

        {/* ── Left & Right Side Patterns (Evenly Positioned on Vertical Axis) ── */}
        <WashMitt className="absolute left-0 top-[24%] h-22 w-auto -translate-x-7 rotate-12 sm:h-28 sm:-translate-x-9 md:h-34 md:-translate-x-10" />
        <Bucket className="absolute left-0 top-[58%] h-24 w-auto -translate-x-8 -rotate-6 sm:h-30 sm:-translate-x-10 md:h-36 md:-translate-x-12" />
        <Sparkle className="absolute left-[8%] top-[44%] size-3 text-black sm:size-4" />

        <Squeegee className="absolute right-0 top-[30%] h-11 w-auto translate-x-4 -rotate-6 sm:h-14 sm:translate-x-6 md:h-16 md:translate-x-8" />
        <SprayBottle className="absolute right-0 top-[58%] h-24 w-auto translate-x-6 rotate-10 sm:h-30 sm:translate-x-8 md:h-36 md:translate-x-10" />
        <Sparkle className="absolute right-[8%] top-[46%] size-3 text-black sm:size-4" />

        {/* ── Lower Accents ── */}
        <Sparkle className="absolute right-[22%] bottom-[18%] size-3 text-black sm:size-4" />
        <FoamBubbles className="hidden sm:block absolute left-[5%] bottom-[24%] h-12 w-auto text-black" />

        {/* ── Bottom Edge Patterns (Dedicated Left, Center & Right on Mobile — Zero Collisions) ── */}
        {/* Bottom Left Corner: Wash Mitt */}
        <WashMitt className="absolute bottom-0 left-[2%] h-24 w-auto translate-y-6 -rotate-12 sm:h-32 sm:translate-y-8 md:left-[3%] md:h-40 md:translate-y-10" />

        {/* Bottom-mid Left: Squeegee (visible on tablet+) */}
        <Squeegee className="hidden sm:block absolute bottom-0 left-[22%] h-12 w-auto translate-y-3 sm:translate-y-4 md:h-16 md:translate-y-5" />

        {/* Bottom Center: Sponge (centered cleanly with comfortable breathing room) */}
        <Sponge className="absolute bottom-0 left-1/2 h-12 w-auto -translate-x-1/2 translate-y-5 rotate-6 sm:h-16 sm:translate-y-6 md:h-20 md:translate-y-7" />

        {/* Bottom-mid Right: Bucket (visible on desktop) */}
        <Bucket className="hidden md:block absolute bottom-0 right-[34%] h-28 w-auto translate-y-6 -rotate-4 md:h-32 md:translate-y-8" />

        {/* Bottom Right-mid: Wax Bottle (visible on tablet+) */}
        <WaxBottle className="hidden sm:block absolute bottom-0 right-[18%] h-28 w-auto translate-y-6 -rotate-6 md:h-36 md:translate-y-9" />

        {/* Bottom Right Corner: Detail Brush */}
        <DetailBrush className="absolute bottom-0 right-[3%] h-26 w-auto translate-y-7 rotate-12 sm:h-34 sm:translate-y-9 md:right-[3%] md:h-44 md:translate-y-10" />
      </div>

      {/* ── Centered Content Area (Responsive & Clean) ── */}
      <div className="relative z-10 flex w-full max-w-lg flex-1 flex-col items-center justify-center px-5 py-8 text-center sm:px-6 sm:py-10 md:py-12">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Hydrolock"
          width={1129}
          height={1129}
          priority
          className="h-24 w-auto drop-shadow-sm sm:h-32 md:h-36 lg:h-40"
        />

        {/* Eyebrow Label — enlarged for clearer prominence */}
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-neutral-800 sm:mt-6 sm:text-sm sm:tracking-[0.3em]">
          Premium Car Care
        </p>

        {/* Headline */}
        <h1 className="mt-3 text-5xl font-black leading-[0.92] tracking-tight text-black sm:mt-4 sm:text-7xl md:text-8xl">
          Coming
          <br />
          Soon.
        </h1>

        {/* Subtext */}
        <p className="mt-4 max-w-[320px] text-xs leading-relaxed text-neutral-600 sm:mt-5 sm:max-w-md sm:text-sm md:text-base">
          We&apos;re almost there. Join our waitlist to be the first to know when we launch.
        </p>

        {/* Responsive Subscribe Form */}
        <SubscribeForm className="mt-6 w-full sm:mt-8" />
      </div>
    </main>
  );
}
