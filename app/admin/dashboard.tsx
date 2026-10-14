import Image from "next/image";
import { Download, LogOut, Users } from "lucide-react";

import { logout } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Subscriber } from "@/lib/supabase";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "—" : dateFormatter.format(date);
}

export function Dashboard({ subscribers }: { subscribers: Subscriber[] }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo-emblem-dark.png"
            alt="Hydrolock"
            width={1129}
            height={869}
            className="h-9 w-auto"
          />
          <div>
            <h1 className="text-base font-extrabold text-neutral-900">
              Hydrolock Admin
            </h1>
            <p className="text-sm text-muted-foreground">Waitlist subscribers</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <a href="/api/admin/export">
              <Download />
              Export CSV
            </a>
          </Button>
          <form action={logout}>
            <Button type="submit" variant="ghost" size="sm">
              <LogOut />
              Log out
            </Button>
          </form>
        </div>
      </header>

      <Card>
        <CardHeader>
          <CardDescription className="flex items-center gap-2">
            <Users className="size-4" />
            Total subscribers
          </CardDescription>
          <CardTitle className="text-4xl font-extrabold tabular-nums">
            {subscribers.length}
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="py-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16 pl-6">#</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="pr-6 text-right">Joined</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscribers.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="h-32 text-center align-middle text-muted-foreground"
                  >
                    No subscribers yet.
                  </TableCell>
                </TableRow>
              ) : (
                subscribers.map((subscriber, index) => (
                  <TableRow key={subscriber.id}>
                    <TableCell className="pl-6 text-muted-foreground tabular-nums">
                      {index + 1}
                    </TableCell>
                    <TableCell className="font-medium">
                      {subscriber.email}
                    </TableCell>
                    <TableCell className="pr-6 text-right text-muted-foreground">
                      {formatDate(subscriber.created_at)}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
