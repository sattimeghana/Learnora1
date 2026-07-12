export interface TestCase {
  input: string;
  output: string;
}

export interface Question {
  id: number;
  title: string;
  statement: string;
  logic?: string;
  difficulty: "Easy" | "Medium" | "Hard";
  starterCode: string;
  testCases: TestCase[];
}

export const questions = {
  // Basic C Syntax
  "Basic C Syntax": [
    
     {
  id: 1,
  title: "Hello World",
  statement: "Write a C program to print Hello World.",
  difficulty: "Easy",

  starterCode: `#include <stdio.h>

int main() {
    return 0;
}`,
  testCases: [
    {
      input: "",
      output: "Hello World"
    },
    {
      input: "",
      output: "Hello World"
    }
  ]
},
    {
  id: 2,
  title: "Sum of Two Numbers",
  statement: "Take two integers as input and print their sum.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {
    int a, b;

    return 0;
}`,
  testCases: [
    {
      input: "10 20",
      output: "30"
    },
    {
      input: "45 55",
      output: "100"
    }
  ]
},

{
  id: 3,
  title: "Area of Circle",
  statement: "Find area of circle using radius input.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {
    float radius;

    return 0;
}`,
  testCases: [
    {
      input: "7",
      output: "153.94"
    },
    {
      input: "5",
      output: "78.50"
    }
  ]
},

{
  id: 4,
  title: "Swap Two Numbers",
  statement: "Swap two numbers using third variable.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {
    int a, b, temp;

    return 0;
}`,
  testCases: [
    {
      input: "10 20",
      output: "20 10"
    },
    {
      input: "5 9",
      output: "9 5"
    }
  ]
},

{
  id: 5,
  title: "Even or Odd",
  statement: "Check whether number is even or odd.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {
    int n;

    return 0;
}`,
  testCases: [
    {
      input: "8",
      output: "Even"
    },
    {
      input: "13",
      output: "Odd"
    }
  ]
},

{
  id: 6,
  title: "Positive Negative",
  statement: "Check whether a number is positive, negative or zero.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {
    int n;

    return 0;
}`,
  testCases: [
    {
      input: "25",
      output: "Positive"
    },
    {
      input: "-10",
      output: "Negative"
    }
  ]
},
    {
  id: 7,
  title: "ASCII Value",
  statement: "Print ASCII value of a character.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {
    char ch;

    return 0;
}`,
  testCases: [
    {
      input: "A",
      output: "65"
    },
    {
      input: "a",
      output: "97"
    }
  ]
},

{
  id: 8,
  title: "Simple Interest",
  statement: "Calculate simple interest.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {
    float p, r, t;

    return 0;
}`,
  testCases: [
    {
      input: "1000 5 2",
      output: "100.00"
    },
    {
      input: "5000 10 3",
      output: "1500.00"
    }
  ]
},

{
  id: 9,
  title: "Temperature Conversion",
  statement: "Convert Celsius to Fahrenheit.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {
    float celsius;

    return 0;
}`,
  testCases: [
    {
      input: "0",
      output: "32.00"
    },
    {
      input: "100",
      output: "212.00"
    }
  ]
},

