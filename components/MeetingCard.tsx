
import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

const meetingTypeLabels: Record<string, string> = {
  regular: "Regular Meeting",
  testimony: "Testimony Meeting",
  stake: "Stake Meeting",
  general: "General Meeting",
};

export default function MeetingCard({ meeting }: MeetingCardProps) {
  const formattedDate = new Date(
    `${meeting.date}T12:00:00`
  ).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const meetingType =
    meetingTypeLabels[meeting.meetingType] ?? "Meeting";

  return (
    <article className="flex min-h-[206px] flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="shrink-0 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          {meetingType}
        </span>

        <time className="text-right text-sm text-gray-500">
          {formattedDate}
        </time>
      </div>

      <h2 className="mb-2 text-xl font-bold text-gray-900">
        Sacrament Meeting
      </h2>

      <div className="text-sm leading-5 text-gray-700">
        <p>Presiding: {meeting.presiding}</p>
        <p>Conducting: {meeting.conducting}</p>
      </div>

      <Link
        href={`/meetings/${meeting.id}`}
        aria-label={`View meeting programme for ${formattedDate}`}
        className="mt-4 inline-flex h-9 w-fit items-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        View Meeting
      </Link>
    </article>
  );
}
