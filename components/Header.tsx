
import { Suspense } from "react";
import Link from "next/link";
import { connection } from "next/server";
import NavLinks from "./NavLinks";

async function CurrentDate() {
  await connection();

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <p className="text-xs text-gray-500">
      {currentDate}
    </p>
  );
}

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/"
            className="text-xl font-bold text-blue-700"
          >
            Sacrament Planner
          </Link>

          <p className="text-sm font-medium text-gray-700">
           Ward 10
          </p>

          <Suspense fallback={<p className="text-xs text-gray-500">Loading date...</p>}>
            <CurrentDate />
          </Suspense>
        </div>

        <Suspense
          fallback={
            <nav aria-label="Main navigation" className="flex gap-5">
              <Link href="/meetings">Meetings</Link>
            </nav>
          }
        >
          <NavLinks />
        </Suspense>
      </div>
    </header>
  );
}
