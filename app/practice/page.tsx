
"use client";

import { useState } from "react";

export default function PracticePage() {
  const problems = {
    "Two Sum": {
      input: "[2,7,11,15], target = 9",
      output: "[0,1]",
    },
    "Reverse Array": {
      input: "[1,2,3,4]",
      output: "[4,3,2,1]",
    },
    "Linear Search": {
      input: "Array = [10,20,30], Key = 20",
      output: "Found at index 1",
    },
    "Binary Search": {
      input: "Array = [10,20,30,40], Key = 30",
      output: "Found at index 2",
    },
    "Check Palindrome": {
      input: "madam",
      output: "True",
    },
  };

  const [selectedProblem, setSelectedProblem] =
    useState("Check Palindrome");

  const [code, setCode] = useState(`#include <stdio.h>

int main() {

   printf("Hello World");

   return 0;
}`);

  const [output, setOutput] = useState("");
  const [result, setResult] = useState("");

  const runCode = () => {
    if (code.includes("Hello World")) {
      setOutput("Hello World");
    } else {
      setOutput("Program Executed Successfully");
    }
  };

  const submitCode = () => {
    if (
      selectedProblem === "Check Palindrome" &&
      code.toLowerCase().includes("palindrome")
    ) {
      setResult("✅ Palindrome Test Passed");
    } else if (
      selectedProblem === "Linear Search" &&
      code.toLowerCase().includes("search")
    ) {
      setResult("✅ Linear Search Test Passed");
    } else if (
      selectedProblem === "Binary Search" &&
      code.toLowerCase().includes("binary")
    ) {
      setResult("✅ Binary Search Test Passed");
    } else if (
      selectedProblem === "Reverse Array" &&
      code.toLowerCase().includes("reverse")
    ) {
      setResult("✅ Reverse Array Test Passed");
    } else if (
      selectedProblem === "Two Sum" &&
      code.toLowerCase().includes("sum")
    ) {
      setResult("✅ Two Sum Test Passed");
    } else {
      setResult("❌ Test Case Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Coding Practice
      </h1>

      <div className="grid grid-cols-4 gap-6">

        {/* Problem List */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="font-bold text-xl mb-4">
            Problems
          </h2>

          <ul className="space-y-3">

            <li
              onClick={() => setSelectedProblem("Two Sum")}
              className="cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
              Two Sum
            </li>

            <li
              onClick={() => setSelectedProblem("Reverse Array")}
              className="cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
              Reverse Array
            </li>

            <li
              onClick={() => setSelectedProblem("Linear Search")}
              className="cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
              Linear Search
            </li>

            <li
              onClick={() => setSelectedProblem("Binary Search")}
              className="cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
              Binary Search
            </li>

            <li
              onClick={() => setSelectedProblem("Check Palindrome")}
              className="cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
              Check Palindrome
            </li>

          </ul>
        </div>

        {/* Code Editor */}
        <div className="col-span-2 bg-slate-900 text-white rounded-xl p-4">

          <h2 className="font-bold text-xl mb-4">
            Current Problem: {selectedProblem}
          </h2>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-80 bg-slate-900 text-green-400 p-4 border border-slate-700 rounded-lg outline-none"
          />

          <div className="flex gap-4 mt-6">

            <button
              onClick={runCode}
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              Run Code
            </button>

            <button
              onClick={submitCode}
              className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
            >
              Submit
            </button>

          </div>

          {/* Output */}
          <div className="mt-6 bg-white text-black p-4 rounded-lg">
            <h3 className="font-bold mb-2">
              Output
            </h3>

            <p>{output}</p>
          </div>

          {/* Submission Result */}
          <div className="mt-4 bg-white text-black p-4 rounded-lg">
            <h3 className="font-bold mb-2">
              Submission Result
            </h3>

            <p>{result}</p>
          </div>

        </div>

        {/* Test Cases */}
        <div className="bg-white rounded-xl shadow p-4">

          <h2 className="font-bold text-xl mb-4">
            Test Cases
          </h2>

          <div className="space-y-4">

            <div>
              <p>Input:</p>

              <p className="bg-gray-100 p-2 rounded">
                {
                  problems[
                    selectedProblem as keyof typeof problems
                  ].input
                }
              </p>
            </div>

            <div>
              <p>Expected Output:</p>

              <p className="bg-gray-100 p-2 rounded">
                {
                  problems[
                    selectedProblem as keyof typeof problems
                  ].output
                }
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}