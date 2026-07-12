"use client";
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import {
  Brain,
  Code2,
  Repeat,
  FunctionSquare,
  Grid2X2,
  MousePointer2,
  FileCode,
  Boxes,
  FileText,
  Search,
} from "lucide-react";

export default function ConceptsPage() {
    const [search, setSearch] = useState("");
  const concepts = [
    {
  title: "C Basics",
  desc: "Learn the fundamentals of C programming.",
  topics: ["Variables", "Data Types", "Input / Output", "Comments"],
  icon: <Code2 size={22} />,
  color: "blue",
  url: "https://youtu.be/EjavYOFoJJ0?si=grX_wuOMOpcdwcx7"
},
    {
      title: "Conditional Statements",
      desc: "Learn the conditional statements of C programming language.",
      topics: ["if statement", "if-else statement", "if-else-if statement", "Nested if-else"],
      icon: <Code2 size={22} />,
      color: "blue",
      url: "https://youtu.be/vB6hBch4lmk?si=vMfEWjzV-7M_K5Jf"
      
    },
    {
      title: "Loops in C",
      desc: "Understand iteration and repetition in C.",
      topics: ["for Loop", "while Loop", "do while", "Nested Loops"],
      icon: <Repeat size={22} />,
      color: "green",
      url: "https://youtu.be/GIxNJzeT6nw?si=KLkmu6iQ_yjh8eEA"
      
    },
    {
      title: "Functions in C",
      desc: "Break code into reusable function blocks.",
      topics: ["Function Basics", "Arguments", "Return Values", "Recursion"],
      icon: <FunctionSquare size={22} />,
      color: "orange",
      url: "https://youtu.be/0qeddd52DCE?si=0IjkWD25oV68-Oot"
      
    },
    {
      title: "Arrays in C",
      desc: "Store multiple values in one variable.",
      topics: ["1D Arrays", "2D Arrays", "Initialization", "Operations"],
      icon: <Grid2X2 size={22} />,
      color: "purple",
      url: "https://www.youtube.com/watch?v=55l-aZ7_F24&list=PLBlnK6fEyqRhU6vNrQ-6ndkcbM7D7q-U8"
      
    },
    {
      title: "Pointers in C",
      desc: "Learn memory and pointer operations.",
      topics: ["Pointer Basics", "Arithmetic", "Pointers & Arrays", "Functions"],
      icon: <MousePointer2 size={22} />,
      color: "orange",
      url:"https://www.youtube.com/watch?v=f2i0CnUOniA&list=PLBlnK6fEyqRgZQ079Wa5H8D1oa43HGRQb"
      
    },
    {
      title: "Strings in C",
      desc: "Work with string functions and text.",
      topics: ["Declaration", "Functions", "Operations", "User Input"],
      icon: <FileCode size={22} />,
      color: "blue",
      url:"https://www.youtube.com/watch?v=IlqiTmcK1Eg&list=PLBlnK6fEyqRhwQbYrTDZYJaB4z1YgsAPW"
      
    },
    {
      title: "Structures in C",
      desc: "Group different data types.",
      topics: ["Basics", "Array of Struct", "Functions", "Nested"],
      icon: <Boxes size={22} />,
      color: "pink",
      url:"https://www.youtube.com/watch?v=zmRxC7gYw-g&list=PLBlnK6fEyqRiteqwlMLXYtZ16xXDR7MO0"
      
    },
    {
      title: "File Handling",
      desc: "Read and write files in C.",
      topics: ["File Operations", "Reading", "Writing", "Binary"],
      icon: <FileText size={22} />,
      color: "cyan",
      url: "https://www.youtube.com/watch?v=kJ70tXVYnws&list=PLfVsf4Bjg79BOmLYBRTwqCIkGPiOWb7xj"
    },

    {
  title: "Recursion",
  desc: "Solve problems using recursive thinking.",
  topics: ["Base Case", "Recursive Calls", "Backtracking", "Tree Recursion"],
  icon: <Repeat size={22} />,
  color: "green",
  url:"https://www.youtube.com/watch?v=kepBmgvWNDw&list=PLBlnK6fEyqRjPtlh5bjBq7S0Koa1EG_f8"
 
},
{
  title: "Command Line Args",
  desc: "Pass values through command line.",
  topics: ["argc", "argv", "Input", "Examples"],
  icon: <Code2 size={22} />,
  color: "blue",
  url:"https://youtu.be/8FR9gLoAYGI?si=XnExTmo4RnAw_vUu"
  
},
{
  title: "Sorting",
  desc: "Arrange data efficiently.",
  topics: ["Bubble", "Selection", "Merge", "Quick Sort"],
  icon: <Grid2X2 size={22} />,
  color: "purple",
  url:"https://www.youtube.com/watch?v=o4bAoo_gFBU&list=PLuZ_bd9XlByzTIP5j1aWXo7smCIxvzd2D"
  
},
{
  title: "Searching",
  desc: "Find elements quickly.",
  topics: ["Linear", "Binary", "Applications", "Complexity"],
  icon: <Search size={22} />,
  color: "cyan",
  url:"https://youtu.be/k4xVQhMERuQ?si=DF4ui1n2lhf4gUns"
  
},
{
  title: "Binary Tree",
  desc: "Learn hierarchical data structures.",
  topics: ["Traversal", "Height", "BST", "Operations"],
  icon: <Boxes size={22} />,
  color: "pink",
  url:"https://www.youtube.com/watch?v=YAdLFsTG70w&list=PLAuemBFSZV1oE256PESc8ku8MX3xMQYJF"
  
},
{
  title: "Hashing",
  desc: "Store and access data efficiently.",
  topics: ["Hash Functions", "Collision", "Map", "Set"],
  icon: <FileCode size={22} />,
  color: "orange",
  url:"https://youtu.be/4UrPTAsVo88?si=vl2Dhsa9ZmBr0L9p"
  
},
{
  title: "Divide & Conquer",
  desc: "Break problems into smaller parts.",
  topics: ["Divide", "Conquer", "Merge Sort", "Binary Search"],
  icon: <FunctionSquare size={22} />,
  color: "orange",
  url:"https://youtu.be/VJAHv4Fbu6M?si=C7aIV81w1fHIPu5X"
  
},
{
  title: "Prefix Sum",
  desc: "Answer range sum problems fast.",
  topics: ["1D Prefix", "2D Prefix", "Queries", "Applications"],
  icon: <Code2 size={22} />,
  color: "blue",
  url:"https://youtu.be/yuws7YK0Yng?si=1esxCvZpmZUlq7Ag"
},
{
  title: "Two Pointers",
  desc: "Use dual indices efficiently.",
  topics: ["Left Right", "Pairs", "Sorted Arrays", "Optimization"],
  icon: <MousePointer2 size={22} />,
  color: "green",
  url:"https://youtu.be/QzZ7nmouLTI?si=B7S7D6Mu09Qm8-YE"
  
},
{
  title: "Sliding Window",
  desc: "Optimize subarray problems.",
  topics: ["Fixed Window", "Dynamic Window", "Strings", "Arrays"],
  icon: <Grid2X2 size={22} />,
  color: "purple",
  url:"https://youtu.be/y2d0VHdvfdc?si=iIp7Qxn0mSz8n7mS"
  
},
{
  title: "Dynamic Programming",
  desc: "Solve overlapping subproblems efficiently.",
  topics: ["Memoization", "Tabulation", "1D DP", "2D DP"],
  icon: <Brain size={22} />,
  color: "pink",
  url:"https://www.youtube.com/watch?v=lVR2u9lsxl8&list=PLdo5W4Nhv31aBrJE1WS4MR9LRfbmZrAQu"
},

{
  title: "Operators",
  desc: "Understand operators and expressions in C.",
  topics: ["Arithmetic", "Logical", "Relational", "Bitwise"],
  icon: <FunctionSquare size={22} />,
  color: "orange",
  url: "https://youtu.be/2AzgYOC8qCk?si=85pZhSjtO_NHmItA"
},
{
  title: "Dynamic Memory Allocation",
  desc: "Allocate memory dynamically in C.",
  topics: ["malloc", "calloc", "realloc", "free"],
  icon: <MousePointer2 size={22} />,
  color: "green",
  url: "https://youtu.be/7RNesIP9Ot0?si=tsSXsHyKRq-xYDKJ"
},
{
  title: "Stack",
  desc: "Learn stack data structure and operations.",
  topics: ["Push", "Pop", "Peek", "Applications"],
  icon: <Boxes size={22} />,
  color: "purple",
  url: "https://www.youtube.com/watch?v=I37kGX-nZEI&list=PLBlnK6fEyqRgWh1emltdMOz8O2m5X3YYn"
},
{
  title: "Queue",
  desc: "Understand queue operations and usage.",
  topics: ["Enqueue", "Dequeue", "Circular Queue", "Priority Queue"],
  icon: <Boxes size={22} />,
  color: "cyan",
  url: "https://www.youtube.com/watch?v=ypJwoz_SXTo&list=PLqM7alHXFySG6wgjVeEat_ouTIi0IBQ6D"
},
{
  title: "Trees",
  desc: "Learn tree data structures and traversals.",
  topics: ["Binary Tree", "BST", "Traversal", "Height"],
  icon: <Boxes size={22} />,
  color: "green",
  url: "https://www.youtube.com/watch?v=YAdLFsTG70w&list=PLAuemBFSZV1oE256PESc8ku8MX3xMQYJF"
},
{
  title: "Graphs",
  desc: "Represent and traverse graph structures.",
  topics: ["BFS", "DFS", "Adjacency List", "Shortest Path"],
  icon: <Grid2X2 size={22} />,
  color: "pink",
  url: "https://www.youtube.com/watch?v=RpgyCJBbl5E&list=PLGjplNEQ1it-0w_PkFtKzH0ZExo6Lvm6R"
},
{
  title: "Backtracking",
  desc: "Solve problems using trial and undo strategy.",
  topics: ["Recursion", "N-Queens", "Maze", "Permutations"],
  icon: <Repeat size={22} />,
  color: "orange",
  url: "https://youtu.be/pNzljlzDCiI?si=M61RZioX9I9PFGgX"
},
{
  title: "Pattern Problems",
  desc: "Practice logic building using patterns.",
  topics: ["Stars", "Numbers", "Nested Loops", "Logic"],
  icon: <Grid2X2 size={22} />,
  color: "purple",
  url: "https://www.youtube.com/watch?v=iviYixpXUm8&list=PLdo5W4Nhv31Yu1igxTE2x0aeShbKtVcCy"
},
  ];

  const colors: any = {
  blue: "bg-blue-50 text-blue-600 border-blue-200",
  green: "bg-green-50 text-green-600 border-green-200",
  orange: "bg-orange-50 text-orange-600 border-orange-200",
  purple: "bg-purple-50 text-purple-600 border-purple-200",
  pink: "bg-pink-50 text-pink-600 border-pink-200",
  cyan: "bg-cyan-50 text-cyan-600 border-cyan-200",
};

const filteredConcepts = concepts.filter((concept) =>
  concept.title.toLowerCase().includes(search.toLowerCase())
);

return (
  <div className="flex min-h-screen">
    <Sidebar />

    <main className="flex-1 ml-72 bg-gray-100 overflow-auto">

      {/* Top Navbar (same as Dashboard) */}
      <div className="flex justify-between items-center p-8">

        <input
          type="text"
          placeholder="Search topics, lectures, notes..."
          className="border rounded-lg px-4 py-2 w-96 bg-white"
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

      <div className="px-8 pb-8">

        {/* Header */}
        <div className="flex justify-between items-start flex-wrap gap-5 mb-8">

          <div>
            <p className="uppercase tracking-[4px] text-[11px] font-semibold text-blue-600">
              CONCEPT ARENA
            </p>

            <div className="flex items-center gap-3 mt-2">
              <h1 className="text-4xl font-bold text-slate-900">
                Concept Reinforcement
              </h1>

              <Brain className="text-purple-500" size={28} />
            </div>

            <p className="text-gray-600 mt-2">
              Learn, understand and strengthen your core C, DS & ADS concepts.
            </p>
          </div>

          {/* Search */}
          <div className="flex gap-3">

            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search concepts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 outline-none w-64"
              />
            </div>

            <select className="px-4 py-2.5 rounded-xl bg-white border border-gray-200">
              <option>All Topics</option>
            </select>

          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {filteredConcepts.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
            >

              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${colors[item.color]}`}
              >
                {item.icon}
              </div>

              <h2 className="font-bold text-lg mt-4">
                {item.title}
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                {item.desc}
              </p>

              <ul className="text-sm text-gray-600 mt-4 space-y-2">
                {item.topics.map((topic, i) => (
                  <li key={i}>• {topic}</li>
                ))}
              </ul>

              <div className="flex justify-between items-center mt-6">

                <span className="text-xs text-gray-400">
                  {item.topics.length} Topics
                </span>

                <button
                  onClick={() => window.open(item.url, "_blank")}
                  className={`px-4 py-2 rounded-xl text-sm border hover:scale-105 transition ${colors[item.color]}`}
                >
                  Start Learning
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  </div>
);

}