"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        <div className="text-center">
          <p className="text-base font-semibold">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6  text-base leading-7 ">
            Sorry, we couldn’t find the page you’re looking for.
          </p>

          <div className="mt-10">
            <Link
              href="/"
              className="rounded-md  bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
