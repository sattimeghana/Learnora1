"use client";

import { useState } from "react";

export default function CoursePage() {
  const lessons = [
    {
      title: "Introduction",
      video: "https://www.youtube.com/embed/KJgsSFOSQv0",
      description: "Introduction to C Programming language.",
    },
    {
      title: "Operators",
      video: "https://www.youtube.com/embed/8PopR3x-VMY",
      description: "Learn arithmetic, relational and logical operators.",
    },
    {
      title: "Control Structures",
      video: "https://www.youtube.com/embed/ZSPZob_1TOk",
      description: "Learn if, else, switch and looping statements.",
    },
    {
      title: "Functions",
      video: "https://www.youtube.com/embed/7Dh73z3icd8",
      description: "Understand functions and modular programming.",
    },
    {
      title: "Arrays",
      video: "https://www.youtube.com/embed/wBtPGnVnA9g",
      description: "Learn array declaration and operations.",
    },
    {
      title: "Pointers",
      video: "https://www.youtube.com/embed/zuegQmMdy8M",
      description: "Learn memory addresses and pointers.",
    },
    {
      title: "Structures",
      video: "https://www.youtube.com/embed/1W4oyuOdXv8",
      description: "Learn structures in C programming.",
    },
    {
      title: "File Handling",
      video: "https://www.youtube.com/embed/VsJZwsmgggo",
      description: "Learn reading and writing files in C.",
    },
  ];

  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-72 bg-slate-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-8">
          C Programming
        </h1>

        <ul className="space-y-3">
          {lessons.map((lesson) => (
            <li
              key={lesson.title}
              onClick={() => setSelectedLesson(lesson)}
              className={`cursor-pointer p-3 rounded-lg transition ${
                selectedLesson.title === lesson.title
                  ? "bg-indigo-600"
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
          Module Progress: 60%
        </p>

        <div className="w-full bg-gray-300 h-3 rounded-full mt-2">
          <div className="bg-indigo-600 h-3 rounded-full w-[60%]"></div>
        </div>

        {/* Video */}
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

        {/* Lesson Notes */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">
            Lesson Notes
          </h2>

          <p>
            You are currently learning{" "}
            <strong>{selectedLesson.title}</strong>.
            Watch the video and take notes before moving
            to the next lesson.
          </p>
        </div>
      </div>
    </div>
  );
}