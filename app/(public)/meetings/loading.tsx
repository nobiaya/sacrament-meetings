export default function MeetingsLoading() {
  return (
    <div
      className="flex min-h-[40vh] flex-col items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

      <p className="mt-4 text-sm font-medium text-gray-600">
        Loading meeting programmes...
      </p>
    </div>
  );
}