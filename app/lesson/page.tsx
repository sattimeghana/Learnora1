export default function LessonPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-6">
        Switch Statement in C
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Video Section */}
        <div className="md:col-span-2">

          <div className="bg-black rounded-xl h-[400px] flex items-center justify-center text-white text-xl">
            Video Player
          </div>

          <div className="bg-white p-6 rounded-xl shadow mt-6">
            <h2 className="text-xl font-bold mb-3">
              Lesson Overview
            </h2>

            <p>
              In this lesson, we learn how the switch
              statement works in C programming with
              practical examples.
            </p>
          </div>

        </div>

        {/* Playlist */}
        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold mb-4">
            Lecture Playlist
          </h2>

          <ul className="space-y-3">

            <li>1. Introduction</li>

            <li>2. Decision Making</li>

            <li>3. If Else Statement</li>

            <li className="bg-indigo-100 p-2 rounded">
              ▶ 4. Switch Statement
            </li>

            <li>5. Nested If Else</li>

            <li>6. Conditional Operator</li>

            <li>7. Practice Questions</li>

          </ul>

        </div>

      </div>

      {/* Tabs */}
      <div className="bg-white p-6 rounded-xl shadow mt-6">

        <div className="flex gap-6 border-b pb-3">

          <button className="font-bold text-indigo-600">
            Notes
          </button>

          <button>
            Resources
          </button>

          <button>
            Comments
          </button>

        </div>

        <div className="mt-4">
          <p>
            Download Notes:
          </p>

          <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded">
            Download PDF
          </button>
        </div>

      </div>

    </div>
  );
}