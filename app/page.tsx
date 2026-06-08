import Link from "next/link";
export default function Home() {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-72 min-h-screen bg-slate-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-8">
          CSP Learning Hub
        </h1>
<button className="w-full bg-slate-800 hover:bg-slate-700 py-3 rounded-lg mb-6">
  + New Chat
</button>
        <ul className="space-y-4">

  <p className="text-gray-400 text-sm mt-4">
    LEARNING
  </p>

  <li className="bg-indigo-600 p-2 rounded-lg">
    <Link href="/">🏠 Dashboard</Link>
  </li>

  <li>
    <Link href="/course">📘 C Programming</Link>
  </li>

  <li>
    <Link href="/dsa">📚 DSA</Link>
  </li>

  <li>
    <Link href="/ads">🧠 ADS</Link>
  </li>

  <p className="text-gray-400 text-sm mt-8">
    PRACTICE
  </p>

  <li>
    <Link href="/practice">💻 Coding Practice</Link>
  </li>

  <li>
    <Link href="/quiz">❓ Quizzes</Link>
  </li>

  <p className="text-gray-400 text-sm mt-8">
    COMMUNITY
  </p>

  <li>
    <Link href="/assistant">🤖 AI Assistant</Link>
  </li>

  <li>
    <Link href="/leaderboard">🏆 Leaderboard</Link>
  </li>

</ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100 overflow-auto">

        {/* Navbar */}
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search topics, lectures, notes..."
            className="border rounded-lg px-4 py-2 w-96"
          />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center">
              M
            </div>

            <span className="font-semibold">
              Meghana
            </span>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-2">
          Welcome Back, Meghana 👋
        </h2>

        <p className="text-gray-600 mb-8">
          Let's continue your learning journey.
        </p>

        {/* Stats Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">🔥 7</h3>
            <p className="text-gray-500">Day Streak</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">🏆 850</h3>
            <p className="text-gray-500">Total Points</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">📚 12</h3>
            <p className="text-gray-500">Quizzes Completed</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">📈 65%</h3>
            <p className="text-gray-500">Overall Progress</p>
          </div>
        </div>

        {/* Continue Learning + Goal */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">
              Continue Learning
            </h3>

            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold">
                C Programming
              </h4>

              <p className="text-gray-500 text-sm">
                Loops in C
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                <div className="bg-blue-500 h-3 rounded-full w-[65%]"></div>
              </div>

              <p className="mt-2 text-sm">
                65% Completed
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">
              Today's Goal
            </h3>

            <p>Complete 2 lessons</p>

            <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
              <div className="bg-purple-500 h-3 rounded-full w-full"></div>
            </div>

            <p className="mt-4">
              Solve 3 problems
            </p>

            <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
              <div className="bg-green-500 h-3 rounded-full w-full"></div>
            </div>
          </div>

        </div>

        {/* Courses */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Your Courses
          </h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-bold text-lg">
                C Programming
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Master the fundamentals of C language.
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                <div className="bg-blue-500 h-3 rounded-full w-[65%]"></div>
              </div>

              <p className="mt-2 text-sm">
                Progress: 65%
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-bold text-lg">
                Data Structures & Algorithms
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Learn DSA with practical examples.
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                <div className="bg-green-500 h-3 rounded-full w-[40%]"></div>
              </div>

              <p className="mt-2 text-sm">
                Progress: 40%
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-bold text-lg">
                ADS
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Algorithm Design and Analysis.
              </p>

              <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                <div className="bg-purple-500 h-3 rounded-full w-[25%]"></div>
              </div>

              <p className="mt-2 text-sm">
                Progress: 25%
              </p>
            </div>

          </div>
        </div>
        <div className="mt-10">
  <h2 className="text-2xl font-bold mb-4">
    Recent Activity
  </h2>

  <div className="bg-white p-5 rounded-xl shadow">
    <p>📖 Watched: Introduction to Pointers in C</p>
    <p className="mt-3">🔍 Solved: Linear Search</p>
    <p className="mt-3">✅ Quiz Completed: Operators in C</p>
  </div>
</div>

      </div>

    </div>
  );
}