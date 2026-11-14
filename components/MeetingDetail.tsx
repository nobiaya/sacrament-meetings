
"use client";

import type { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({
  meeting,
}: MeetingDetailProps) {
  const formattedDate = new Date(
    `${meeting.date}T12:00:00`
  ).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-sm">
      <header className="mb-6 border-b pb-5 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          {meeting.meetingType} Meeting
        </p>

        <h1 className="mt-2 text-2xl font-bold text-gray-900">
          Sacrament Meeting
        </h1>

        <p className="mt-2 text-gray-600">{formattedDate}</p>

        <p className="mt-2 text-sm text-gray-600">
          Presiding: {meeting.presiding}
        </p>

        <p className="text-sm text-gray-600">
          Conducting: {meeting.conducting}
        </p>
      </header>

      <section className="space-y-5">
        <div>
          <h2 className="font-bold text-gray-900">Announcements</h2>
          {meeting.announcements?.length ? (
            <ul className="list-disc pl-5 text-gray-700">
              {meeting.announcements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No announcements.</p>
          )}
        </div>

        <div>
          <h2 className="font-bold text-gray-900">Opening Hymn</h2>
          <p className="text-gray-700">
            Hymn {meeting.openingHymn.number}: {meeting.openingHymn.title}
          </p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900">Opening Prayer</h2>
          <p className="text-gray-700">{meeting.openingPrayer}</p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900">Ward Business</h2>
          {meeting.wardBusiness.length ? (
            <ul className="list-disc pl-5 text-gray-700">
              {meeting.wardBusiness.map((item, index) => (
                <li key={`${item.description}-${index}`}>
                  {item.description}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No ward business.</p>
          )}
        </div>

        <div>
          <h2 className="font-bold text-gray-900">Stake Business</h2>
          <p className="text-gray-700">
            {meeting.stakeBusiness ? "Yes" : "No"}
          </p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900">Sacrament Hymn</h2>
          <p className="text-gray-700">
            Hymn {meeting.sacramentHymn.number}: {meeting.sacramentHymn.title}
          </p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900">
            Speakers and Musical Numbers
          </h2>
          {meeting.speakers.length ? (
            <ul className="space-y-2 text-gray-700">
              {meeting.speakers.map((item, index) => (
                <li key={`${item.name}-${index}`}>
                  <strong>{item.name}</strong>
                  {item.topic && ` — ${item.topic}`}
                  <span className="ml-2 text-sm capitalize text-gray-500">
                    ({item.type.replace("-", " ")})
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">
              No speakers or musical numbers.
            </p>
          )}
        </div>

        <div>
          <h2 className="font-bold text-gray-900">Closing Hymn</h2>
          <p className="text-gray-700">
            Hymn {meeting.closingHymn.number}: {meeting.closingHymn.title}
          </p>
        </div>

        <div>
          <h2 className="font-bold text-gray-900">Closing Prayer</h2>
          <p className="text-gray-700">{meeting.closingPrayer}</p>
        </div>
      </section>

      <div className="mt-8 border-t pt-5 print:hidden">
        <button
          type="button"
          onClick={() => window.print()}
          aria-label="Print meeting programme"
          className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Print Meeting Programme
        </button>
      </div>
    </article>
  );
}
