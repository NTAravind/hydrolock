import type { Metadata } from "next";
import Image from "next/image";

import { LoginForm } from "./login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Admin — Hydrolock",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16">
      <Card className="w-full max-w-sm">
        <CardHeader className="items-center text-center">
          <Image
            src="/images/logo-emblem-dark.png"
            alt="Hydrolock"
            width={1129}
            height={869}
            className="h-10 w-auto"
          />
          <CardTitle className="mt-2 text-base font-extrabold">
            Hydrolock Admin
          </CardTitle>
          <CardDescription>Sign in to view the waitlist.</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
}
