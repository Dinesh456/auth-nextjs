"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import axios from "axios";

export default function ForgetPassPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/forgetpass", { email });
      console.log(response.data.message);
      toast.success(response.data.message);
    } catch (error: any) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (email.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          {loading ? "Processing" : "Forgot your password?"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
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
          <a
            href="/login"
            className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
          >
            Sign in
          </a>
        </p>
      </div>
      <Toaster />
    </div>
  );
}
