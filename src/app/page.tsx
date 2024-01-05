"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Next.js
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            luctus, nunc auctor tempor volutpat, nibh augue semper sem, sed
            consequat sapien felis eu eros. Suspendisse potenti. Donec sit amet
            rhoncus purus, id lacinia tellus. Sed enim eros, dictum in efficitur
            at, fermentum eget sem. Aenean iaculis purus lectus, pretium
            condimentum sapien viverra et. Donec pulvinar auctor nunc id
            commodo. Sed molestie arcu ut eros rhoncus convallis. Phasellus
            dictum est ut arcu sagittis aliquet. Nunc dignissim, quam at finibus
            tempus, neque ligula hendrerit lorem, ut commodo dui nibh a quam.
            Vivamus imperdiet eget erat sed semper.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/profile"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white-600"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
