"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { emailSignup } from "../auth";

export default function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async () => {
    setError("");
    setSuccess("");

    if (!email || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await emailSignup(email, password);

      setSuccess("Account Created Successfully");

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    }  catch (err: unknown) {
  const error = err as {
    code?: string;
    message?: string;
  };

  switch (error.code) {
    case "auth/email-already-in-use":
      setError("Email already exists");
      break;

    case "auth/invalid-email":
      setError("Invalid email");
      break;

    case "auth/weak-password":
      setError("Password should be at least 6 characters");
      break;

    default:
      setError(error.message || "Something went wrong");
  }
}
  };

  return (
    <main className="min-h-screen bg-black flex justify-center items-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-purple-700 bg-zinc-900 p-10">

        <h1 className="text-center text-4xl font-bold text-white">
          Create Account
        </h1>

        <p className="mt-2 text-center text-gray-400">
          Join Learnora
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-8 w-full rounded-xl bg-zinc-800 p-4 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-4 w-full rounded-xl bg-zinc-800 p-4 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mt-4 w-full rounded-xl bg-zinc-800 p-4 text-white outline-none"
        />

        {error && (
          <p className="mt-4 text-center text-red-500">{error}</p>
        )}

        {success && (
          <p className="mt-4 text-center text-green-500">{success}</p>
        )}

        <button
          onClick={handleSignup}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-700 to-fuchsia-600 py-4 text-lg font-bold text-white hover:opacity-90 transition"
        >
          Create Account
        </button>

        <p className="mt-8 text-center text-gray-400">
          Already have an account?
        </p>

        <Link
          href="/login"
          className="mt-2 block text-center font-semibold text-purple-400 hover:text-purple-300"
        >
          Login
        </Link>

      </div>
    </main>
  );
}