{
  id: 10,
  title: "Calculator",
  statement: "Perform +, -, *, / operations using two numbers.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {
    float a, b;
    char op;

    return 0;
}`,
  testCases: [
    {
      input: "10 + 5",
      output: "15"
    },
    {
      input: "20 / 4",
      output: "5"
    }
  ]
}
    
  ],
  // Loops
  "Loops in C": [

{
  id: 1,
  title: "Print Numbers",
  statement: "Print numbers from 1 to 10 using a for loop.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "",
      output: "1 2 3 4 5 6 7 8 9 10"
    },
    {
      input: "",
      output: "1 2 3 4 5 6 7 8 9 10"
    }
  ]
},

{
  id: 2,
  title: "Reverse Numbers",
  statement: "Print numbers from 10 to 1 using a while loop.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "",
      output: "10 9 8 7 6 5 4 3 2 1"
    },
    {
      input: "",
      output: "10 9 8 7 6 5 4 3 2 1"
    }
  ]
},

{
  id: 3,
  title: "Even Numbers",
  statement: "Print all even numbers from 1 to N.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "10",
      output: "2 4 6 8 10"
    },
    {
      input: "20",
      output: "2 4 6 8 10 12 14 16 18 20"
    }
  ]
},

{
  id: 4,
  title: "Sum of N Numbers",
  statement: "Find the sum of first N natural numbers.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5",
      output: "15"
    },
    {
      input: "10",
      output: "55"
    }
  ]
},

{
  id: 5,
  title: "Factorial",
  statement: "Find the factorial of a given number.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5",
      output: "120"
    },
    {
      input: "7",
      output: "5040"
    }
  ]
},

{
  id: 6,
  title: "Multiplication Table",
  statement: "Print the multiplication table of a given number.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5",
      output: "5 10 15 20 25 30 35 40 45 50"
    },
    {
      input: "8",
      output: "8 16 24 32 40 48 56 64 72 80"
    }
  ]
},

{
  id: 7,
  title: "Count Digits",
  statement: "Count the number of digits in a given number.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "12345",
      output: "5"
    },
    {
      input: "987654",
      output: "6"
    }
  ]
},

{
  id: 8,
  title: "Reverse Number",
  statement: "Reverse a given integer.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "1234",
      output: "4321"
    },
    {
      input: "5607",
      output: "7065"
    }
  ]
},

{
  id: 9,
  title: "Palindrome Number",
  statement: "Check whether a number is a palindrome.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "121",
      output: "Palindrome"
    },
    {
      input: "123",
      output: "Not Palindrome"
    }
  ]
},

{
  id: 10,
  title: "Prime Number",
  statement: "Check whether a number is prime.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "7",
      output: "Prime"
    },
    {
      input: "10",
      output: "Not Prime"
    }
  ]
}

],
  // functions 
  "Functions in C": [

{
  id: 1,
  title: "Simple Function",
  statement: "Create a function to print Hello World.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

void display() {

}

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "",
      output: "Hello World"
    },
    {
      input: "",
      output: "Hello World"
    }
  ]
},

{
  id: 2,
  title: "Addition Function",
  statement: "Create a function to add two numbers.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int add(int a, int b) {

}

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5 3",
      output: "8"
    },
    {
      input: "10 20",
      output: "30"
    }
  ]
},

{
  id: 3,
  title: "Maximum of Two Numbers",
  statement: "Find the larger of two numbers using a function.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int maximum(int a, int b) {

}

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "10 25",
      output: "25"
    },
    {
      input: "80 50",
      output: "80"
    }
  ]
},

{
  id: 4,
  title: "Even or Odd Function",
  statement: "Check whether a number is even or odd using a function.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

void checkEvenOdd(int n) {

}

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "6",
      output: "Even"
    },
    {
      input: "9",
      output: "Odd"
    }
  ]
},

{
  id: 5,
  title: "Square Function",
  statement: "Find the square of a number using a function.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int square(int n) {

}

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "4",
      output: "16"
    },
    {
      input: "11",
      output: "121"
    }
  ]
},

{
  id: 6,
  title: "Factorial Function",
  statement: "Find the factorial of a number using a function.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int factorial(int n) {

}

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5",
      output: "120"
    },
    {
      input: "6",
      output: "720"
    }
  ]
},

{
  id: 7,
  title: "Prime Check Function",
  statement: "Check whether a number is prime using a function.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int isPrime(int n) {

}

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "7",
      output: "Prime"
    },
    {
      input: "12",
      output: "Not Prime"
    }
  ]
},

{
  id: 8,
  title: "Reverse Number",
  statement: "Reverse a number using a function.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int reverseNumber(int n) {

}

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "1234",
      output: "4321"
    },
    {
      input: "9087",
      output: "7809"
    }
  ]
},

{
  id: 9,
  title: "Palindrome Number",
  statement: "Check whether a number is a palindrome using a function.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int isPalindrome(int n) {

}

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "121",
      output: "Palindrome"
    },
    {
      input: "123",
      output: "Not Palindrome"
    }
  ]
},

{
  id: 10,
  title: "Fibonacci Function",
  statement: "Print Fibonacci series using a function.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

void fibonacci(int n) {

}

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "6",
      output: "0 1 1 2 3 5"
    },
    {
      input: "8",
      output: "0 1 1 2 3 5 8 13"
    }
  ]
}

],
  // arrays 
  "Arrays": [

{
  id: 1,
  title: "Array Input Output",
  statement: "Take N elements as input and print them.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 2 3 4 5",
      output: "1 2 3 4 5"
    },
    {
      input: "4\n10 20 30 40",
      output: "10 20 30 40"
    }
  ]
},

{
  id: 2,
  title: "Array Sum",
  statement: "Find the sum of all array elements.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 2 3 4 5",
      output: "15"
    },
    {
      input: "4\n10 20 30 40",
      output: "100"
    }
  ]
},

{
  id: 3,
  title: "Largest Element",
  statement: "Find the largest element in an array.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n2 8 1 10 4",
      output: "10"
    },
    {
      input: "6\n15 6 22 8 1 9",
      output: "22"
    }
  ]
},

{
  id: 4,
  title: "Smallest Element",
  statement: "Find the smallest element in an array.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n2 8 1 10 4",
      output: "1"
    },
    {
      input: "4\n9 5 12 3",
      output: "3"
    }
  ]
},

{
  id: 5,
  title: "Linear Search",
  statement: "Search an element in an array using linear search.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 2 3 4 5\n4",
      output: "Found"
    },
    {
      input: "5\n10 20 30 40 50\n15",
      output: "Not Found"
    }
  ]
},

{
  id: 6,
  title: "Reverse Array",
  statement: "Print the array in reverse order.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 2 3 4 5",
      output: "5 4 3 2 1"
    },
    {
      input: "4\n10 20 30 40",
      output: "40 30 20 10"
    }
  ]
},

{
  id: 7,
  title: "Second Largest Element",
  statement: "Find the second largest element in an array.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n10 5 20 8 15",
      output: "15"
    },
    {
      input: "6\n7 25 18 12 30 28",
      output: "28"
    }
  ]
},

{
  id: 8,
  title: "Sort Array (Ascending)",
  statement: "Sort the array in ascending order.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n5 2 4 1 3",
      output: "1 2 3 4 5"
    },
    {
      input: "4\n9 7 2 6",
      output: "2 6 7 9"
    }
  ]
},

{
  id: 9,
  title: "Frequency of Element",
  statement: "Find the frequency of a given element in an array.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 2 2 3 2\n2",
      output: "3"
    },
    {
      input: "6\n5 5 5 2 3 5\n5",
      output: "4"
    }
  ]
},

{
  id: 10,
  title: "Binary Search",
  statement: "Search an element using binary search.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 2 3 4 5\n4",
      output: "Found"
    },
    {
      input: "6\n10 20 30 40 50 60\n25",
      output: "Not Found"
    }
  ]
}

],
//pointers 
"Pointers": [

{
  id: 1,
  title: "Pointer Basics",
  statement: "Create a pointer and print the value and address of a variable.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "10",
      output: "Value: 10"
    },
    {
      input: "25",
      output: "Value: 25"
    }
  ]
},

{
  id: 2,
  title: "Dereference Pointer",
  statement: "Access the value of a variable using a pointer.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "25",
      output: "25"
    },
    {
      input: "100",
      output: "100"
    }
  ]
},

{
  id: 3,
  title: "Swap Using Pointers",
  statement: "Swap two numbers using pointers.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

void swap(int *a, int *b){

}

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "10 20",
      output: "20 10"
    },
    {
      input: "5 8",
      output: "8 5"
    }
  ]
},

{
  id: 4,
  title: "Pointer Arithmetic",
  statement: "Demonstrate pointer increment and decrement.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Array",
      output: "Pointer Increment"
    },
    {
      input: "Array",
      output: "Pointer Decrement"
    }
  ]
},

{
  id: 5,
  title: "Array Using Pointer",
  statement: "Print all array elements using a pointer.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 2 3 4 5",
      output: "1 2 3 4 5"
    },
    {
      input: "4\n10 20 30 40",
      output: "10 20 30 40"
    }
  ]
},

{
  id: 6,
  title: "Sum of Array Using Pointer",
  statement: "Find the sum of array elements using pointers.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 2 3 4 5",
      output: "15"
    },
    {
      input: "4\n10 20 30 40",
      output: "100"
    }
  ]
},

{
  id: 7,
  title: "Largest Element Using Pointer",
  statement: "Find the largest element in an array using pointers.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n3 7 2 9 1",
      output: "9"
    },
    {
      input: "4\n12 40 18 25",
      output: "40"
    }
  ]
},

{
  id: 8,
  title: "String Length Using Pointer",
  statement: "Find the length of a string using pointers.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Hello",
      output: "5"
    },
    {
      input: "Programming",
      output: "11"
    }
  ]
},

{
  id: 9,
  title: "Reverse String Using Pointer",
  statement: "Reverse a string using pointers.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "hello",
      output: "olleh"
    },
    {
      input: "world",
      output: "dlrow"
    }
  ]
},

{
  id: 10,
  title: "Call by Reference",
  statement: "Find the sum of two numbers using call by reference.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

void sum(int *a, int *b){

}

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "4 6",
      output: "10"
    },
    {
      input: "15 25",
      output: "40"
    }
  ]
}

],

//strings 
"Strings": [

{
  id: 1,
  title: "String Input Output",
  statement: "Take a string as input and print it.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Hello",
      output: "Hello"
    },
    {
      input: "Programming",
      output: "Programming"
    }
  ]
},

{
  id: 2,
  title: "String Length",
  statement: "Find the length of a string.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Hello",
      output: "5"
    },
    {
      input: "Programming",
      output: "11"
    }
  ]
},

{
  id: 3,
  title: "String Copy",
  statement: "Copy one string into another.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Hello",
      output: "Hello"
    },
    {
      input: "OpenAI",
      output: "OpenAI"
    }
  ]
},

{
  id: 4,
  title: "String Concatenation",
  statement: "Concatenate two strings.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Hello\nWorld",
      output: "HelloWorld"
    },
    {
      input: "Open\nAI",
      output: "OpenAI"
    }
  ]
},

{
  id: 5,
  title: "String Compare",
  statement: "Compare two strings.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "abc\nabc",
      output: "Equal"
    },
    {
      input: "abc\nxyz",
      output: "Not Equal"
    }
  ]
},

{
  id: 6,
  title: "Reverse String",
  statement: "Reverse a string.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "hello",
      output: "olleh"
    },
    {
      input: "coding",
      output: "gnidoc"
    }
  ]
},

{
  id: 7,
  title: "Palindrome String",
  statement: "Check whether a string is a palindrome.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "madam",
      output: "Palindrome"
    },
    {
      input: "hello",
      output: "Not Palindrome"
    }
  ]
},

{
  id: 8,
  title: "Count Vowels",
  statement: "Count the number of vowels in a string.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "education",
      output: "5"
    },
    {
      input: "computer",
      output: "3"
    }
  ]
},

{
  id: 9,
  title: "Count Words",
  statement: "Count the number of words in a sentence.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "I love coding",
      output: "3"
    },
    {
      input: "ChatGPT is amazing",
      output: "3"
    }
  ]
},

{
  id: 10,
  title: "Anagram Check",
  statement: "Check whether two strings are anagrams.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "listen\nsilent",
      output: "Anagram"
    },
    {
      input: "hello\nworld",
      output: "Not Anagram"
    }
  ]
}

],
//structures 
"Structures": [

{
  id: 1,
  title: "Basic Structure",
  statement: "Create a structure for a student and print the details.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "John 20",
      output: "John 20"
    },
    {
      input: "Alice 18",
      output: "Alice 18"
    }
  ]
},

{
  id: 2,
  title: "Employee Details",
  statement: "Store and display employee details using a structure.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "101 Ravi 25000",
      output: "101 Ravi 25000"
    },
    {
      input: "102 Priya 35000",
      output: "102 Priya 35000"
    }
  ]
},

{
  id: 3,
  title: "Student Marks",
  statement: "Calculate the total and average marks using a structure.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "80 90 70",
      output: "Total: 240\nAverage: 80"
    },
    {
      input: "60 70 80",
      output: "Total: 210\nAverage: 70"
    }
  ]
},

{
  id: 4,
  title: "Book Information",
  statement: "Store book name, author and price using a structure.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "CBook John 500",
      output: "CBook John 500"
    },
    {
      input: "DSA Mark 750",
      output: "DSA Mark 750"
    }
  ]
},

{
  id: 5,
  title: "Complex Number Addition",
  statement: "Add two complex numbers using structures.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "2 3\n4 5",
      output: "6 + 8i"
    },
    {
      input: "5 2\n3 7",
      output: "8 + 9i"
    }
  ]
},

{
  id: 6,
  title: "Array of Structures",
  statement: "Store and display details of multiple students.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "2\nRam 20\nSam 21",
      output: "Ram 20\nSam 21"
    },
    {
      input: "2\nAsha 18\nRavi 19",
      output: "Asha 18\nRavi 19"
    }
  ]
},

{
  id: 7,
  title: "Highest Marks",
  statement: "Find the student with the highest marks using structures.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "3\nRam 80\nSam 90\nRaj 85",
      output: "Sam"
    },
    {
      input: "2\nJohn 70\nAlice 95",
      output: "Alice"
    }
  ]
},

{
  id: 8,
  title: "Pointer to Structure",
  statement: "Access structure members using a pointer.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "101",
      output: "101"
    },
    {
      input: "205",
      output: "205"
    }
  ]
},

{
  id: 9,
  title: "Nested Structure",
  statement: "Create a nested structure and display its values.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Ravi Vizag",
      output: "Ravi Vizag"
    },
    {
      input: "Anu Hyderabad",
      output: "Anu Hyderabad"
    }
  ]
},

{
  id: 10,
  title: "Structure with Function",
  statement: "Pass a structure to a function and display its values.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Ravi 22",
      output: "Ravi 22"
    },
    {
      input: "Priya 21",
      output: "Priya 21"
    }
  ]
}

],
//sorting 
"Sorting Algorithms": [

{
  id: 1,
  title: "Bubble Sort",
  statement: "Sort an array using Bubble Sort.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n5 2 4 1 3",
      output: "1 2 3 4 5"
    },
    {
      input: "4\n9 7 2 6",
      output: "2 6 7 9"
    }
  ]
},

{
  id: 2,
  title: "Selection Sort",
  statement: "Sort an array using Selection Sort.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n64 25 12 22 11",
      output: "11 12 22 25 64"
    },
    {
      input: "4\n9 3 5 1",
      output: "1 3 5 9"
    }
  ]
},

{
  id: 3,
  title: "Insertion Sort",
  statement: "Sort an array using Insertion Sort.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n5 2 4 6 1",
      output: "1 2 4 5 6"
    },
    {
      input: "4\n8 3 7 2",
      output: "2 3 7 8"
    }
  ]
},

{
  id: 4,
  title: "Merge Sort",
  statement: "Sort an array using Merge Sort.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n38 27 43 3 9",
      output: "3 9 27 38 43"
    },
    {
      input: "4\n8 2 6 1",
      output: "1 2 6 8"
    }
  ]
},

{
  id: 5,
  title: "Quick Sort",
  statement: "Sort an array using Quick Sort.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n10 7 8 9 1",
      output: "1 7 8 9 10"
    },
    {
      input: "4\n5 2 9 1",
      output: "1 2 5 9"
    }
  ]
},

{
  id: 6,
  title: "Counting Sort",
  statement: "Sort an array using Counting Sort.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n4 2 2 8 3",
      output: "2 2 3 4 8"
    },
    {
      input: "5\n5 1 4 1 3",
      output: "1 1 3 4 5"
    }
  ]
},

{
  id: 7,
  title: "Radix Sort",
  statement: "Sort numbers using Radix Sort.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n170 45 75 90 802",
      output: "45 75 90 170 802"
    },
    {
      input: "5\n329 457 657 839 436",
      output: "329 436 457 657 839"
    }
  ]
},

{
  id: 8,
  title: "Bucket Sort",
  statement: "Sort an array using Bucket Sort.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n42 32 33 52 37",
      output: "32 33 37 42 52"
    },
    {
      input: "5\n29 25 3 49 9",
      output: "3 9 25 29 49"
    }
  ]
}

],
//searching 
"Searching": [

{
  id: 1,
  title: "Linear Search",
  statement: "Search an element in an array using Linear Search.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n10 20 30 40 50\n30",
      output: "Element found at position 3"
    },
    {
      input: "6\n5 12 18 25 40 50\n15",
      output: "Element not found"
    }
  ]
},

{
  id: 2,
  title: "Binary Search",
  statement: "Search an element in a sorted array using Binary Search.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n10 20 30 40 50\n40",
      output: "Element found at position 4"
    },
    {
      input: "6\n5 10 15 20 25 30\n18",
      output: "Element not found"
    }
  ]
}

],
//recursion 
"Recursion": [

{
  id: 1,
  title: "Print Numbers 1 to N",
  statement: "Print numbers from 1 to N using recursion.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

void printNumbers(int n){

}

int main(){

    return 0;

}`,
  testCases: [
    {
      input: "5",
      output: "1 2 3 4 5"
    },
    {
      input: "3",
      output: "1 2 3"
    }
  ]
},

