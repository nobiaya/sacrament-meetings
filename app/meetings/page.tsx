
import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "@/lib/types";
import { getBaseUrl } from "@/lib/base-url";

async function getMeetings(): Promise<SacramentMeeting[]> {
  const response = await fetch(
    `${getBaseUrl()}/api/meetings`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch meetings");
  }

  return response.json();
}

export default async function MeetingsPage() {
  const meetings = await getMeetings();

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Sacrament Meetings
        </h1>

        <p className="mt-2 text-gray-600">
          View previous and upcoming meeting programmes.
        </p>
      </div>

      {meetings.length === 0 ? (
        <p className="rounded-lg bg-white p-6 text-gray-600">
          No meetings found.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {meetings.map((meeting) => (
            <MeetingCard
              key={meeting.id}
              meeting={meeting}
            />
          ))}
        </div>
      )}
    </section>
  );
}
