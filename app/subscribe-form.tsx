"use client";

import { useActionState } from "react";
import { Check } from "lucide-react";

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
          "inline-flex items-center gap-2.5 border border-neutral-200 bg-neutral-50 px-5 py-3 text-sm font-medium text-neutral-700",
          className
        )}
      >
        <span className="flex size-5 items-center justify-center rounded-full bg-neutral-900 text-white">
          <Check className="size-3" strokeWidth={2.5} />
        </span>
        {state.message}
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className={cn("flex w-full max-w-md flex-col gap-3", className)}
    >
      <div className="flex w-full flex-col gap-0 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          aria-label="Email address"
          autoComplete="email"
          aria-invalid={state.status === "error"}
          className="h-12 flex-1 border border-neutral-300 bg-white px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none sm:border-r-0"
        />
        <button
          type="submit"
          disabled={pending}
          className="h-12 bg-neutral-900 px-7 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 active:bg-black disabled:opacity-60"
        >
          {pending ? "Joining…" : "Notify Me!"}
        </button>
      </div>
      {state.status === "error" && (
        <p className="text-xs text-red-500" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}
