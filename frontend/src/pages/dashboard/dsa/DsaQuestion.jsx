import Editor from "@monaco-editor/react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DsaQuestions from "../../../model/DsaQuestions";

function DsaQuestion() {
  const { topic, questionId } = useParams();
  const [code, setCode] = useState("");
  const question = DsaQuestions.find(
    (item) =>
      item.id === questionId &&
      item.topic === topic
  );

  // Question not found
  if (!question) {
    return (
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold text-slate-900">
          Question not found
        </h1>

        <Link
          to={`/dashboard/dsa/${topic}`}
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          ← Back to Topic
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl pb-10">

      {/* Back */}
      <Link
        to={`/dashboard/dsa/${topic}`}
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        ← Back to {question.topic}
      </Link>

      {/* Question Header */}
      <div className="mt-6">

        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold text-slate-900">
            {question.title}
          </h1>

          {/* Difficulty */}
          <span
            className={`
              rounded-full
              px-3 py-1
              text-xs
              font-semibold
              ${
                question.difficulty === "Easy"
                  ? "bg-green-50 text-green-700"
                  : question.difficulty === "Medium"
                  ? "bg-yellow-50 text-yellow-700"
                  : "bg-red-50 text-red-700"
              }
            `}
          >
            {question.difficulty}
          </span>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {question.tags?.map((tag) => (
            <span
              key={tag}
              className="
                rounded-md
                bg-slate-100
                px-2.5
                py-1
                text-xs
                font-medium
                text-slate-600
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ================================================= */}
      {/* PROBLEM */}
      {/* ================================================= */}

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-xl font-bold text-slate-900">
          Problem
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          {question.description}
        </p>

        {/* Examples */}
        {question.examples?.length > 0 && (
          <div className="mt-8">

            <h3 className="text-lg font-semibold text-slate-900">
              Examples
            </h3>

            <div className="mt-4 space-y-5">

              {question.examples.map((example, index) => (
                <div
                  key={index}
                  className="
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-4
                  "
                >

                  <p className="font-semibold text-slate-800">
                    Example {index + 1}
                  </p>

                  {/* Input */}
                  <div className="mt-3">
                    <p className="text-sm font-medium text-slate-500">
                      Input
                    </p>

                    <pre
                      className="
                        mt-1
                        overflow-x-auto
                        rounded-lg
                        bg-slate-900
                        p-3
                        text-sm
                        text-slate-100
                      "
                    >
                      {example.input}
                    </pre>
                  </div>

                  {/* Output */}
                  <div className="mt-3">
                    <p className="text-sm font-medium text-slate-500">
                      Output
                    </p>

                    <pre
                      className="
                        mt-1
                        overflow-x-auto
                        rounded-lg
                        bg-slate-900
                        p-3
                        text-sm
                        text-slate-100
                      "
                    >
                      {example.output}
                    </pre>
                  </div>

                  {/* Explanation */}
                  {example.explanation && (
                    <div className="mt-3">
                      <p className="text-sm font-medium text-slate-500">
                        Explanation
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {example.explanation}
                      </p>
                    </div>
                  )}

                </div>
              ))}

            </div>
          </div>
        )}

        {/* Constraints */}
        {question.constraints?.length > 0 && (
          <div className="mt-8">

            <h3 className="text-lg font-semibold text-slate-900">
              Constraints
            </h3>

            <ul className="mt-3 space-y-2">
              {question.constraints.map((constraint, index) => (
                <li
                  key={index}
                  className="
                    flex
                    gap-2
                    text-sm
                    leading-6
                    text-slate-600
                  "
                >
                  <span className="text-slate-400">
                    •
                  </span>

                  <span>
                    {constraint}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        )}

        {/* Patterns */}
        {question.patterns?.length > 0 && (
          <div className="mt-8">

            <h3 className="text-lg font-semibold text-slate-900">
              Patterns
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {question.patterns.map((pattern) => (
                <span
                  key={pattern}
                  className="
                    rounded-md
                    bg-blue-50
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-blue-700
                  "
                >
                  {pattern}
                </span>
              ))}
            </div>

          </div>
        )}

      </section>

      {/* ================================================= */}
      {/* CODE EDITOR PLACEHOLDER */}
      {/* ================================================= */}

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Code
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Write your solution here.
            </p>
          </div>

          <span
            className="
              rounded-lg
              bg-slate-100
              px-3
              py-1.5
              text-xs
              font-medium
              text-slate-600
            "
          >
            C++
          </span>
        </div>

        {/* Temporary editor area */}
        <div
          className="
            mt-5
            min-h-[350px]
            rounded-xl
            bg-slate-950
            p-5
            font-mono
            text-sm
            text-slate-300
          "
        >
          <pre className="whitespace-pre-wrap">
            {question.starterCode?.cpp}
          </pre>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-end gap-3">

          <button
            className="
              rounded-lg
              border
              border-slate-300
              bg-white
              px-5
              py-2.5
              text-sm
              font-semibold
              text-slate-700
              transition
              hover:bg-slate-50
            "
          >
            Run
          </button>

          <button
            className="
              rounded-lg
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Submit
          </button>

        </div>

      </section>

      {/* ================================================= */}
      {/* TEST CASES */}
      {/* ================================================= */}

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-xl font-bold text-slate-900">
          Test Cases
        </h2>

        <div className="mt-5 space-y-4">

          {question.testCases?.map((testCase, index) => (
            <div
              key={index}
              className="
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                p-4
              "
            >

              <p className="font-semibold text-slate-800">
                Test Case {index + 1}
              </p>

              <div className="mt-3 grid gap-4 md:grid-cols-2">

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Input
                  </p>

                  <pre
                    className="
                      mt-1
                      overflow-x-auto
                      rounded-lg
                      bg-slate-900
                      p-3
                      text-sm
                      text-slate-100
                    "
                  >
                    {testCase.input}
                  </pre>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Expected Output
                  </p>

                  <pre
                    className="
                      mt-1
                      overflow-x-auto
                      rounded-lg
                      bg-slate-900
                      p-3
                      text-sm
                      text-slate-100
                    "
                  >
                    {testCase.expectedOutput}
                  </pre>
                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ================================================= */}
      {/* AI GUIDED SOLVER */}
      {/* ================================================= */}

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="text-xl font-bold text-slate-900">
          AI Guided Solver
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Get guided help instead of immediately seeing the
          solution. Understand the problem, get hints, build
          an approach, and then write your code.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <button className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-blue-300 hover:bg-blue-50">
            <p className="font-semibold text-slate-900">
              1. Understand
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Understand what the problem is asking.
            </p>
          </button>

          <button className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-blue-300 hover:bg-blue-50">
            <p className="font-semibold text-slate-900">
              2. Hint
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Get a small hint without revealing the answer.
            </p>
          </button>

          <button className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-blue-300 hover:bg-blue-50">
            <p className="font-semibold text-slate-900">
              3. Approach
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Learn how to think about the solution.
            </p>
          </button>

          <button className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-blue-300 hover:bg-blue-50">
            <p className="font-semibold text-slate-900">
              4. Solution
            </p>

            <p className="mt-1 text-xs text-slate-500">
              View the complete solution after trying.
            </p>
          </button>

        </div>

      </section>

      {/* Mark Solved */}

      <div className="mt-6 flex justify-end">

        <button
          className="
            rounded-lg
            bg-green-600
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-green-700
          "
        >
          ✓ Mark as Solved
        </button>

      </div>

    </div>
  );
}

export default DsaQuestion;
