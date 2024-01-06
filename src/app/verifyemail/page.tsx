"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {verified && (
        <div className="sm:mx-auto text-center sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-2xl leading-9 tracking-tight">
            {"Your email has been verified"}
          </h2>
          <p className="mt-1 text-center text-[7px] font-thin">
            {token ? `${token}` : "No token"}
          </p>
          <p className="mt-4 text-center text-sm">
            {"You can now sign in with your new account "}
            <Link
              href="/login"
              className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      )}

      {error && (
        <div className="sm:mx-auto text-center sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-2xl leading-9 tracking-tight">{"Error"}</h2>
          <p className="mt-4 text-center text-sm">
            {"Your email address could not be verified. "}
            <Link
              href="/signup"
              className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
            >
              Go Back
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
