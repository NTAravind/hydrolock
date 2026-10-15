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

const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]{7,16}$/;

const contactSchema = z
  .string()
  .trim()
  .min(7, "Please enter a valid contact number.")
  .max(20, "Contact number is too long.")
  .regex(phoneRegex, "Please enter a valid phone number (e.g. +91 96117 87246).");

export async function joinWaitlist(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawContact = String(
    formData.get("contact") ?? formData.get("phone") ?? formData.get("email") ?? ""
  ).trim();

  const parsed = contactSchema.safeParse(rawContact);

  if (!parsed.success) {
    return {
      status: "error",
      message:
        parsed.error.issues[0]?.message ?? "Please enter a valid contact number.",
    };
  }

  const contact = parsed.data;

  try {
    const { error } = await getAdminSupabase()
      .from("subscribers")
      .upsert({ email: contact }, { onConflict: "email", ignoreDuplicates: true });

    if (error) {
      return {
        status: "error",
        message: "Something went wrong. Please try again.",
      };
    }

    return {
      status: "success",
      message: "You're on the list. We'll contact you soon!",
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
