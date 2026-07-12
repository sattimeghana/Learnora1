"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Code2,
  Brain,
  CircleHelp,
  Trophy,
  Bot,
  BookMarked,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900 text-white p-5 flex flex-col">

      {/* Logo */}
      <h1 className="text-3xl font-bold mb-8">
        CSP Learning Hub
      </h1>

      {/* Button */}
      <button className="w-full bg-slate-800 hover:bg-slate-700 py-3 rounded-xl mb-8 transition">
        + New Chat
      </button>

      <nav className="flex-1 overflow-y-auto">

        {/* ================= LEARNING ================= */}

        <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">
          Learning
        </p>

        <ul className="space-y-2">

          <li>
            <Link
              href="/"
              className={`flex items-center gap-3 p-3 rounded-xl transition ${
                isActive("/")
                  ? "bg-indigo-600"
                  : "hover:bg-slate-800"
              }`}
            >
              <LayoutDashboard size={20} />
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/course"
              className={`flex items-center gap-3 p-3 rounded-xl transition ${
                isActive("/course")
                  ? "bg-indigo-600"
                  : "hover:bg-slate-800"
              }`}
            >
              <BookOpen size={20} />
              C Programming
            </Link>
          </li>

          <li>
            <Link
              href="/dsa"
              className={`flex items-center gap-3 p-3 rounded-xl transition ${
                isActive("/dsa")
                  ? "bg-indigo-600"
                  : "hover:bg-slate-800"
              }`}
            >
              <BookMarked size={20} />
              DSA
            </Link>
          </li>

          <li>
            <Link
              href="/ads"
              className={`flex items-center gap-3 p-3 rounded-xl transition ${
                isActive("/ads")
                  ? "bg-indigo-600"
                  : "hover:bg-slate-800"
              }`}
            >
              <Brain size={20} />
              ADS
            </Link>
          </li>

        </ul>

        {/* ================= PRACTICE ================= */}

        <p className="text-xs text-gray-400 uppercase tracking-wider mt-8 mb-3">
          Practice
        </p>

        <ul className="space-y-2">

          <li>
            <Link
              href="/practice"
              className={`flex items-center gap-3 p-3 rounded-xl transition ${
                isActive("/practice")
                  ? "bg-indigo-600"
                  : "hover:bg-slate-800"
              }`}
            >
              <Code2 size={20} />
              Coding Practice
            </Link>
          </li>

          <li>
            <Link
              href="/concept-reinforcement"
              className={`flex items-center gap-3 p-3 rounded-xl transition ${
                isActive("/concept-reinforcement")
                  ? "bg-indigo-600"
                  : "hover:bg-slate-800"
              }`}
            >
              <Brain size={20} />
              Concept Reinforcement
            </Link>
          </li>

          <li>
            <Link
              href="/quiz"
              className={`flex items-center gap-3 p-3 rounded-xl transition ${
                isActive("/quiz")
                  ? "bg-indigo-600"
                  : "hover:bg-slate-800"
              }`}
            >
              <CircleHelp size={20} />
              Quizzes
            </Link>
          </li>

        </ul>

        {/* ================= COMMUNITY ================= */}

        <p className="text-xs text-gray-400 uppercase tracking-wider mt-8 mb-3">
          Community
        </p>

        <ul className="space-y-2">

          <li>
            <Link
              href="/assistant"
              className={`flex items-center gap-3 p-3 rounded-xl transition ${
                isActive("/assistant")
                  ? "bg-indigo-600"
                  : "hover:bg-slate-800"
              }`}
            >
              <Bot size={20} />
              AI Assistant
            </Link>
          </li>

          <li>
            <Link
              href="/leaderboard"
              className={`flex items-center gap-3 p-3 rounded-xl transition ${
                isActive("/leaderboard")
                  ? "bg-indigo-600"
                  : "hover:bg-slate-800"
              }`}
            >
              <Trophy size={20} />
              Leaderboard
            </Link>
          </li>

        </ul>

      </nav>

      {/* User */}
      <div className="border-t border-slate-700 pt-5 mt-5 flex items-center gap-3">

        <div className="w-11 h-11 rounded-full bg-purple-500 flex items-center justify-center font-bold">
          M
        </div>

        <div>
          <p className="font-semibold">
            Meghana
          </p>

          <p className="text-xs text-gray-400">
            Student
          </p>
        </div>

      </div>

    </aside>
  );
}