import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PaginationButton() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;
  return (
    <div className="flex justify-start sm:justify-between max-w-lg text-blue-700 px-9 space-x-14 sm:space-x-0">
      {startIndex > 10 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex - 10}`}
        >
          <div className="flex flex-col justify-center items-center py-4 cursor-pointer group">
            <ChevronLeftIcon className="h-8" />
            <p className="group-hover:underline decoration-blue-700 group-hover:text-blue-700 ">
              Previous
            </p>
          </div>
        </Link>
      )}

      {startIndex < 90 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex + 10}`}
        >
          <div className="flex flex-col items-center justify-centerd py-4 cursor-pointer group">
            <ChevronRightIcon className="h-8" />
            <p className="group-hover:underline decoration-blue-700 group-hover:text-blue-700 ">
              Next
            </p>
          </div>
        </Link>
      )}
    </div>
  );
}
