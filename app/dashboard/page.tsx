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

export default function DashboardPage() {
  const [topUser, setTopUser] = useState<User | null>(null);
  const [userName, setUserName] = useState("");
const [feedback, setFeedback] = useState("");
const [rating, setRating] = useState(5);

const [reviews, setReviews] = useState([
  {
    name: "Rahul",
    rating: 5,
    feedback: "Excellent platform for coding practice!"
  },
  {
    name: "Priya",
    rating: 4,
    feedback: "Loved the UI and quizzes."
  }
]);
const handleSubmit = () => {
  if (!userName || !feedback) {
    alert("Please fill all fields");
    return;
  }

  const newReview = {
    name: userName,
    rating,
    feedback,
  };

  setReviews([newReview, ...reviews]);

  setUserName("");
  setFeedback("");
  setRating(5);
};

useEffect(() => {
  fetch("/api/user")
    .then((res) => {
      console.log("Status:", res.status);
      return res.json();
    })
    .then((data) => {
      console.log(data);

      if (data.users && data.users.length > 0) {
        const sorted = data.users.sort(
          (a: User, b: User) => b.points - a.points
        );
        setTopUser(sorted[0]);
      } else {
        console.log("No users found");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}, []);

  if (!topUser) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 ml-72">
        <Header />

        <div className="p-8">

          <h1 className="text-4xl font-bold">
            Welcome Back👋
          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            Lets continue your learning journey.
          </p>

          {/* Stats */}

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-3xl font-bold">🔥 {topUser.streak}</h2>
              <p className="text-gray-500">Day Streak</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-3xl font-bold">🏆 {topUser.points}</h2>
              <p className="text-gray-500">Total Points</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-3xl font-bold">📚 12</h2>
              <p className="text-gray-500">Quizzes Completed</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-3xl font-bold">📈 65%</h2>
              <p className="text-gray-500">Overall Progress</p>
            </div>

          </div>

          {/* Continue Learning */}

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="bg-white rounded-xl shadow p-6">

              <h2 className="text-xl font-bold mb-4">
                Continue Learning
              </h2>

              <h3 className="font-semibold">
                C Programming
              </h3>

              <p className="text-gray-500">
                Loops in C
              </p>

              <div className="w-full h-3 rounded-full bg-gray-200 mt-4">
                <div className="w-[65%] h-3 bg-blue-500 rounded-full"></div>
              </div>

              <p className="mt-3 text-sm">
                65% Completed
              </p>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

              <h2 className="text-xl font-bold mb-4">
                Todays Goal
              </h2>

              <p>Complete 2 Lessons</p>

              <div className="w-full h-3 rounded-full bg-gray-200 mt-3">
                <div className="w-full h-3 bg-purple-500 rounded-full"></div>
              </div>

              <p className="mt-5">
                Solve 3 Coding Problems
              </p>

              <div className="w-full h-3 rounded-full bg-gray-200 mt-3">
                <div className="w-full h-3 bg-green-500 rounded-full"></div>
              </div>

            </div>

          </div>

          {/* Courses */}

          <div className="mt-10">

            <h2 className="text-2xl font-bold mb-6">
              Your Courses
            </h2>

            <div className="grid lg:grid-cols-3 gap-6">

              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-bold text-lg">
                  C Programming
                </h3>

                <p className="text-gray-500 mt-2">
                  Master C Programming from basics.
                </p>

                <div className="w-full h-3 rounded-full bg-gray-200 mt-5">
                  <div className="w-[65%] h-3 bg-blue-500 rounded-full"></div>
                </div>

              </div>

              <div className="bg-white rounded-xl shadow p-6">

                <h3 className="font-bold text-lg">
                  Data Structures
                </h3>

                <p className="text-gray-500 mt-2">
                  Practice DSA with coding questions.
                </p>

                <div className="w-full h-3 rounded-full bg-gray-200 mt-5">
                  <div className="w-[40%] h-3 bg-green-500 rounded-full"></div>
                </div>

              </div>

              <div className="bg-white rounded-xl shadow p-6">

                <h3 className="font-bold text-lg">
                  ADS
                </h3>

                <p className="text-gray-500 mt-2">
                  Algorithm Design & Analysis.
                </p>

                <div className="w-full h-3 rounded-full bg-gray-200 mt-5">
                  <div className="w-[25%] h-3 bg-purple-500 rounded-full"></div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}