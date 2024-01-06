import Link from "next/link";

export default function UserProfile({ params }: any) {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight">
          Profile
        </h2>
        <div className=" mt-5 sm:mx-auto sm:w-full sm:max-w-sm flex justify-center">
          <p className="block text-center text-sm font-medium leading-6 text-white py-2 px-4 border rounded-lg border-yellow-600 ">
            {params.id}
          </p>
        </div>
        <p className="block text-center text-sm font-medium leading-6 text-white py-2 px-4 mt-5 ">
          {"Go to "}
          <Link
            className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
            href={`/profile`}
          >
            dashboard
          </Link>
        </p>
      </div>
    </div>
  );
}
