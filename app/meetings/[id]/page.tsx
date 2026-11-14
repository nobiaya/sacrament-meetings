
import { Suspense } from "react";
import MeetingDetail from "@/components/MeetingDetail";
import type { SacramentMeeting } from "@/lib/types";
import { getBaseUrl } from "@/lib/base-url";
import Link from "next/link";
import { notFound } from "next/navigation";

interface MeetingPageProps {
  params: Promise<{ id: string }>;
}

async function getMeeting(id: string): Promise<SacramentMeeting | null> {
  const response = await fetch(
    `${getBaseUrl()}/api/meetings/${id}`,
    { cache: "no-store" }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch meeting");
  }

  return response.json();
}

async function MeetingContent({
  params,
}: MeetingPageProps) {
  const { id } = await params;
  const meeting = await getMeeting(id);

  if (!meeting) {
    notFound();
  }

  return (
    <section>
      <Link
        href="/meetings"
        className="mb-6 inline-block text-sm font-medium text-blue-600 hover:underline"
      >
        ← Back to Meetings
      </Link>

      <MeetingDetail meeting={meeting} />
    </section>
  );
}

export default function MeetingPage({ params }: MeetingPageProps) {
  return (
    <Suspense
      fallback={
        <p className="py-10 text-center text-gray-600">
          Loading meeting programme...
        </p>
      }
    >
      <MeetingContent params={params} />
    </Suspense>
  );
}
