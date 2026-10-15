import Image from "next/image";
import { SubscribeForm } from "./subscribe-form";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.58c-.19-.09-1.12-.55-1.3-.61-.17-.07-.3-.1-.43.1-.12.19-.49.61-.6.73-.11.12-.22.14-.41.05-.19-.09-.8-.29-1.52-.94-.56-.5-.94-1.12-1.05-1.31-.11-.19-.01-.3.08-.39.09-.08.19-.22.29-.33.09-.11.12-.19.19-.31.06-.12.03-.24-.01-.33-.05-.09-.43-1.04-.59-1.42-.16-.38-.32-.32-.44-.33-.11-.01-.24-.01-.37-.01s-.34.05-.52.24c-.17.19-.68.66-.68 1.62 0 .95.69 1.88.79 2 .09.13 1.36 2.08 3.3 2.91.46.2.82.32 1.1.41.46.15.89.13 1.22.08.37-.06 1.12-.46 1.28-.9.16-.44.16-.82.11-.9-.04-.08-.17-.13-.36-.23z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center bg-white text-black selection:bg-black selection:text-white">
      {/* ── Centered Content Area (Plain White Background) ── */}
      <div className="relative z-10 flex w-full max-w-lg flex-1 flex-col items-center justify-center px-5 py-8 text-center sm:px-6 sm:py-12 md:py-16">
        {/* Crystal Clear & Bigger Logo */}
        <Image
          src="/images/logo-clean.png"
          alt="Hydrolock"
          width={1213}
          height={1465}
          priority
          quality={100}
          className="h-32 w-auto sm:h-44 md:h-52 select-none"
        />

        {/* Eyebrow Label */}
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-neutral-800 sm:mt-7 sm:text-sm sm:tracking-[0.3em] italic">
          Premium Car Care
        </p>

        {/* Headline */}
        <h1 className="mt-3 text-5xl font-black italic leading-[0.92] tracking-tight text-black sm:mt-4 sm:text-7xl md:text-8xl">
          Coming
          <br />
          Soon.
        </h1>

        {/* Subtext */}
        <p className="mt-4 max-w-[320px] text-xs leading-relaxed text-neutral-600 sm:mt-5 sm:max-w-md sm:text-sm md:text-base">
          We&apos;re almost there. Leave your number to be the first to know when we launch.
        </p>

        {/* Responsive Contact Form */}
        <SubscribeForm className="mt-6 w-full sm:mt-8" />
      </div>

      {/* ── Floating WhatsApp Contact Button ── */}
      <aside aria-label="Contact on WhatsApp">
        <a
          href="https://wa.me/919611787246?text=Hi%20Hydrolock%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-xl shadow-green-950/20 transition-all hover:bg-[#20ba5a] hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6 sm:px-5"
        >
          <WhatsAppIcon className="size-5 shrink-0 sm:size-6" />
          <span className="text-xs font-bold tracking-wide uppercase sm:text-sm">
            Contact Us
          </span>
        </a>
      </aside>
    </main>
  );
}
