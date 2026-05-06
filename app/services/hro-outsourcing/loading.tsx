export default function BpoLoading() {
  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nav skeleton */}
        <div className="flex gap-2 mb-8">
          <div className="w-24 h-8 bg-gray-200 rounded-full animate-pulse" />
          <div className="w-32 h-8 bg-gray-200 rounded-full animate-pulse" />
          <div className="w-28 h-8 bg-gray-200 rounded-full animate-pulse" />
        </div>
        
        {/* Hero skeleton */}
        <div className="w-48 h-6 bg-gray-200 rounded animate-pulse mb-4" />
        <div className="w-3/4 h-16 bg-gray-200 rounded-xl animate-pulse mb-6" />
        <div className="w-1/2 h-24 bg-gray-200 rounded-xl animate-pulse mb-8" />
        <div className="w-40 h-12 bg-gray-200 rounded-xl animate-pulse" />
      </div>

      {/* Stats bar skeleton */}
      <div className="mt-20 w-full h-32 bg-gray-100 animate-pulse" />
    </div>
  );
}
