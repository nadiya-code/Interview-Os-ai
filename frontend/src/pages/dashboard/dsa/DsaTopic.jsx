import { Link, useParams } from "react-router-dom";
import DsaTopics from "../../../model/Dsa";

function DsaTopic() {
  const { topic } = useParams();

  const currentTopic = DsaTopics.find(
    (item) => item.slug === topic
  );

  if (!currentTopic) {
    return (
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold text-slate-900">
          Topic not found
        </h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/dashboard/dsa"
          className="text-sm font-medium text-blue-700 hover:underline"
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

      {/* Progress */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Your Progress
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              0 of 0 problems solved
            </p>
          </div>

          <span className="text-2xl font-bold text-blue-950">
            0%
          </span>
        </div>

        <div className="mt-4 h-2 rounded-full bg-slate-200">
          <div className="h-full w-0 rounded-full bg-blue-950" />
        </div>
      </div>

      {/* Practice */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          Practice Problems
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Problems for {currentTopic.title} will appear here.
        </p>
      </div>
    </div>
  );
}

export default DsaTopic;