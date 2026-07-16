"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";
export default function AddUserPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [points, setPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/add-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      points,
      streak,
    }),
  });

  const data = await res.json();

  console.log(data);

  if (data.success) {
    alert("User added successfully!");
  } else {
    alert("Failed to add user");
  }
};

  return (
  
     <>
  <Sidebar />

  <main className="flex-1 ml-72">
    <Header />

    <div className="p-8"></div>

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">
          Add User
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-md"
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="number"
            placeholder="Points"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
            className="border p-2 rounded"
          />

          <input
            type="number"
            placeholder="Streak"
            value={streak}
            onChange={(e) => setStreak(Number(e.target.value))}
            className="border p-2 rounded"
          />

          <button
            type="submit"
            className="bg-purple-600 text-white p-2 rounded"
          >
            Add User
          </button>
        </form>
      </div>
      </main>
    </>
  );
}