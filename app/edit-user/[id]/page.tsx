"use client";

import { useEffect, useState } from "react";

export default function EditUserPage({
  params,
}: {
  params: { id: string };
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [points, setPoints] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        const user = data.users.find(
          (u: any) => u._id === params.id
        );

        if (user) {
          setName(user.name);
          setEmail(user.email);
          setPoints(user.points);
          setStreak(user.streak);
        }
      });
  }, [params.id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/user/${params.id}`, {
      method: "PUT",
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

    alert(data.message);

    window.location.href = "/users";
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Edit User
      </h1>

      <form
        onSubmit={handleUpdate}
        className="flex flex-col gap-4 max-w-md"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-2"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2"
        />

        <input
          type="number"
          value={points}
          onChange={(e) =>
            setPoints(Number(e.target.value))
          }
          className="border p-2"
        />

        <input
          type="number"
          value={streak}
          onChange={(e) =>
            setStreak(Number(e.target.value))
          }
          className="border p-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Update User
        </button>
      </form>
    </div>
  );
}