import { Link } from "react-router-dom";
import DsaTopics from "../../model/Dsa";

function Dsa() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">
          Data Structures & Algorithms
        </h1>

        <p className="mt-2 max-w-2xl text-slate-500">
          Learn DSA concepts, solve interview problems, and
          track your progress.
        </p>
      </div>

      {/* Overall Progress */}
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Your DSA Progress
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Start solving problems to track your progress.
            </p>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-3xl font-bold text-blue-950">
              0 / 0
            </p>

            <p className="text-sm text-slate-500">
              Problems Solved
            </p>
          </div>
        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-0 rounded-full bg-blue-950" />
        </div>
      </div>

      {/* Topics */}
      <div>
        <h2 className="mb-5 text-xl font-semibold text-slate-900">
          DSA Topics
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DsaTopics.map((topic) => (
            <div
              key={topic.slug}
              className="
                flex flex-col
                rounded-2xl
                border border-slate-200
                bg-white
                p-6
                shadow-sm
                transition duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {topic.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                {topic.description}
              </p>

              <Link
                to={`/dashboard/dsa/${topic.slug}`}
                className="
                  mt-6 inline-flex w-fit
                  rounded-lg
                  bg-blue-950
                  px-4 py-2.5
                  text-sm font-semibold
                  text-white
                  transition
                  hover:bg-blue-900
                "
              >
                Practice →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dsa;