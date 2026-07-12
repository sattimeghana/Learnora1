"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";

type User = {
  _id: string;
  name: string;
  email: string;
  points: number;
  streak: number;
};

export default function LeaderboardPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        const sortedUsers = data.users.sort(
          (a: User, b: User) => b.points - a.points
        );
        setUsers(sortedUsers);
      });
  }, []);

  return (
  <div className="flex min-h-screen bg-gray-100">
    <Sidebar />

    <main className="flex-1 ml-72">
      <Header />

      <div className="p-8">

        <h1 className="text-3xl font-bold mb-6">
          🏆 Leaderboard
        </h1>

        <table className="w-full border">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="p-2">Rank</th>
              <th className="p-2">Name</th>
              <th className="p-2">Points</th>
              <th className="p-2">Streak</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="text-center border-b">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.points}</td>
                <td className="p-2">🔥 {user.streak}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </main>
  </div>
);
}