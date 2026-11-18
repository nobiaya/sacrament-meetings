
import { connection } from "next/server";
import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";

function getMostRecentSunday(): string {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  return [
    sunday.getFullYear(),
    String(sunday.getMonth() + 1).padStart(2, "0"),
    String(sunday.getDate()).padStart(2, "0"),
  ].join("-");
}

export default async function CurrentMeetingPage() {
  await connection();

  const date = getMostRecentSunday();
  const meetings = getMeetings(date);

  if (meetings.length > 0) {
    redirect(`/meetings/${meetings[0].id}`);
  }

  redirect("/meetings");
}