{
  id: 2,
  title: "Print N to 1",
  statement: "Print numbers from N to 1 using recursion.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

void printReverse(int n){

}

int main(){

    return 0;

}`,
  testCases: [
    {
      input: "5",
      output: "5 4 3 2 1"
    },
    {
      input: "3",
      output: "3 2 1"
    }
  ]
},

{
  id: 3,
  title: "Factorial Using Recursion",
  statement: "Find factorial of a number using recursion.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int factorial(int n){

}

int main(){

    return 0;

}`,
  testCases: [
    {
      input: "5",
      output: "120"
    },
    {
      input: "6",
      output: "720"
    }
  ]
},

{
  id: 4,
  title: "Fibonacci Using Recursion",
  statement: "Print Fibonacci series using recursion.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int fibonacci(int n){

}

int main(){

    return 0;

}`,
  testCases: [
    {
      input: "6",
      output: "0 1 1 2 3 5"
    },
    {
      input: "8",
      output: "0 1 1 2 3 5 8 13"
    }
  ]
},

{
  id: 5,
  title: "Sum of N Numbers",
  statement: "Find the sum of first N natural numbers using recursion.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int sum(int n){

}

int main(){

    return 0;

}`,
  testCases: [
    {
      input: "5",
      output: "15"
    },
    {
      input: "10",
      output: "55"
    }
  ]
},

