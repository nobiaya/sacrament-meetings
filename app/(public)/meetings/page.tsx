
import { getMeetings, getMeetingsTotalPages } from '@/lib/meetings-db';
import { MeetingSearch } from '@/components/MeetingSearch';
import MeetingCard from '@/components/MeetingCard';
import { Pagination } from '@/components/Pagination';

export default async function MeetingsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Sacrament Meetings
        </h1>
        <p className="text-gray-600">
          Browse and explore meeting programmes.
        </p>
      </div>

      <div className="mb-8">
        <MeetingSearch />
      </div>

      {meetings.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-gray-500">
          No meeting programmes found.
        </p>
      )}

      <Pagination totalPages={totalPages} />
    </main>
  );
}
