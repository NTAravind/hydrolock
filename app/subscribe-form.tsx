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
          "inline-flex items-center gap-2.5 rounded-sm border border-black bg-neutral-50 px-5 py-3 text-sm font-medium text-black shadow-sm",
          className
        )}
      >
        <span className="flex size-5 items-center justify-center rounded-full bg-black text-white">
          <Check className="size-3" strokeWidth={2.5} />
        </span>
        {state.message}
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className={cn("flex w-full max-w-md flex-col items-center gap-2.5", className)}
    >
      <div className="flex w-full flex-col gap-2 sm:gap-0 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email address"
          aria-label="Email address"
          autoComplete="email"
          aria-invalid={state.status === "error"}
          className="h-12 w-full flex-1 rounded-sm border border-black bg-white px-4 text-sm text-black placeholder:text-neutral-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:rounded-r-none sm:border-r-0"
        />
        <button
          type="submit"
          disabled={pending}
          className="h-12 w-full shrink-0 rounded-sm bg-black px-7 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 active:bg-neutral-900 disabled:opacity-60 sm:w-auto sm:rounded-l-none cursor-pointer"
        >
          {pending ? "Joining…" : "Notify Me"}
        </button>
      </div>
      {state.status === "error" && (
        <p className="text-center text-xs font-medium text-red-600" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}
