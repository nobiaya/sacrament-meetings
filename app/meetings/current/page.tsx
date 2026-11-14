import { connection } from "next/server";
import { redirect } from "next/navigation";

function getMostRecentSunday(): string {
  const today = new Date();
  const day = today.getDay();

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - day);

  const year = sunday.getFullYear();
  const month = String(sunday.getMonth() + 1).padStart(2, "0");
  const date = String(sunday.getDate()).padStart(2, "0");

  return `${year}-${month}-${date}`;
}

export default async function CurrentMeetingPage() {
  // Wait until request time before using the current date.
  await connection();

  const date = getMostRecentSunday();

  const response = await fetch(
    `http://localhost:3000/api/meetings?date=${date}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to find the current meeting");
  }

  const meetings = await response.json();

  if (meetings.length > 0) {
    redirect(`/meetings/${meetings[0].id}`);
  }

  redirect("/meetings");
}