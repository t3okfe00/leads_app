"use client";
import { Skeleton } from "@/components/ui/skeleton";

const CompaniesSkeleton = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full overflow-x-auto p-3">
        <h1 className="text-lg font-semibold mb-3">Company List</h1>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="hidden md:grid md:grid-cols-12 bg-gray-50 px-3 py-2 border-b text-xs">
            <div className="md:col-span-3 font-medium text-gray-600">Name</div>
            <div className="md:col-span-3 font-medium text-gray-600">
              Address
            </div>
            <div className="md:col-span-2 font-medium text-gray-600">Email</div>
            <div className="md:col-span-2 font-medium text-gray-600">Phone</div>
            <div className="md:col-span-2 font-medium text-gray-600">Types</div>
          </div>

          <div className="divide-y divide-gray-100">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 px-3 py-4 animate-pulse"
              >
                <Skeleton className="md:col-span-3 h-4 mb-2 md:mb-0" />
                <Skeleton className="md:col-span-3 h-4 mb-2 md:mb-0" />
                <Skeleton className="md:col-span-2 h-4 mb-2 md:mb-0" />
                <Skeleton className="md:col-span-2 h-4 mb-2 md:mb-0" />
                <div className="md:col-span-2 flex flex-wrap gap-1">
                  {[...Array(2)].map((_, j) => (
                    <Skeleton key={j} className="w-10 h-5 rounded-full" />
                  ))}
                  <Skeleton className="w-5 h-5 ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3 w-full lg:max-w-xs">
        <h2 className="text-lg font-semibold mb-2">Add Company</h2>
        <Skeleton className="h-10 w-full mb-2" />
        <Skeleton className="h-10 w-full mb-2" />
        <Skeleton className="h-10 w-full mb-2" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
};

export default CompaniesSkeleton;