{
  id: 6,
  title: "Power Using Recursion",
  statement: "Find the power of a number using recursion.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int power(int a, int b){

}

int main(){

    return 0;

}`,
  testCases: [
    {
      input: "2 3",
      output: "8"
    },
    {
      input: "5 2",
      output: "25"
    }
  ]
},

{
  id: 7,
  title: "Reverse String Using Recursion",
  statement: "Reverse a string using recursion.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

void reverse(char str[], int start, int end){

}

int main(){

    return 0;

}`,
  testCases: [
    {
      input: "hello",
      output: "olleh"
    },
    {
      input: "coding",
      output: "gnidoc"
    }
  ]
},

{
  id: 8,
  title: "Palindrome String Using Recursion",
  statement: "Check whether a string is palindrome using recursion.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int palindrome(char str[], int start, int end){

}

int main(){

    return 0;

}`,
  testCases: [
    {
      input: "madam",
      output: "Palindrome"
    },
    {
      input: "hello",
      output: "Not Palindrome"
    }
  ]
},

{
  id: 9,
  title: "Tower of Hanoi",
  statement: "Solve Tower of Hanoi using recursion.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

void tower(int n, char source, char auxiliary, char destination){

}

int main(){

    return 0;

}`,
  testCases: [
    {
      input: "3",
      output: "7 Moves"
    },
    {
      input: "2",
      output: "3 Moves"
    }
  ]
},

