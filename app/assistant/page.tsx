export default function AssistantPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Left Chat List */}
      <div className="w-72 bg-slate-900 text-white p-5">

        <button className="w-full bg-purple-600 py-2 rounded-lg mb-6">
          + New Chat
        </button>

        <div className="space-y-3">

          <div className="bg-slate-800 p-3 rounded">
            Explain pointers in C
          </div>

          <div className="bg-slate-800 p-3 rounded">
            Difference between arrays and pointers
          </div>

          <div className="bg-slate-800 p-3 rounded">
            What is time complexity?
          </div>

          <div className="bg-slate-800 p-3 rounded">
            How does merge sort work?
          </div>

        </div>

      </div>

      {/* Chat Area */}
      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-6">
          AI Doubt Assistant
        </h1>

        <div className="bg-white rounded-xl shadow p-6 mb-6">

          <p className="font-semibold text-purple-600">
            Explain pointers in C with example.
          </p>

          <div className="mt-4 bg-gray-100 p-4 rounded-lg">

            <p>
              Pointers are variables that store the
              memory address of another variable.
            </p>

            <br />

            <pre>
{`int x = 10;
int *p = &x;

printf("%d", *p);`}
            </pre>

          </div>

        </div>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Ask your doubt..."
            className="flex-1 border rounded-lg px-4 py-3"
          />

          <button className="bg-purple-600 text-white px-6 rounded-lg">
            Send
          </button>

        </div>

      </div>

    </div>
  );
}