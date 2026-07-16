"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { emailLogin } from "../auth";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async () => {
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      await emailLogin(email, password);

      setSuccess("Login Successful");

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (err: unknown) {
      const error = err as {
        code?: string;
        message?: string;
      };

      switch (error.code) {
        case "auth/user-not-found":
          setError("User not found");
          break;

        case "auth/wrong-password":
          setError("Incorrect password");
          break;

        case "auth/invalid-email":
          setError("Invalid email");
          break;

        case "auth/invalid-credential":
          setError("Invalid email or password");
          break;

        default:
          setError(error.message || "Something went wrong");
      }
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-purple-700 bg-zinc-900 p-10 shadow-2xl">
        <h1 className="text-center text-4xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-gray-400">
          Login to Learnora
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-8 w-full rounded-xl bg-zinc-800 p-4 text-white outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-4 w-full rounded-xl bg-zinc-800 p-4 text-white outline-none focus:ring-2 focus:ring-purple-500"
        />

        {error && (
          <p className="mt-4 text-center text-red-500">
            {error}
          </p>
        )}

        {success && (
          <p className="mt-4 text-center text-green-500">
            {success}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-700 to-fuchsia-600 py-4 text-lg font-bold text-white transition hover:opacity-90"
        >
          Login
        </button>

        <p className="mt-8 text-center text-gray-400">
          Dont have an account?
        </p>

        <Link
          href="/signup"
          className="mt-2 block text-center font-semibold text-purple-400 hover:text-purple-300"
        >
          Create Account
        </Link>
      </div>
    </main>
  );
}