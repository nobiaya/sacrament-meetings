
import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  const formattedDate = new Date(
    `${meeting.date}T12:00:00`
  ).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold capitalize text-blue-700">
          {meeting.meetingType} meeting
        </span>

        <span className="min-w-0 text-sm text-gray-500 text-right">
          {formattedDate}
        </span>
      </div>

      <h2 className="mb-2 text-xl font-bold text-gray-900">
        Sacrament Meeting
      </h2>

      <p className="text-sm text-gray-600">
        Presiding: {meeting.presiding}
      </p>

      <p className="mb-4 text-sm text-gray-600">
        Conducting: {meeting.conducting}
      </p>

      <Link
        href={`/meetings/${meeting.id}`}
        aria-label={`View meeting programme for ${formattedDate}`}
        className="inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        View Meeting
      </Link>
    </article>
  );
}