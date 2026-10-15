"use client";

import { useActionState } from "react";
import { Check, Mail, ArrowRight, Loader2 } from "lucide-react";

import { joinWaitlist } from "./actions";
import { initialFormState } from "@/lib/form-state";
import { cn } from "@/lib/utils";

export function SubscribeForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    initialFormState
  );

  if (state.status === "success") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2.5 rounded-full border-2 border-black bg-black px-6 py-3 text-sm font-semibold text-white shadow-md animate-in fade-in zoom-in-95 duration-200",
          className
        )}
      >
        <span className="flex size-5 items-center justify-center rounded-full bg-white text-black shrink-0">
          <Check className="size-3.5" strokeWidth={3} />
        </span>
        <span>{state.message}</span>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className={cn("flex w-full max-w-sm sm:max-w-md md:max-w-lg flex-col items-center gap-2.5", className)}
    >
      <div className="relative flex w-full items-center rounded-full border-2 border-black bg-white p-1.5 shadow-md transition-all focus-within:ring-4 focus-within:ring-black/10 sm:p-2">
        <div className="pointer-events-none flex items-center pl-3 text-neutral-400 sm:pl-3.5">
          <Mail className="size-4.5 sm:size-5 shrink-0" />
        </div>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          aria-label="Email address"
          autoComplete="email"
          aria-invalid={state.status === "error"}
          className="w-full min-w-0 bg-transparent px-3 py-2 text-sm text-black placeholder:text-neutral-400 focus:outline-none sm:py-2.5 sm:text-base font-medium"
        />
        <button
          type="submit"
          disabled={pending}
          aria-label="Join waitlist"
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition-all hover:bg-neutral-800 active:scale-95 disabled:opacity-60 sm:h-11 sm:w-auto sm:px-5 sm:gap-2 cursor-pointer shadow-sm"
        >
          {pending ? (
            <Loader2 className="size-4 animate-spin sm:size-4.5" />
          ) : (
            <>
              <span className="hidden text-sm font-semibold sm:inline">Notify Me</span>
              <ArrowRight className="size-4.5 sm:size-4" strokeWidth={2.5} />
            </>
          )}
        </button>
      </div>

      {state.status === "error" && (
        <p className="text-center text-xs font-semibold text-red-600 sm:text-sm" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}