{
  id: 10,
  title: "Linear Search Using Recursion",
  statement: "Search an element in an array using recursion.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int search(int arr[], int n, int key){

}

int main(){

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 2 3 4 5\n4",
      output: "Found"
    },
    {
      input: "5\n10 20 30 40 50\n15",
      output: "Not Found"
    }
  ]
}

],
//two pointer 
"Two Pointer": [

{
  id: 1,
  title: "Pair Sum",
  statement: "Find two numbers whose sum equals the target using the two-pointer technique.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 2 3 4 5\n6",
      output: "1 5"
    },
    {
      input: "6\n2 4 6 8 10 12\n18",
      output: "6 12"
    }
  ]
},

{
  id: 2,
  title: "Two Sum Sorted Array",
  statement: "Find the indices of two numbers in a sorted array whose sum equals the target.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n2 7 11 15 20\n22",
      output: "2 5"
    },
    {
      input: "4\n1 3 4 6\n7",
      output: "1 4"
    }
  ]
},

{
  id: 3,
  title: "Remove Duplicates",
  statement: "Remove duplicate elements from a sorted array.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "6\n1 1 2 2 3 3",
      output: "1 2 3"
    },
    {
      input: "7\n1 1 1 2 3 3 4",
      output: "1 2 3 4"
    }
  ]
},

{
  id: 4,
  title: "Move Zeroes",
  statement: "Move all zeroes to the end of the array while maintaining the order of non-zero elements.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n0 1 0 3 12",
      output: "1 3 12 0 0"
    },
    {
      input: "6\n1 0 2 0 3 4",
      output: "1 2 3 4 0 0"
    }
  ]
},

{
  id: 5,
  title: "Reverse Array",
  statement: "Reverse an array using the two-pointer technique.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 2 3 4 5",
      output: "5 4 3 2 1"
    },
    {
      input: "4\n10 20 30 40",
      output: "40 30 20 10"
    }
  ]
},

