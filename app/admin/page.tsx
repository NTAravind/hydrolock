import { Suspense } from "react";
import type { Metadata } from "next";

import { Dashboard } from "./dashboard";
import { requireAdmin } from "@/lib/auth";
import { getSubscribers, type Subscriber } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Admin — Hydrolock",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <AdminContent />
    </Suspense>
  );
}

async function AdminContent() {
  await requireAdmin();

  let subscribers: Subscriber[] = [];
  let error: string | null = null;

  try {
    subscribers = await getSubscribers();
  } catch (cause) {
    error = cause instanceof Error ? cause.message : "Failed to load subscribers.";
  }

  if (error) {
    return <DashboardError message={error} />;
  }

  return <Dashboard subscribers={subscribers} />;
}

function DashboardSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <div className="h-9 w-56 animate-pulse rounded-md bg-neutral-100" />
      <div className="h-32 w-full animate-pulse rounded-xl bg-neutral-100" />
      <div className="h-64 w-full animate-pulse rounded-xl bg-neutral-100" />
    </div>
  );
}

function DashboardError({ message }: { message: string }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-10">
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-destructive">
        <p className="font-semibold">Could not load subscribers</p>
        <p className="mt-1">{message}</p>
      </div>
    </div>
  );
}
