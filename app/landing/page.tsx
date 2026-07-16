"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BookOpen,
  Code2,
  Trophy,
  Sparkles,
} from "lucide-react";

export default function Home() {
    const [name, setName] = useState("");
const [rating, setRating] = useState(5);
const [feedback, setFeedback] = useState("");

const [reviews, setReviews] = useState([
  {
    name: "Rahul",
    rating: 5,
    feedback: "Learnora completely changed the way I prepare for placements.",
  },
  {
    name: "Priya",
    rating: 4,
    feedback: "Coding practice and quizzes are amazing.",
  },
  {
    name: "Meghana",
    rating: 5,
    feedback: "Beautiful interface and easy navigation.",
  },
]);

const handleSubmit = () => {
  if (!name.trim() || !feedback.trim()) return;

  setReviews([
    {
      name,
      rating,
      feedback,
    },
    ...reviews,
  ]);

  setName("");
  setRating(5);
  setFeedback("");
};
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-violet-50 to-white">

      {/* ================= Navbar ================= */}

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <Link href="/landing" className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg">
              <BookOpen size={22} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Learnora
              </h1>

              <p className="text-xs text-gray-500">
                Learn • Practice • Achieve
              </p>
            </div>

          </Link>

          {/* Navigation */}

          <div className="flex items-center gap-4">

            <Link
              href="/login"
              className="rounded-xl border border-violet-600 px-6 py-3 font-semibold text-violet-600 transition hover:bg-violet-50"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700"
            >
              Sign Up
            </Link>

          </div>

        </div>

      </nav>

      {/* ================= Hero Section ================= */}

      <section className="mx-auto flex min-h-screen max-w-7xl items-center gap-16 px-6 pt-32">

        {/* Left Content */}

        <div className="flex-1">

          <div className="mb-6 inline-flex items-center rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">

            <Sparkles className="mr-2 h-4 w-4" />

            Learn. Practice. Achieve.

          </div>

          <h1 className="text-6xl font-extrabold leading-tight text-slate-900">

            Your Learning

            <span className="block text-violet-600">
              Journey Starts Here 👋
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">

            Learnora helps you master programming,
            coding, aptitude, quizzes and interview
            preparation—all in one beautiful platform.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex gap-5">

            <Link
              href="/signup"
              className="rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700"
            >
              Get Started →
            </Link>

            <Link
              href="#features"
              className="rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Explore Features
            </Link>

          </div>
                    {/* Feature Highlights */}

          <div className="mt-12 flex flex-wrap gap-8 text-sm text-slate-600">

            <div className="flex items-center gap-2">

              <BookOpen
                className="text-violet-600"
                size={18}
              />

              <span>Track Progress</span>

            </div>

            <div className="flex items-center gap-2">

              <Code2
                className="text-green-600"
                size={18}
              />

              <span>Practice Daily</span>

            </div>

            <div className="flex items-center gap-2">

              <Trophy
                className="text-yellow-500"
                size={18}
              />

              <span>Earn Rewards</span>

            </div>

          </div>

        </div>

        {/* ================= Dashboard Preview ================= */}

        <div className="flex-1">

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">

            <div className="mb-8 flex items-center justify-between">

              <div>

                <h3 className="font-bold text-slate-800">
                  Welcome back, Learner! 👋
                </h3>

                <p className="text-sm text-gray-500">
                  Continue your learning journey.
                </p>

              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white font-bold">
                L
              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl border p-5">

                <p className="text-sm text-gray-500">
                  🔥 Day Streak
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  7
                </h2>

              </div>

              <div className="rounded-2xl border p-5">

                <p className="text-sm text-gray-500">
                  🏆 Total Points
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  850
                </h2>

              </div>

              <div className="rounded-2xl border p-5">

                <p className="text-sm text-gray-500">
                  📚 Quizzes
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  12
                </h2>

              </div>

              <div className="rounded-2xl border p-5">

                <p className="text-sm text-gray-500">
                  📈 Progress
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  65%
                </h2>

              </div>

            </div>

            <div className="mt-8 rounded-2xl border p-5">

              <div className="flex justify-between">

                <h4 className="font-semibold">
                  Continue Learning
                </h4>

                <span className="text-violet-600 text-sm">
                  65%
                </span>

              </div>

              <p className="mt-2 text-sm text-gray-500">
                C Programming
              </p>

              <div className="mt-4 h-3 rounded-full bg-gray-200">

                <div className="h-3 w-[65%] rounded-full bg-violet-600"></div>

              </div>

            </div>
                        {/* Today's Goal */}

            <div className="mt-6 rounded-2xl border p-5">

              <div className="flex justify-between">

                <h4 className="font-semibold">
                  Todays Goal
                </h4>

                <span className="text-green-600 text-sm">
                  80%
                </span>

              </div>

              <p className="mt-2 text-sm text-gray-500">
                Solve 3 coding problems
              </p>

              <div className="mt-4 h-3 rounded-full bg-gray-200">

                <div className="h-3 w-[80%] rounded-full bg-green-500"></div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= Statistics ================= */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="grid gap-6 rounded-3xl border bg-white p-8 shadow-lg md:grid-cols-4">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-violet-600">
              500+
            </h2>

            <p className="mt-2 text-gray-600">
              Lessons
            </p>

          </div>

          <div className="text-center">

            <h2 className="text-4xl font-bold text-green-600">
              1000+
            </h2>

            <p className="mt-2 text-gray-600">
              Practice Problems
            </p>

          </div>

          <div className="text-center">

            <h2 className="text-4xl font-bold text-orange-500">
              10K+
            </h2>

            <p className="mt-2 text-gray-600">
              Happy Learners
            </p>

          </div>

          <div className="text-center">

            <h2 className="text-4xl font-bold text-blue-600">
              24/7
            </h2>

            <p className="mt-2 text-gray-600">
              AI Support
            </p>

          </div>

        </div>

      </section>

      {/* ================= Features ================= */}

      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        

  <div className="text-center">

    <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-600">
      Everything You Need
    </span>

    <h2 className="mt-6 text-5xl font-bold text-slate-900">

      Powerful Features to

      <span className="text-violet-600">
        Boost Learning
      </span>

    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">

      Learnora combines structured learning,
      coding practice, quizzes, analytics
      and AI guidance into one platform.

    </p>

  </div>

  <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

    {/* Card 1 */}

    <div className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-2 hover:shadow-2xl">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100">

        <BookOpen
          size={30}
          className="text-violet-600"
        />

      </div>

      <h3 className="mt-6 text-2xl font-bold">

        Structured Learning

      </h3>

      <p className="mt-4 leading-7 text-gray-600">

        Follow a roadmap from beginner to
        advanced with organized lessons.

      </p>

    </div>

    {/* Card 2 */}

    <div className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-2 hover:shadow-2xl">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">

        <Code2
          size={30}
          className="text-green-600"
        />

      </div>

      <h3 className="mt-6 text-2xl font-bold">

        Coding Practice

      </h3>

      <p className="mt-4 leading-7 text-gray-600">

        Solve coding questions,
        improve logic and prepare
        for placements.

      </p>

    </div>

    {/* Card 3 */}

    <div className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-2 hover:shadow-2xl">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100">

        <Trophy
          size={30}
          className="text-yellow-600"
        />

      </div>

      <h3 className="mt-6 text-2xl font-bold">

        Quizzes & Tests

      </h3>

      <p className="mt-4 leading-7 text-gray-600">

        Topic-wise quizzes,
        assessments and
        mock interviews.

      </p>

    </div>
        {/* Card 4 */}

    <div className="rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

        <Sparkles
          className="text-blue-600"
          size={30}
        />

      </div>

      <h3 className="mt-6 text-2xl font-bold">
        AI Learning Assistant
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        Get instant explanations,
        personalized recommendations,
        and AI-powered study support
        whenever you need help.
      </p>

    </div>

  </div>

</section>

{/* ================= Reviews ================= */}

<section className="bg-slate-50 py-24">

  <div className="mx-auto max-w-7xl px-6">

    <h2 className="text-center text-5xl font-bold">
      Reviews & Feedback
    </h2>

    <p className="mt-4 text-center text-gray-600">
      Share your learning experience with Learnora.
    </p>

    <div className="mt-16 grid gap-12 lg:grid-cols-2">

      {/* Left */}

      <div className="rounded-3xl bg-white p-8 shadow-lg">

        <h3 className="mb-6 text-2xl font-bold">
          Write a Review
        </h3>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-5 w-full rounded-xl border p-4"
        />

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="mb-5 w-full rounded-xl border p-4"
        >
          <option value={5}>⭐⭐⭐⭐⭐</option>
          <option value={4}>⭐⭐⭐⭐</option>
          <option value={3}>⭐⭐⭐</option>
          <option value={2}>⭐⭐</option>
          <option value={1}>⭐</option>
        </select>

        <textarea
          rows={5}
          placeholder="Write your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="mb-5 w-full rounded-xl border p-4"
        />

        <button
          onClick={handleSubmit}
          className="w-full rounded-xl bg-violet-600 py-4 font-semibold text-white hover:bg-violet-700"
        >
          Submit Review
        </button>

      </div>

      {/* Right */}

      <div>

        <h3 className="mb-6 text-2xl font-bold">
          Recent Reviews
        </h3>

        <div className="space-y-5">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow"
            >

              <div className="mb-2 text-yellow-500">
                {"⭐".repeat(review.rating)}
              </div>

              <h4 className="text-lg font-bold">
                {review.name}
              </h4>

              <p className="mt-3 text-gray-600">
                {review.feedback}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="px-6 py-24">

  <div className="mx-auto max-w-7xl rounded-[40px] bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 p-16 text-center text-white">

    <h2 className="text-5xl font-bold">

      Start Your Learning Journey Today

    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg text-violet-100">

      Join thousands of students improving their coding,
      aptitude and interview skills.

    </p>

    <div className="mt-10 flex justify-center gap-5">

      <Link
        href="/signup"
        className="rounded-xl bg-white px-8 py-4 font-semibold text-violet-700"
      >
        Create Free Account
      </Link>

      <Link
        href="/login"
        className="rounded-xl border border-white px-8 py-4 font-semibold"
      >
        Login
      </Link>

    </div>

  </div>

</section>

           

      {/* ================= Footer ================= */}

      <footer className="border-t border-gray-200 bg-white">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white">

                <BookOpen size={24} />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Learnora
                </h2>

                <p className="text-sm text-gray-500">
                  Learn • Practice • Achieve
                </p>

              </div>

            </div>

            <p className="mt-6 leading-7 text-gray-600">
              Learnora is your all-in-one learning platform for mastering
              programming, aptitude, coding practice, quizzes, and interview
              preparation.
            </p>

          </div>

          {/* Platform */}

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Platform
            </h3>

            <ul className="space-y-3 text-gray-600">

              <li><Link href="#">Courses</Link></li>

              <li><Link href="#">Practice</Link></li>

              <li><Link href="#">Quizzes</Link></li>

              <li><Link href="#">Leaderboard</Link></li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-3 text-gray-600">

              <li><Link href="#">About</Link></li>

              <li><Link href="#">Blog</Link></li>

              <li><Link href="#">Careers</Link></li>

              <li><Link href="#">Contact</Link></li>

            </ul>

          </div>

          {/* Support */}

          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Support
            </h3>

            <ul className="space-y-3 text-gray-600">

              <li><Link href="#">Help Center</Link></li>

              <li><Link href="#">Privacy Policy</Link></li>

              <li><Link href="#">Terms of Service</Link></li>

              <li><Link href="#">FAQs</Link></li>

            </ul>

          </div>

        </div>

        <div className="border-t border-gray-200">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">

            <p className="text-gray-500">
              © 2026 Learnora. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-500">

              <Link href="#">Instagram</Link>

              <Link href="#">LinkedIn</Link>

              <Link href="#">GitHub</Link>

              <Link href="#">Twitter</Link>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}
