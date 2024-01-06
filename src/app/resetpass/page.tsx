"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function ResetPassPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [user, setUser] = useState({
    token: "",
    password: "",
  });

  const onSubmit = async () => {
    //console.log(user);

    try {
      setLoading(true);
      const response = await axios.post("/api/users/resetpass", user);
      console.log("Reset success");
      toast.success("Reset success");
      router.push("/login");
    } catch (error: any) {
      console.log("Reset failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = window.location.search.split("=")[1] || "";
    setUser({ ...user, token: token });
  }, []);

  useEffect(() => {
    if (user.token.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          {loading ? "Processing" : "Don't worry!"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6"
          >
            New password
          </label>
          <div className="mt-2">
            <input
              id="password"
              type="password"
              value={user.password}
              placeholder="New password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-4">
          <button
            onClick={onSubmit}
            className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {buttonDisabled ? "No Submit" : "Submit"}
          </button>
        </div>

        <p className="mt-10 text-center text-sm ">
          {"No problem? "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
          >
            Sign in
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
}
