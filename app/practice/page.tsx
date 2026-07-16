"use client";

import { useState } from "react";
import { questions, type Question } from "@/app/data/question";


type PracticeQuestion = Question & {
  topic: string;
};

const allQuestions: PracticeQuestion[] = Object.entries(questions).flatMap(
  ([topic, list]) =>
    (list as Question[]).map((question) => ({
      ...question,
      topic,
    }))
);

export default function PracticePage() {
  const [selectedQuestion, setSelectedQuestion] =
  useState<PracticeQuestion>(allQuestions[0]);
  

  const [openTopic, setOpenTopic] = useState("Basic C Syntax");

  const [code, setCode] = useState(
    allQuestions[0]?.starterCode ?? ""
  );

  const [output, setOutput] = useState("");

  const [result, setResult] = useState("");

  const handleQuestionClick = (question: PracticeQuestion) => {
    setSelectedQuestion(question);
    setCode(question.starterCode ?? "");
    setOutput("");
    setResult("");
  };

  const runCode = () => {
    if (!code.trim()) {
      setOutput("Write some code first.");
      return;
    }

    setOutput("✅ Program Executed Successfully");
  };

  const submitCode = () => {
    if (!code.trim()) {
      setResult("❌ Please write some code before submitting.");
      return;
    }

    setResult(`✅ Submitted Successfully for "${selectedQuestion.title}"`);
  };

  return (
    <div className="flex h-screen w-full bg-gray-100">

      {/* Sidebar */}

      <aside className="w-[320px] bg-white border-r overflow-y-auto flex-shrink-0">

        <div className="p-5">

          <h2 className="text-2xl font-bold mb-6">
            C Programming
          </h2>

          {Object.entries(questions).map(([topic, list]) => (

            <div
              key={topic}
              className="border-b border-gray-200"
            >

              <button
                onClick={() =>
                  setOpenTopic(openTopic === topic ? "" : topic)
                }
                className="w-full flex justify-between items-center py-3 font-semibold text-blue-600 hover:text-blue-800"
              >
                <span>{topic}</span>

                <span>
                  {openTopic === topic ? "⌃" : "⌄"}
                </span>
              </button>

              {openTopic === topic && (

                <div className="pb-3 space-y-1">

                  {(list as typeof questions[keyof typeof questions]).map(
                    (question) => (

                      <button
                        key={question.id}
                        onClick={() =>
                          handleQuestionClick({
                            ...question,
                            topic,
                          } as PracticeQuestion)
                        }
                        className={`w-full text-left px-3 py-2 rounded-md transition
                        ${
                          selectedQuestion.id === question.id &&
                          selectedQuestion.topic === topic
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        {question.title}
                      </button>

                    )
                  )}

                </div>

              )}

            </div>

          ))}

        </div>

      </aside>

      {/* Main */}

      <main className="flex-1 bg-slate-900 text-white overflow-y-auto p-6">

        <h1 className="text-3xl font-bold">
          {selectedQuestion.title}
        </h1>

        <p className="text-gray-300 mt-3">
          {selectedQuestion.statement}
        </p>

        <div className="flex gap-3 mt-4">

          <span className="bg-blue-600 px-4 py-1 rounded-full text-sm">
            {selectedQuestion.topic}
          </span>

          <span className="bg-green-600 px-4 py-1 rounded-full text-sm">
            {selectedQuestion.difficulty ?? "Easy"}
          </span>

        </div>

        {selectedQuestion.logic && (
  <div className="mt-5 rounded-lg bg-slate-800 p-4">
    <h3 className="mb-2 font-semibold">Logic</h3>

    <pre className="whitespace-pre-wrap text-sm text-gray-300">
      {selectedQuestion.logic}
    </pre>
  </div>
)}

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-[400px] mt-6 rounded-lg border border-slate-700 bg-slate-900 text-green-400 p-4 font-mono outline-none"
        />

        <div className="flex gap-4 mt-6">

          <button
            onClick={runCode}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg"
          >
            Run Code
          </button>

          <button
            onClick={submitCode}
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg"
          >
            Submit
          </button>

        </div>

        <div className="mt-6 bg-white text-black rounded-lg p-4">

          <h2 className="font-bold mb-2">
            Output
          </h2>

          <pre className="whitespace-pre-wrap">
            {output || "Run your code to see the output."}
          </pre>

        </div>

        <div className="mt-5 bg-white text-black rounded-lg p-4">

          <h2 className="font-bold mb-2">
            Submission Result
          </h2>

          <pre className="whitespace-pre-wrap">
            {result || "Submit your solution to check the result."}
          </pre>

        </div>

      </main>

      {/* Test Cases */}

      <aside className="w-[340px] bg-white border-l overflow-y-auto flex-shrink-0">

        <div className="p-5">

          <h2 className="text-2xl font-bold mb-6">
            Test Cases
          </h2>

          {[0, 1].map((index) => (

            <div key={index} className="mb-8">

              <h3 className="text-lg font-semibold text-blue-600">
                Test Case {index + 1}
              </h3>

              <p className="mt-3 font-medium">
                Input
              </p>

            <pre className="bg-gray-100 rounded-lg p-3 text-sm whitespace-pre-wrap">
  {selectedQuestion.testCases?.[index]?.input || "No Sample Input"}
</pre>

              <p className="mt-4 font-medium">
                Expected Output
              </p>
<pre className="bg-gray-100 rounded-lg p-3 text-sm whitespace-pre-wrap">
  {selectedQuestion.testCases?.[index]?.output || "No Sample Output"}
</pre>

            </div>

          ))}

        </div>

      </aside>

    </div>
  );
}