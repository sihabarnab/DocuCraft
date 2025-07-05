"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4">
      <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/10 shadow-xl rounded-2xl p-8 max-w-md w-full border border-red-300 dark:border-red-700 animate-fade-in">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="text-5xl text-red-600 dark:text-red-400 animate-bounce-slow">
            ⚠️
          </div>

          <h2 className="text-3xl font-bold text-red-700 dark:text-red-300">
            Oops! Something went wrong
          </h2>

          <p className="text-sm text-zinc-700 dark:text-zinc-300">
            {error?.message ||
              "An unexpected error occurred. Please try again."}
          </p>

          <button
            onClick={() => reset()}
            className="mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium shadow-lg transform transition-transform duration-300 hover:scale-105 hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            🔄 Try again
          </button>
        </div>
      </div>
    </div>
  );
}
