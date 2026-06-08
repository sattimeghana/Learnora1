"use client";

import { useState } from "react";

export default function ADSPage() {
  const lessons = [
    {
      title: "Introduction",
      video: "https://www.youtube.com/embed/0IAPZzGSbME",
      description: "Introduction to Algorithm Design and Analysis.",
    },
    {
      title: "Divide and Conquer",
      video: "https://www.youtube.com/embed/2Rr2tW9zvRg",
      description: "Learn Divide and Conquer strategy and applications.",
    },
    {
      title: "Greedy Method",
      video: "https://www.youtube.com/embed/ARvQcqJ_-NY",
      description: "Learn Greedy algorithms and optimization problems.",
    },
    {
      title: "Dynamic Programming",
      video: "https://www.youtube.com/embed/oBt53YbR9Kk",
      description: "Learn Dynamic Programming techniques.",
    },
    {
      title: "Backtracking",
      video: "https://www.youtube.com/embed/DKCbsiDBN6c",
      description: "Learn Backtracking algorithms and examples.",
    },
    {
      title: "Branch and Bound",
      video: "https://www.youtube.com/embed/3RBNPc0_Q6g",
      description: "Learn Branch and Bound technique.",
    },
    {
      title: "Time Complexity",
      video: "https://www.youtube.com/embed/D6xkbGLQesk",
      description: "Analyze algorithm efficiency and complexity.",
    },
    {
      title: "NP Complete Problems",
      video: "https://www.youtube.com/embed/eHZifpgyH_4",
      description: "Introduction to NP Hard and NP Complete problems.",
    },
  ];

  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);

  return (
    <div className="flex min-h-screen">
      
      {/* Sidebar */}
      <div className="w-72 bg-slate-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-8">
          Algorithm Design & Analysis
        </h1>

        <ul className="space-y-3">
          {lessons.map((lesson) => (
            <li
              key={lesson.title}
              onClick={() => setSelectedLesson(lesson)}
              className={`cursor-pointer p-3 rounded-lg transition ${
                selectedLesson.title === lesson.title
                  ? "bg-purple-600"
                  : "hover:bg-slate-700"
              }`}
            >
              {lesson.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">

        <h1 className="text-3xl font-bold">
          {selectedLesson.title}
        </h1>

        <p className="text-gray-600 mt-2">
          {selectedLesson.description}
        </p>

        <p className="text-gray-600 mt-4">
          Module Progress: 25%
        </p>

        <div className="w-full bg-gray-300 h-3 rounded-full mt-2">
          <div className="bg-purple-600 h-3 rounded-full w-[25%]"></div>
        </div>

        {/* Video Section */}
        <div className="mt-8 bg-white p-4 rounded-xl shadow">
          <iframe
            width="100%"
            height="500"
            src={selectedLesson.video}
            title={selectedLesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Notes Section */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">
            Lesson Notes
          </h2>

          <p>
            You are currently learning{" "}
            <strong>{selectedLesson.title}</strong>.
            Watch the lecture and understand the algorithmic
            approach before solving problems.
          </p>
        </div>

        {/* Topics */}
        <div className="mt-8 space-y-4">

          <div className="bg-white p-4 rounded-xl shadow">
            ✅ Theory
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            ✅ Worked Examples
          </div>

          <div className="bg-purple-100 p-4 rounded-xl shadow border-2 border-purple-500">
            ▶ Current Lesson
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            🔒 Advanced Algorithms
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            🔒 Practice Questions
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            🔒 Previous Year Questions
          </div>

        </div>

      </div>
    </div>
  );
}