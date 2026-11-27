
import Link from "next/link";

export default function MeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="space-y-6">
      <nav className="flex flex-wrap gap-4 border-b border-gray-200 pb-4">
        <Link
          href="/meetings"
          className="font-medium text-blue-600 hover:text-blue-800"
        >
          All Meetings
        </Link>

        <Link
          href="/meetings/current"
          className="font-medium text-blue-600 hover:text-blue-800"
        >
          Current Meeting
        </Link>
      </nav>

      {children}
    </section>
  );
}
