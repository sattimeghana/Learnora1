"use client";

import { useRouter } from "next/navigation";
import { Search, LogOut } from "lucide-react";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    // Remove login data if stored
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to Landing Page
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between px-8 py-5">

        {/* Search Bar */}

        <div className="relative w-full max-w-md">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search topics, lectures, notes..."
            className="w-full pl-12 pr-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Logout Button */}

        <button
          onClick={handleLogout}
          className="ml-6 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </header>
  );
}