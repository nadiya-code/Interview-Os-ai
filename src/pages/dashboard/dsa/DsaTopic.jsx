import { ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import DsaTopics from "../../../model/Dsa";
import DsaQuestions from "../../../model/DsaQuestions";
import leetcodeLogo from "../../../assets/leetcode.png";

function DsaTopic() {
  const { topic } = useParams();

  // Find current topic
  const currentTopic = DsaTopics.find(
    (item) => item.slug === topic
  );

  // Find questions belonging to this topic
  const questions = DsaQuestions.filter(
    (question) => question.topic === topic
  );

  // If topic does not exist
  if (!currentTopic) {
    return (
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold text-slate-900">
          Topic not found
        </h1>

        <Link
          to="/dashboard/dsa"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          ← Back to DSA
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">

      {/* ================= HEADER ================= */}
      <div className="mb-8">
        <Link
          to="/dashboard/dsa"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to DSA
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          {currentTopic.title}
        </h1>

        <p className="mt-2 text-slate-500">
          {currentTopic.description}
        </p>
      </div>

      {/* ================= PROGRESS ================= */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Your Progress
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              0 of {questions.length} problems solved
            </p>
          </div>

          <span className="text-2xl font-bold text-blue-950">
            0%
          </span>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-0 rounded-full bg-blue-950" />
        </div>
      </div>

      {/* ================= PROBLEMS ================= */}
      <div className="mt-8">

        {/* Problems heading */}
        <div className="mb-5 flex items-center justify-between">

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Practice Problems
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Solve problems and improve your DSA skills.
            </p>
          </div>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
            {questions.length} Problems
          </span>
        </div>

        {/* ================= NO QUESTIONS ================= */}
        {questions.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">

            <h3 className="text-lg font-semibold text-slate-900">
              No problems available yet
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Problems for {currentTopic.title} will be added soon.
            </p>

          </div>
        ) : (

          /* ================= QUESTION LIST ================= */
          <div className="space-y-4">

            {questions.map((question, index) => (
              <div
                key={question.id}
                className="
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition
                  hover:-translate-y-0.5
                  hover:shadow-md
                "
              >

                <div className="flex flex-col gap-5">

                  {/* ================= QUESTION INFO ================= */}
                  <div className="flex gap-4">

                    {/* Question number */}
                    <div
                      className="
                        flex h-10 w-10 shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-blue-50
                        text-sm font-bold
                        text-blue-950
                      "
                    >
                      {index + 1}
                    </div>

                    {/* Question details */}
                    <div className="min-w-0 flex-1">

                      {/* Title + Difficulty */}
                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="text-lg font-semibold text-slate-900">
                          {question.title}
                        </h3>

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

                      {/* Description */}
                      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                        {question.description}
                      </p>

                      {/* ================= TAGS ================= */}
                      <div className="mt-4">

                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Topics
                        </p>

                        <div className="flex flex-wrap gap-2">

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

                      {/* ================= PATTERNS ================= */}
                      {question.patterns?.length > 0 && (
                        <div className="mt-4">

                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Patterns
                          </p>

                          <div className="flex flex-wrap gap-2">

                            {question.patterns.map((pattern) => (
                              <span
                                key={pattern}
                                className="
                                  rounded-md
                                  bg-blue-50
                                  px-2.5 py-1
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

                    </div>
                  </div>

                  {/* ================= ACTION BUTTONS ================= */}
                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      justify-end
                      gap-3
                      border-t
                      border-slate-100
                      pt-4
                    "
                  >

                    {/* ================= LEETCODE BUTTON ================= */}
                    {question.leetcode?.available && (
                      <a
                        href={question.leetcode.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          border
                          border-slate-300
                          bg-white
                          px-5 py-2.5
                          text-sm
                          font-semibold
                          text-slate-700
                          transition
                          hover:border-orange-300
                          hover:bg-orange-50
                        "
                      >

                        {/* LeetCode Logo Container */}
                        <span
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-md
                            bg-white
                            overflow-hidden
                          "
                        >
                          <img
                            src={leetcodeLogo}
                            alt="LeetCode"
                            className="
                              h-10
                              w-10
                              object-contain
                              mix-blend-multiply
                              brightness-110
                            "
                          />
                        </span>

                        <span>
                          LeetCode
                        </span>

                        <ExternalLink size={15} />

                      </a>
                    )}

                    {/* ================= SOLVE BUTTON ================= */}
                    <Link
                      to={`/dashboard/dsa/${topic}/${question.id}`}
                      className="
                        inline-flex
                        items-center
                        rounded-lg
                        bg-blue-950
                        px-5 py-2.5
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-blue-900
                      "
                    >
                      Solve →
                    </Link>

                  </div>
                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default DsaTopic;