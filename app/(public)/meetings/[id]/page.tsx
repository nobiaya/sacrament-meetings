
import { Suspense } from "react";
import MeetingDetail from "@/components/MeetingDetail";
import { getMeetingById } from "@/lib/meetings-db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface MeetingPageProps {
  params: Promise<{ id: string }>;
}

async function MeetingContent({ params }: MeetingPageProps) {
  const { id } = await params;
  const meetingId = Number(id);

  if (!Number.isInteger(meetingId) || meetingId <= 0) {
    notFound();
  }

  const meeting = await getMeetingById(meetingId);

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

      <MeetingDetail meeting={await meeting} />
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
