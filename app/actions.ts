"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import {
  createSession,
  destroySession,
  isAuthConfigured,
  verifyCredentials,
} from "@/lib/auth";
import type { FormState } from "@/lib/form-state";
import { getAdminSupabase } from "@/lib/supabase";

const emailSchema = z.email();

export async function joinWaitlist(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = emailSchema.safeParse(String(formData.get("email") ?? "").trim());

  if (!parsed.success) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const email = parsed.data.toLowerCase();

  try {
    const { error } = await getAdminSupabase()
      .from("subscribers")
      .upsert({ email }, { onConflict: "email", ignoreDuplicates: true });

    if (error) {
      return {
        status: "error",
        message: "Something went wrong. Please try again.",
      };
    }

    return {
      status: "success",
      message: "You're on the list. We'll be in touch soon!",
    };
  } catch {
    return {
      status: "error",
      message: "Something went wrong. Please try again later.",
    };
  }
}

export async function login(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  if (!isAuthConfigured()) {
    return {
      status: "error",
      message: "Admin login is not configured. Set ADMIN_EMAIL and ADMIN_PASSWORD.",
    };
  }

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!verifyCredentials(email, password)) {
    return { status: "error", message: "Invalid email or password." };
  }

  await createSession(email);
  redirect("/admin");
}

export async function logout(): Promise<void> {
  await destroySession();
  redirect("/admin/login");
}
