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
          "inline-flex items-center gap-2.5 rounded-full border border-black/15 bg-neutral-900 px-4 py-2 text-xs font-medium text-white shadow-sm sm:px-5 sm:py-2.5 sm:text-sm animate-in fade-in zoom-in-95 duration-200",
          className
        )}
      >
        <span className="flex size-4 items-center justify-center rounded-full bg-white text-black sm:size-5">
          <Check className="size-2.5 sm:size-3" strokeWidth={3} />
        </span>
        <span>{state.message}</span>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className={cn("flex w-full max-w-md flex-col items-center gap-2", className)}
    >
      <div className="relative flex w-full items-center rounded-full border border-black/80 bg-white p-1 shadow-sm transition-all focus-within:border-black focus-within:ring-2 focus-within:ring-black/10 sm:p-1.5">
        <div className="pointer-events-none flex items-center pl-2.5 text-neutral-400 sm:pl-3">
          <Mail className="size-3.5 sm:size-4 shrink-0" />
        </div>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          aria-label="Email address"
          autoComplete="email"
          aria-invalid={state.status === "error"}
          className="w-full min-w-0 bg-transparent px-2.5 py-1.5 text-xs text-black placeholder:text-neutral-400 focus:outline-none sm:px-3 sm:py-2 sm:text-sm"
        />
        <button
          type="submit"
          disabled={pending}
          aria-label="Join waitlist"
          className="flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-black px-3.5 py-2 text-xs font-semibold text-white transition-all hover:bg-neutral-800 active:scale-95 disabled:opacity-60 sm:px-5 sm:py-2.5 sm:text-sm cursor-pointer"
        >
          {pending ? (
            <Loader2 className="size-3.5 animate-spin sm:size-4" />
          ) : (
            <>
              <span>Notify Me</span>
              <ArrowRight className="hidden size-3.5 sm:inline" />
            </>
          )}
        </button>
      </div>

      {state.status === "error" && (
        <p className="text-center text-[0.7rem] font-medium text-red-600 sm:text-xs" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}
