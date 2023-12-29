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
      const response = await axios.post("/api/users/resetpass",user);
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
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "Reset Password"}</h1>

      <input
        className="p-1 border border-gray-300 rounded-lg my-4 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        type="password"
        value={user.password}
        placeholder="New password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        onClick={onSubmit}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        disabled={buttonDisabled}
      >
        {buttonDisabled ? "No Submit" : "Submit"}
      </button>

      <Link href="/login" className="hover:underline">
        Visit login page
      </Link>
      <Toaster />
    </div>
  );
}
