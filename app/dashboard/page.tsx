
 "use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

type User = {
  _id: string;
  name: string;
  email: string;
  points: number;
  streak: number;
};

export default function DashboardPage() {
  const [topUser, setTopUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.users.sort(
          (a: User, b: User) => b.points - a.points
        );

        setTopUser(sorted[0]);
      });
  }, []);

  if (!topUser) return <div>Loading...</div>;

  return (
    <>
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-6">
          📊 Student Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-blue-500 text-white p-6 rounded-xl">
            <h2>Points</h2>
            <p className="text-3xl">{topUser.points}</p>
          </div>

          <div className="bg-green-500 text-white p-6 rounded-xl">
            <h2>Streak</h2>
            <p className="text-3xl">{topUser.streak} Days</p>
          </div>

          <div className="bg-purple-500 text-white p-6 rounded-xl">
            <h2>Top User</h2>
            <p className="text-3xl">{topUser.name}</p>
          </div>
        </div>
      </div>
    </>
  );
}