{
  id: 6,
  title: "Reverse String",
  statement: "Reverse a string using two pointers.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "hello",
      output: "olleh"
    },
    {
      input: "coding",
      output: "gnidoc"
    }
  ]
},

{
  id: 7,
  title: "Palindrome String",
  statement: "Check whether a string is a palindrome using two pointers.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "madam",
      output: "Palindrome"
    },
    {
      input: "hello",
      output: "Not Palindrome"
    }
  ]
},

{
  id: 8,
  title: "Container With Most Water",
  statement: "Find the maximum water that can be contained between two lines.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "8\n1 8 6 2 5 4 8 3",
      output: "49"
    },
    {
      input: "9\n1 8 6 2 5 4 8 3 7",
      output: "49"
    }
  ]
},

{
  id: 9,
  title: "Merge Two Sorted Arrays",
  statement: "Merge two sorted arrays using the two-pointer technique.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "1 3 5\n2 4 6",
      output: "1 2 3 4 5 6"
    },
    {
      input: "2 6 8\n1 5 9",
      output: "1 2 5 6 8 9"
    }
  ]
},

{
  id: 10,
  title: "Valid Palindrome",
  statement: "Check whether a string is a palindrome by ignoring spaces, punctuation, and letter case.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "A man a plan a canal Panama",
      output: "Palindrome"
    },
    {
      input: "OpenAI",
      output: "Not Palindrome"
    }
  ]
}

],
//sliding window 
"Sliding Window": [

{
  id: 1,
  title: "Maximum Sum Subarray",
  statement: "Find the maximum sum of a subarray of size K.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n2 1 5 1 3\n3",
      output: "9"
    },
    {
      input: "6\n1 4 2 10 2 3\n3",
      output: "16"
    }
  ]
},

{
  id: 2,
  title: "Average of Subarrays",
  statement: "Find the average of every subarray of size K.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 3 2 6 4\n2",
      output: "2 2.5 4 5"
    },
    {
      input: "6\n2 4 6 8 10 12\n3",
      output: "4 6 8 10"
    }
  ]
},

{
  id: 3,
  title: "Smallest Subarray Sum",
  statement: "Find the length of the smallest subarray whose sum is greater than or equal to the target.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "6\n2 1 5 2 3 2\n7",
      output: "2"
    },
    {
      input: "5\n1 2 3 4 5\n11",
      output: "3"
    }
  ]
},

{
  id: 4,
  title: "Longest Substring Without Repeating Characters",
  statement: "Find the length of the longest substring without repeating characters.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "abcabcbb",
      output: "3"
    },
    {
      input: "bbbbb",
      output: "1"
    }
  ]
},

{
  id: 5,
  title: "First Negative Number in Every Window",
  statement: "Find the first negative number in every window of size K.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "8\n12 -1 -7 8 -15 30 16 28\n3",
      output: "-1 -1 -7 -15 -15 0"
    },
    {
      input: "5\n-5 2 3 -2 6\n2",
      output: "-5 0 -2 -2"
    }
  ]
},

{
  id: 6,
  title: "Count Distinct Elements",
  statement: "Count distinct elements in every window of size K.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "7\n1 2 1 3 4 2 3\n4",
      output: "3 4 4 3"
    },
    {
      input: "5\n1 1 2 2 3\n3",
      output: "2 2 2"
    }
  ]
},

{
  id: 7,
  title: "Sliding Window Maximum",
  statement: "Find the maximum element in every window of size K.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "8\n1 3 -1 -3 5 3 6 7\n3",
      output: "3 3 5 5 6 7"
    },
    {
      input: "6\n2 1 4 5 3 4\n2",
      output: "2 4 5 5 4"
    }
  ]
},

{
  id: 8,
  title: "Longest Subarray With Sum K",
  statement: "Find the longest subarray whose sum equals K.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 2 1 0 1\n4",
      output: "4"
    },
    {
      input: "6\n2 3 1 2 4 3\n7",
      output: "3"
    }
  ]
},

{
  id: 9,
  title: "Minimum Window Substring",
  statement: "Find the minimum substring containing all characters of another string.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "ADOBECODEBANC\nABC",
      output: "BANC"
    },
    {
      input: "a\nab",
      output: "No Window"
    }
  ]
},

{
  id: 10,
  title: "Maximum Vowels in a Substring",
  statement: "Find the maximum number of vowels in any substring of size K.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "abciiidef\n3",
      output: "3"
    },
    {
      input: "aeiou\n2",
      output: "2"
    }
  ]
}

],
//divide and conquer 
"Divide and Conquer": [

{
  id: 1,
  title: "Merge Sort",
  statement: "Sort an array using Merge Sort.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n38 27 43 3 9",
      output: "3 9 27 38 43"
    },
    {
      input: "4\n8 2 6 1",
      output: "1 2 6 8"
    }
  ]
},

{
  id: 2,
  title: "Quick Sort",
  statement: "Sort an array using Quick Sort.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n10 7 8 9 1",
      output: "1 7 8 9 10"
    },
    {
      input: "5\n5 4 3 2 1",
      output: "1 2 3 4 5"
    }
  ]
},

{
  id: 3,
  title: "Binary Search",
  statement: "Find an element in a sorted array using Binary Search.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n10 20 30 40 50\n40",
      output: "Found at position 4"
    },
    {
      input: "6\n5 10 15 20 25 30\n12",
      output: "Element not found"
    }
  ]
},

