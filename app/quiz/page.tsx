"use client";

import { useState } from "react";

export default function QuizPage() {
const questions = [
{
question: "Which keyword is used to declare a constant in C?",
options: ["const", "static", "final", "define"],
answer: "const",
},
{
question: "Which loop executes at least once?",
options: ["for", "while", "do while", "foreach"],
answer: "do while",
},
{
question: "Which operator is used to get the address of a variable?",
options: ["*", "&", "%", "#"],
answer: "&",
},
{
question: "Which header file is used for printf()?",
options: ["stdlib.h", "stdio.h", "string.h", "math.h"],
answer: "stdio.h",
},
{
question: "Which data structure follows FIFO?",
options: ["Stack", "Queue", "Tree", "Graph"],
answer: "Queue",
},
];

const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [showResult, setShowResult] = useState(false);

const handleAnswer = (option: string) => {
let newScore = score;

if (option === questions[currentQuestion].answer) {
  newScore = score + 1;
  setScore(newScore);
}

const nextQuestion = currentQuestion + 1;

if (nextQuestion < questions.length) {
  setCurrentQuestion(nextQuestion);
} else {
  setShowResult(true);
}

};

if (showResult) {
const percentage = Math.round(
(score / questions.length) * 100
);

return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-8 rounded-xl shadow-lg text-center">

      <h1 className="text-3xl font-bold mb-4">
        Quiz Completed 🎉
      </h1>

      <p className="text-xl mb-3">
        Score: {score} / {questions.length}
      </p>

      <p className="text-xl mb-3">
        Percentage: {percentage}%
      </p>

      <p
        className={`text-xl font-bold mb-6 ${
          percentage >= 60
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {percentage >= 60 ? "PASS" : "FAIL"}
      </p>

      <button
        onClick={() => {
          setCurrentQuestion(0);
          setScore(0);
          setShowResult(false);
        }}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg"
      >
        Restart Quiz
      </button>

    </div>
  </div>
);

}

return (
<div className="min-h-screen bg-gray-100 p-8">

  <h1 className="text-3xl font-bold mb-6">
    C Programming Quiz
  </h1>

  <div className="bg-white p-6 rounded-xl shadow max-w-3xl">

    <h2 className="text-xl font-semibold mb-4">
      Question {currentQuestion + 1} of {questions.length}
    </h2>

    <p className="text-lg mb-6">
      {questions[currentQuestion].question}
    </p>

    <div className="space-y-4">

      {questions[currentQuestion].options.map((option) => (
        <button
          key={option}
          onClick={() => handleAnswer(option)}
          className="w-full text-left p-4 border rounded-lg hover:bg-purple-100 transition"
        >
          {option}
        </button>
      ))}

    </div>

  </div>

</div>

);
}