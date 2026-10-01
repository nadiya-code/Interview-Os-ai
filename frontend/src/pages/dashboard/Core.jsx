import { Link } from "react-router-dom";
import CoreLinks from "../../model/Corecs";

function Core() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Core CS
        </h1>

        <p className="mt-2 text-gray-600">
          Learn and practice important Computer Science concepts
          for technical interviews.
        </p>
      </div>

      {/* Subject Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        {CoreLinks.map((subject) => (
          <div
            key={subject.slug}
            className="flex flex-col rounded-2xl border border-gray-200
                       bg-white p-6 shadow-sm
                       transition duration-300
                       hover:-translate-y-1 hover:shadow-lg"
          >

            {/* Subject Title */}
            <h2 className="text-xl font-semibold text-gray-900">
              {subject.title}
            </h2>

            {/* Number of Topics */}
            <p className="mt-2 text-sm text-gray-500">
              {subject.topics.length} Topics
            </p>

            {/* Description */}
            <p className="mt-4 text-sm leading-6 text-gray-600">
              Learn important concepts, interview questions,
              explanations and practical knowledge.
            </p>

            {/* Topics Preview */}
            <div className="mt-5">
              <p className="mb-2 text-sm font-medium text-gray-700">
                Topics include:
              </p>

              <div className="flex flex-wrap gap-2">
                {subject.topics.slice(0, 4).map((topic) => (
                  <span
                    key={topic.slug}
                    className="rounded-full bg-gray-100
                               px-3 py-1 text-xs text-gray-600"
                  >
                    {topic.title}
                  </span>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="mt-6">
              <Link
                to={`/dashboard/core-cs/${subject.slug}`}
                className="inline-flex items-center rounded-lg
                           bg-black px-5 py-2.5 text-sm
                           font-medium text-white
                           transition hover:bg-gray-800"
              >
                Explore Topics →
              </Link>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Core;