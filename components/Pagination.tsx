
'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));

    return `${pathname}?${params.toString()}`;
  }

  return (
    <nav
      aria-label="Pagination"
      className="mt-8 flex items-center justify-center gap-6"
    >
      {currentPage > 1 ? (
        <Link
          href={createPageURL(currentPage - 1)}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
        >
          Previous
        </Link>
      ) : (
        <span className="cursor-not-allowed rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-400">
          Previous
        </span>
      )}

      <span className="text-sm font-semibold text-gray-800">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link
          href={createPageURL(currentPage + 1)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Next
        </Link>
      ) : (
        <span className="cursor-not-allowed rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-400">
          Next
        </span>
      )}
    </nav>
  );
}
