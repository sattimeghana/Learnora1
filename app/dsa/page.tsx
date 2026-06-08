"use client";

import { useState } from "react";

export default function DSAPage() {
  const lessons = [
    {
      title: "Arrays",
      video: "https://www.youtube.com/embed/RBSGKlAvoiM",
      description: "Learn array operations and applications.",
    },
    {
      title: "Linked List",
      video: "https://www.youtube.com/embed/N6dOwBde7-M",
      description: "Understand singly and doubly linked lists.",
    },
    {
      title: "Stack",
      video: "https://www.youtube.com/embed/F1F2imiOJfk",
      description: "Learn LIFO data structure implementation.",
    },
    {
      title: "Queue",
      video: "https://www.youtube.com/embed/XuCbpw6Bj1U",
      description: "Learn FIFO data structure implementation.",
    },
    {
      title: "Tree",
      video: "https://www.youtube.com/embed/oSWTXtMglKE",
      description: "Introduction to binary trees and traversals.",
    },
    {
      title: "Graph",
      video: "https://www.youtube.com/embed/gXgEDyodOJU",
      description: "Learn graph representation and traversal.",
    },
    {
      title: "Searching",
      video: "https://www.youtube.com/embed/MZaf_9IZCrc",
      description: "Linear Search and Binary Search.",
    },
    {
      title: "Sorting",
      video: "https://www.youtube.com/embed/kPRA0W1kECg",
      description: "Bubble Sort, Selection Sort and Merge Sort.",
    },
  ];

  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-72 bg-slate-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-8">
          Data Structures & Algorithms
        </h1>

        <ul className="space-y-3">
          {lessons.map((lesson) => (
            <li
              key={lesson.title}
              onClick={() => setSelectedLesson(lesson)}
              className={`cursor-pointer p-3 rounded-lg transition ${
                selectedLesson.title === lesson.title
                  ? "bg-green-600"
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
          Module Progress: 40%
        </p>

        <div className="w-full bg-gray-300 h-3 rounded-full mt-2">
          <div className="bg-green-600 h-3 rounded-full w-[40%]"></div>
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
            Watch the video carefully and practice coding
            problems related to this topic.
          </p>
        </div>

        {/* Topics */}
        <div className="mt-8 space-y-4">

          <div className="bg-white p-4 rounded-xl shadow">
            ✅ Fundamentals
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            ✅ Practice Examples
          </div>

          <div className="bg-green-100 p-4 rounded-xl shadow border-2 border-green-500">
            ▶ Current Lesson
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            🔒 Advanced Problems
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            🔒 Interview Questions
          </div>

        </div>

      </div>
    </div>
  );
}