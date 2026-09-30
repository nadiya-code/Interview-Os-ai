import { Link } from "react-router-dom";
import AptitudeLinks from "../../model/Aptitude";

function Aptitude() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Aptitude
        </h1>

        <p className="mt-1 text-gray-500">
          Learn concepts, master formulas, and practice aptitude problems.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

        {AptitudeLinks.map((section, idx) => (

          <div
            key={section.slug}
            className="
              group
              rounded-2xl
              border border-gray-200
              bg-white
              p-5
              shadow-sm
              transition
              duration-200
              hover:-translate-y-1
              hover:shadow-lg
            "
          >

            {/* Number */}
            <div className="mb-4 flex items-center justify-between">
              <span
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-lg
                  bg-gray-100
                  text-sm
                  font-semibold
                  text-gray-600
                "
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              <span className="text-xs font-medium text-gray-400">
                APTITUDE
              </span>
            </div>

            {/* Topic */}
            <h2 className="text-xl font-semibold text-gray-900">
              {section.title}
            </h2>

            <p className="mt-2 text-sm leading-5 text-gray-500">
              Learn the concepts, important formulas and shortcuts.
            </p>

            {/* Learn */}
            <Link
              to={`/dashboard/aptitude/${section.slug}/explanation`}
              className="
                mt-5
                flex
                w-full
                items-center
                justify-center
                rounded-xl
                bg-gray-900
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-gray-800
              "
            >
              Learn Here →
            </Link>

            {/* Practice */}
            <div className="mt-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Practice
              </p>

              <div className="grid grid-cols-3 gap-2">

                <Link
                  to={`/dashboard/aptitude/${section.slug}/easy`}
                  className="
                    rounded-lg
                    border border-gray-200
                    px-2 py-2
                    text-center
                    text-sm
                    font-medium
                    text-gray-600
                    transition
                    hover:border-gray-400
                    hover:bg-gray-50
                  "
                >
                  Easy
                </Link>

                <Link
                  to={`/dashboard/aptitude/${section.slug}/medium`}
                  className="
                    rounded-lg
                    border border-gray-200
                    px-2 py-2
                    text-center
                    text-sm
                    font-medium
                    text-gray-600
                    transition
                    hover:border-gray-400
                    hover:bg-gray-50
                  "
                >
                  Medium
                </Link>

                <Link
                  to={`/dashboard/aptitude/${section.slug}/hard`}
                  className="
                    rounded-lg
                    border border-gray-200
                    px-2 py-2
                    text-center
                    text-sm
                    font-medium
                    text-gray-600
                    transition
                    hover:border-gray-400
                    hover:bg-gray-50
                  "
                >
                  Hard
                </Link>

              </div>
            </div>

          </div>

        ))}

      </div>
    </div>
  );
}

export default Aptitude;