import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  CirclePlay,
  Code2,
  ExternalLink,
  Lightbulb,
  Send,
  Terminal,
} from "lucide-react";

import DsaQuestions from "../../../model/DsaQuestions";

function DsaQuestion() {
  const { topic, questionId } = useParams();

  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [executionError, setExecutionError] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const question = DsaQuestions.find(
    (item) =>
      item.id === questionId &&
      item.topic === topic
  );

  useEffect(() => {
    if (question) {
      setCode(question.starterCode?.cpp || "");
      setInput("");
      setOutput("");
      setExecutionError("");
    }
  }, [question]);

  // ================= RUN CODE =================

  const handleRunCode = async () => {
    if (!code.trim()) {
      setExecutionError("Please write some code first.");
      return;
    }

    try {
      setIsRunning(true);
      setOutput("");
      setExecutionError("");

      const response = await fetch(
        "http://localhost:3001/api/code/run",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sourceCode: code,
            input: input,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          typeof data.error === "string"
            ? data.error
            : data.message || "Code execution failed."
        );
      }

      if (data.status === "Compilation Error") {
        setExecutionError(
          data.compileOutput || "Compilation failed."
        );
        return;
      }

      setOutput(data.output || "");

      if (data.error) {
        setExecutionError(data.error);
      }

      if (
        data.status !== "Accepted" &&
        !data.output &&
        !data.error
      ) {
        setExecutionError(
          `Execution status: ${data.status}`
        );
      }
    } catch (error) {
      setExecutionError(
        error.message || "Something went wrong."
      );
    } finally {
      setIsRunning(false);
    }
  };

  if (!question) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
            <Code2 className="text-red-500" size={26} />
          </div>

          <h1 className="mt-5 text-2xl font-bold text-slate-900">
            Question not found
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            The question you are looking for does not exist.
          </p>

          <Link
            to={`/dashboard/dsa/${topic}`}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={16} />
            Back to Questions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ================= TOP HEADER ================= */}

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">
              <Link
                to={`/dashboard/dsa/${topic}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-100"
              >
                <ArrowLeft size={18} />
              </Link>

              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>DSA</span>
                  <ChevronRight size={13} />
                  <span className="capitalize">
                    {topic?.replaceAll("-", " ")}
                  </span>
                </div>

                <h1 className="mt-1 text-lg font-bold text-slate-900">
                  {question.title}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  question.difficulty === "Easy"
                    ? "bg-green-50 text-green-700"
                    : question.difficulty === "Medium"
                    ? "bg-yellow-50 text-yellow-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {question.difficulty}
              </span>

              {question.leetcode?.available && (
                <a
                  href={question.leetcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-orange-50 hover:text-orange-600"
                >
                  LeetCode
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}

      <main className="mx-auto max-w-[1600px] px-5 py-5">
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[0.95fr_1.05fr]">

          {/* ================= LEFT SIDE - PROBLEM ================= */}

          <section className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              {/* Problem Header */}

              <div className="border-b border-slate-200 px-6 py-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                    <Code2 size={19} className="text-blue-600" />
                  </div>

                  <h2 className="text-lg font-bold text-slate-900">
                    Problem
                  </h2>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {question.description}
                </p>

                {question.tags?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {question.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Examples */}

              <div className="border-b border-slate-200 px-6 py-5">
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">
                  Examples
                </h3>

                <div className="mt-4 space-y-4">
                  {question.examples?.map((example, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-xl border border-slate-200"
                    >
                      <div className="border-b border-slate-200 bg-slate-50 px-4 py-2.5">
                        <span className="text-xs font-semibold text-slate-500">
                          Example {index + 1}
                        </span>
                      </div>

                      <div className="p-4">
                        <div>
                          <p className="text-xs font-semibold text-slate-500">
                            Input
                          </p>

                          <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-3 text-sm text-slate-100">
                            {example.input}
                          </pre>
                        </div>

                        <div className="mt-3">
                          <p className="text-xs font-semibold text-slate-500">
                            Output
                          </p>

                          <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-3 text-sm text-slate-100">
                            {example.output}
                          </pre>
                        </div>

                        {example.explanation && (
                          <div className="mt-4">
                            <p className="text-xs font-semibold text-slate-500">
                              Explanation
                            </p>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              {example.explanation}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Constraints */}

              <div className="border-b border-slate-200 px-6 py-5">
                <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">
                  Constraints
                </h3>

                <ul className="mt-4 space-y-2">
                  {question.constraints?.map((constraint, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span>{constraint}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Patterns */}

              {question.patterns?.length > 0 && (
                <div className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <Lightbulb size={18} className="text-yellow-500" />

                    <h3 className="text-sm font-bold text-slate-800">
                      Patterns
                    </h3>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {question.patterns.map((pattern, index) => (
                      <span
                        key={index}
                        className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700"
                      >
                        {pattern}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </section>

          {/* ================= RIGHT SIDE - CODE ================= */}

          <section className="min-w-0">
            <div className="sticky top-5">

              <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-lg">

                {/* Editor Header */}

                <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10">
                      <Code2 size={17} className="text-blue-400" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Code Editor
                      </p>

                      <p className="text-xs text-slate-400">
                        Write your solution
                      </p>
                    </div>
                  </div>

                  <div className="rounded-md border border-slate-600 bg-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-200">
                    C++
                  </div>
                </div>

                {/* Monaco Editor */}

                <Editor
                  height="500px"
                  language="cpp"
                  theme="vs-dark"
                  value={code}
                  onChange={(value) => setCode(value ?? "")}
                  options={{
                    fontSize: 14,
                    minimap: {
                      enabled: false,
                    },
                    automaticLayout: true,
                    scrollBeyondLastLine: false,
                    padding: {
                      top: 18,
                      bottom: 18,
                    },
                    lineNumbers: "on",
                    roundedSelection: false,
                    cursorBlinking: "smooth",
                    smoothScrolling: true,
                    tabSize: 4,
                  }}
                />

                {/* Editor Footer */}

                <div className="border-t border-slate-700 bg-slate-800 px-4 py-3">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Terminal size={14} />
                      <span>C++</span>
                      <span>•</span>
                      <span>Monaco Editor</span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={handleRunCode}
                        disabled={isRunning}
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <CirclePlay size={16} />
                        {isRunning ? "Running..." : "Run"}
                      </button>

                      <button
                        disabled
                        title="Submission feature is coming soon"
                        className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white opacity-60 cursor-not-allowed"
                      >
                        <Send size={16} />
                        Submit
                      </button>
                    </div>

                  </div>
                </div>

              </div>

              {/* ================= CUSTOM INPUT ================= */}

              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <Terminal size={18} className="text-slate-700" />

                    <h2 className="text-sm font-bold text-slate-900">
                      Custom Input
                    </h2>
                  </div>

                  <p className="mt-1 text-xs text-slate-500">
                    Enter input for your C++ program.
                  </p>
                </div>

                <div className="p-5">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Example: 10 20"
                    rows={3}
                    className="w-full resize-y rounded-lg border border-slate-300 bg-slate-50 p-3 font-mono text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* ================= OUTPUT TERMINAL ================= */}

              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-lg">
                <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <Terminal size={18} className="text-green-400" />

                    <h2 className="text-sm font-bold text-white">
                      Output
                    </h2>
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      executionError
                        ? "bg-red-500/10 text-red-400"
                        : output
                        ? "bg-green-500/10 text-green-400"
                        : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {executionError
                      ? "Error"
                      : output
                      ? "Executed"
                      : "Waiting"}
                  </span>
                </div>

                <div className="min-h-[120px] p-5">
                  {isRunning ? (
                    <p className="text-sm text-yellow-400">
                      Executing your code...
                    </p>
                  ) : executionError ? (
                    <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-6 text-red-400">
                      {executionError}
                    </pre>
                  ) : output !== "" ? (
                    <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-6 text-green-400">
                      {output}
                    </pre>
                  ) : (
                    <p className="text-sm text-slate-500">
                      Run your code to see the output here.
                    </p>
                  )}
                </div>
              </div>

              {/* ================= TEST CASES ================= */}

              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal size={18} className="text-slate-700" />

                      <h2 className="text-sm font-bold text-slate-900">
                        Test Cases
                      </h2>
                    </div>

                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
                      {question.testCases?.length || 0}
                    </span>
                  </div>
                </div>

                <div className="divide-y divide-slate-100">
                  {question.testCases?.map((testCase, index) => (
                    <div key={index} className="p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500">
                          Test Case {index + 1}
                        </span>

                        <CheckCircle2
                          size={17}
                          className="text-slate-300"
                        />
                      </div>

                      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div>
                          <p className="mb-2 text-xs font-semibold text-slate-500">
                            Input
                          </p>

                          <pre className="overflow-x-auto rounded-lg bg-slate-900 p-3 text-xs leading-5 text-slate-200">
                            {testCase.input}
                          </pre>
                        </div>

                        <div>
                          <p className="mb-2 text-xs font-semibold text-slate-500">
                            Expected Output
                          </p>

                          <pre className="overflow-x-auto rounded-lg bg-slate-900 p-3 text-xs leading-5 text-slate-200">
                            {testCase.expectedOutput}
                          </pre>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default DsaQuestion;