"use client";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout success");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight">
          Dashboard
        </h2>
        <p className="mb-7 block text-center text-sm font-medium leading-6 text-gray-400">
          Welcome to NextJs 2024
        </p>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center">
        <span className="hidden sm:block">
          <button
            onClick={getUserDetails}
            className="inline-flex items-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Get User Details
          </button>
        </span>

        <span className="sm:ml-3">
          <button
            onClick={logout}
            className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Sign Out
          </button>
        </span>
      </div>

      {data !== "nothing" ? (
        <p className="mt-5 text-center text-sm">
          {"View your profile "}

          <Link
            className="font-semibold leading-6 text-green-600 hover:text-green-500"
            href={`/profile/${data}`}
          >
            Click here
          </Link>
        </p>
      ) : (
        ""
      )}
      <Toaster />
    </div>
  );
}