{
  id: 4,
  title: "Maximum Element",
  statement: "Find the maximum element in an array using Divide and Conquer.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 9 3 7 5",
      output: "9"
    },
    {
      input: "6\n15 22 8 3 40 12",
      output: "40"
    }
  ]
},

{
  id: 5,
  title: "Array Sum",
  statement: "Find the sum of array elements using Divide and Conquer.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 2 3 4 5",
      output: "15"
    },
    {
      input: "4\n10 20 30 40",
      output: "100"
    }
  ]
},

{
  id: 6,
  title: "Power Calculation",
  statement: "Calculate the power of a number using fast exponentiation.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "2 10",
      output: "1024"
    },
    {
      input: "3 4",
      output: "81"
    }
  ]
},

{
  id: 7,
  title: "Count Inversions",
  statement: "Count inversions in an array using Merge Sort.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n2 4 1 3 5",
      output: "3"
    },
    {
      input: "5\n5 4 3 2 1",
      output: "10"
    }
  ]
},

{
  id: 8,
  title: "Maximum Subarray Sum",
  statement: "Find the maximum subarray sum using Divide and Conquer.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "8\n-2 -3 4 -1 -2 1 5 -3",
      output: "7"
    },
    {
      input: "5\n1 2 3 -2 5",
      output: "9"
    }
  ]
},

{
  id: 9,
  title: "Search in Rotated Sorted Array",
  statement: "Search an element in a rotated sorted array.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "7\n4 5 6 7 0 1 2\n0",
      output: "Found at position 5"
    },
    {
      input: "6\n6 7 1 2 3 4\n5",
      output: "Element not found"
    }
  ]
},

{
  id: 10,
  title: "Floor Square Root",
  statement: "Find the floor square root of a number using Binary Search.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "17",
      output: "4"
    },
    {
      input: "81",
      output: "9"
    }
  ]
}

],
//hashing 
"Hashing": [

{
  id: 1,
  title: "Frequency Count",
  statement: "Count the frequency of elements in an array using hashing.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 2 2 3 1",
      output: "1->2 2->2 3->1"
    },
    {
      input: "6\n4 4 4 2 2 1",
      output: "1->1 2->2 4->3"
    }
  ]
},

{
  id: 2,
  title: "Character Frequency",
  statement: "Count the frequency of characters in a string using hashing.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "hello",
      output: "h->1 e->1 l->2 o->1"
    },
    {
      input: "banana",
      output: "b->1 a->3 n->2"
    }
  ]
},

{
  id: 3,
  title: "Two Sum",
  statement: "Find two numbers whose sum equals the target using hashing.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n2 7 11 15 3\n9",
      output: "2 7"
    },
    {
      input: "6\n1 4 5 8 10 12\n13",
      output: "1 12"
    }
  ]
},

{
  id: 4,
  title: "First Non-Repeating Element",
  statement: "Find the first non-repeating element in an array.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "6\n4 5 1 2 0 4",
      output: "5"
    },
    {
      input: "5\n2 2 3 4 3",
      output: "4"
    }
  ]
},

{
  id: 5,
  title: "Duplicate Elements",
  statement: "Find duplicate elements in an array using hashing.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 2 2 3 3",
      output: "2 3"
    },
    {
      input: "6\n4 5 4 6 7 6",
      output: "4 6"
    }
  ]
},

{
  id: 6,
  title: "Union of Two Arrays",
  statement: "Find the union of two arrays using hashing.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "1 2 3\n2 3 4",
      output: "1 2 3 4"
    },
    {
      input: "5 6\n6 7 8",
      output: "5 6 7 8"
    }
  ]
},

{
  id: 7,
  title: "Intersection of Two Arrays",
  statement: "Find the common elements of two arrays using hashing.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "1 2 3 4\n3 4 5",
      output: "3 4"
    },
    {
      input: "2 4 6\n1 2 6",
      output: "2 6"
    }
  ]
},

{
  id: 8,
  title: "Check Anagram",
  statement: "Check whether two strings are anagrams using hashing.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "listen\nsilent",
      output: "True"
    },
    {
      input: "hello\nworld",
      output: "False"
    }
  ]
},

{
  id: 9,
  title: "Longest Consecutive Sequence",
  statement: "Find the length of the longest consecutive sequence using hashing.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "6\n100 4 200 1 3 2",
      output: "4"
    },
    {
      input: "5\n10 11 12 15 16",
      output: "3"
    }
  ]
},

{
  id: 10,
  title: "Subarray Sum Equals K",
  statement: "Count the number of subarrays whose sum equals K using hashing.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "5\n1 1 1 2 1\n2",
      output: "3"
    },
    {
      input: "5\n2 3 1 2 4\n5",
      output: "2"
    }
  ]
}

],
//tree
"Tree Algorithms": [

{
  id: 1,
  title: "Preorder Traversal",
  statement: "Perform preorder traversal of a binary tree.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "1 2 3 4 5",
      output: "1 2 4 5 3"
    },
    {
      input: "1 2 3",
      output: "1 2 3"
    }
  ]
},

