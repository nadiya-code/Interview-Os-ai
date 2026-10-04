import { Link, useParams } from "react-router-dom";

import DsaQuestions from "../../../model/DsaQuestions";

function DsaQuestion() {
  const { topic, questionId } = useParams();

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
    <div className="mx-auto max-w-5xl">
      {/* Back */}
      <Link
        to={`/dashboard/dsa/${topic}`}
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        ← Back to {question.topic}
      </Link>

      {/* Header */}
      <div className="mt-6">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold text-slate-900">
            {question.title}
          </h1>

          <span
            className={`
              rounded-full
              px-3 py-1
              text-xs
              font-medium
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

        <div className="mt-3 flex flex-wrap gap-2">
          {question.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-md
                bg-slate-100
                px-2 py-1
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

      {/* Problem */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          Problem
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          {question.description}
        </p>
      </div>

      {/* AI Solver */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            AI Guided Solver
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Get guided help instead of immediately seeing the
            solution. Understand the problem, get hints, build
            an approach, and then write your code.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button
            className="
              rounded-xl
              border border-slate-200
              bg-slate-50
              p-4
              text-left
              transition
              hover:border-blue-300
              hover:bg-blue-50
            "
          >
            <p className="font-semibold text-slate-900">
              1. Understand
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Understand what the problem is asking.
            </p>
          </button>

          <button
            className="
              rounded-xl
              border border-slate-200
              bg-slate-50
              p-4
              text-left
              transition
              hover:border-blue-300
              hover:bg-blue-50
            "
          >
            <p className="font-semibold text-slate-900">
              2. Hint
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Get a small hint without revealing the answer.
            </p>
          </button>

          <button
            className="
              rounded-xl
              border border-slate-200
              bg-slate-50
              p-4
              text-left
              transition
              hover:border-blue-300
              hover:bg-blue-50
            "
          >
            <p className="font-semibold text-slate-900">
              3. Approach
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Learn how to think about the solution.
            </p>
          </button>

          <button
            className="
              rounded-xl
              border border-slate-200
              bg-slate-50
              p-4
              text-left
              transition
              hover:border-blue-300
              hover:bg-blue-50
            "
          >
            <p className="font-semibold text-slate-900">
              4. Write Code
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Write and test your own solution.
            </p>
          </button>
        </div>
      </div>

      {/* Mark Solved */}
      <div className="mt-6 flex justify-end">
        <button
          className="
            rounded-lg
            bg-green-600
            px-5 py-3
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