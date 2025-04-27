"use client";

import Link from "next/link";
import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/outline";

export function NotFoundNavigation() {
  return (
    <div className="flex items-center justify-center gap-4 pt-4">
      <button
        onClick={() => window.history.back()}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm cursor-pointer text-zinc-500 hover:text-zinc-900 rounded-full border border-zinc-200 hover:border-zinc-900 transition-colors"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Go Back
      </button>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm text-zinc-500 hover:text-zinc-900 rounded-full border border-zinc-200 hover:border-zinc-900 transition-colors"
      >
        <HomeIcon className="w-4 h-4" />
        Go to Home
      </Link>
    </div>
  );
}
