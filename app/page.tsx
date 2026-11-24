import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
        Welcome
      </p>

      <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Sacrament Meeting Planner
      </h1>

      <p className="mt-5 max-w-xl text-lg text-gray-600">
        Organize, manage, and view sacrament meeting programmes in one place.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/public/meetings"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          View Meetings
        </Link>

        <Link
          href="/public/meetings/current"
          className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
        >
          Current Meeting
        </Link>
      </div>
    </section>
  );
}