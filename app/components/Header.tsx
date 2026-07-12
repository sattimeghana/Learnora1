"use client";

import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-5">
      <div className="flex justify-between items-center">

        {/* Search Box */}
        <div className="relative w-96">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search topics, lectures, notes..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* User */}
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-purple-500 text-white flex items-center justify-center font-semibold">
            M
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Meghana
            </p>

            <p className="text-sm text-gray-500">
              Student
            </p>
          </div>

        </div>

      </div>
    </header>
  );
}