{
  id: 2,
  title: "Inorder Traversal",
  statement: "Perform inorder traversal of a binary tree.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "1 2 3 4 5",
      output: "4 2 5 1 3"
    },
    {
      input: "1 2 3",
      output: "2 1 3"
    }
  ]
},

{
  id: 3,
  title: "Postorder Traversal",
  statement: "Perform postorder traversal of a binary tree.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "1 2 3 4 5",
      output: "4 5 2 3 1"
    },
    {
      input: "1 2 3",
      output: "2 3 1"
    }
  ]
},

{
  id: 4,
  title: "Level Order Traversal",
  statement: "Perform level order traversal of a binary tree.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "1 2 3 4 5",
      output: "1 2 3 4 5"
    },
    {
      input: "1 2 3",
      output: "1 2 3"
    }
  ]
},

{
  id: 5,
  title: "Tree Height",
  statement: "Find the height of a binary tree.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Binary Tree",
      output: "3"
    },
    {
      input: "Single Node",
      output: "1"
    }
  ]
},

{
  id: 6,
  title: "Count Leaf Nodes",
  statement: "Count the number of leaf nodes in a binary tree.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Binary Tree",
      output: "3"
    },
    {
      input: "Single Node",
      output: "1"
    }
  ]
},

{
  id: 7,
  title: "Search in BST",
  statement: "Search for a value in a Binary Search Tree.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "BST\n40",
      output: "Found"
    },
    {
      input: "BST\n100",
      output: "Not Found"
    }
  ]
},

{
  id: 8,
  title: "Insert in BST",
  statement: "Insert a node into a Binary Search Tree.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "BST\n25",
      output: "Inserted"
    },
    {
      input: "BST\n60",
      output: "Inserted"
    }
  ]
},

{
  id: 9,
  title: "Lowest Common Ancestor",
  statement: "Find the Lowest Common Ancestor (LCA) of two nodes in a binary tree.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Tree\n4 5",
      output: "2"
    },
    {
      input: "Tree\n4 6",
      output: "1"
    }
  ]
},

{
  id: 10,
  title: "Diameter of Binary Tree",
  statement: "Find the diameter of a binary tree.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Binary Tree",
      output: "4"
    },
    {
      input: "Single Node",
      output: "0"
    }
  ]
}

],
//graph 
"Graph Algorithms": [

{
  id: 1,
  title: "Graph Representation",
  statement: "Represent a graph using an adjacency matrix.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "4 vertices\n0 1\n0 2\n1 3",
      output: "Adjacency Matrix"
    },
    {
      input: "3 vertices\n0 1\n1 2",
      output: "Adjacency Matrix"
    }
  ]
},

{
  id: 2,
  title: "DFS Traversal",
  statement: "Perform Depth First Search (DFS) traversal of a graph.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Graph",
      output: "0 1 2 3"
    },
    {
      input: "Graph",
      output: "0 2 1 3"
    }
  ]
},

{
  id: 3,
  title: "BFS Traversal",
  statement: "Perform Breadth First Search (BFS) traversal of a graph.",
  difficulty: "Easy",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Graph",
      output: "0 1 2 3"
    },
    {
      input: "Graph",
      output: "0 2 1 3"
    }
  ]
},

{
  id: 4,
  title: "Connected Components",
  statement: "Find the number of connected components in an undirected graph.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Graph",
      output: "2"
    },
    {
      input: "Graph",
      output: "3"
    }
  ]
},

{
  id: 5,
  title: "Cycle Detection in Undirected Graph",
  statement: "Detect whether an undirected graph contains a cycle.",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Graph",
      output: "Cycle Found"
    },
    {
      input: "Graph",
      output: "No Cycle"
    }
  ]
},

{
  id: 6,
  title: "Topological Sort",
  statement: "Perform topological sorting on a Directed Acyclic Graph (DAG).",
  difficulty: "Medium",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "DAG",
      output: "5 4 2 3 1 0"
    },
    {
      input: "DAG",
      output: "4 5 2 0 3 1"
    }
  ]
},

{
  id: 7,
  title: "Dijkstra Algorithm",
  statement: "Find the shortest path from a source vertex using Dijkstra's Algorithm.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Weighted Graph",
      output: "Shortest Distances"
    },
    {
      input: "Weighted Graph",
      output: "Shortest Distances"
    }
  ]
},

{
  id: 8,
  title: "Minimum Spanning Tree (Prim's Algorithm)",
  statement: "Find the Minimum Spanning Tree using Prim's Algorithm.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Weighted Graph",
      output: "MST Weight"
    },
    {
      input: "Weighted Graph",
      output: "Minimum Cost"
    }
  ]
},

{
  id: 9,
  title: "Minimum Spanning Tree (Kruskal's Algorithm)",
  statement: "Find the Minimum Spanning Tree using Kruskal's Algorithm.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Weighted Graph",
      output: "MST Weight"
    },
    {
      input: "Weighted Graph",
      output: "Minimum Cost"
    }
  ]
},

{
  id: 10,
  title: "Bipartite Graph Check",
  statement: "Check whether a graph is bipartite using BFS or DFS.",
  difficulty: "Hard",
  starterCode: `#include <stdio.h>

int main() {

    return 0;

}`,
  testCases: [
    {
      input: "Graph",
      output: "Bipartite"
    },
    {
      input: "Graph",
      output: "Not Bipartite"
    }
  ]
}

],
};
export default questions;