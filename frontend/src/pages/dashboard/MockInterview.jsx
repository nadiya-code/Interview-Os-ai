import { Link } from "react-router-dom";
import MockInterviewLinks from "../../model/MockInterviewLinks";

function MockInterview() {
  return (
    <div className="mx-auto max-w-7xl">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">
          Mock Interview
        </h1>

        <p className="mt-2 max-w-2xl text-slate-500">
          Simulate real technical interviews and test your
          knowledge across different interview areas.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        {MockInterviewLinks.map((item) => (
          <div
            key={item.slug}
            className="
              flex flex-col rounded-2xl
              border border-slate-200
              bg-white p-6
              shadow-sm
              transition duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >

            <h2 className="text-xl font-semibold text-slate-900">
              {item.title}
            </h2>

            <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
              {item.description}
            </p>

            <Link
              to={`/dashboard/mock-interview/${item.slug}`}
              className="
                mt-6 inline-flex
                w-fit items-center
                rounded-lg
                bg-blue-950
                px-5 py-2.5
                text-sm font-semibold
                text-white
                transition
                hover:bg-blue-900
              "
            >
              Start Interview →
            </Link>

          </div>
        ))}

      </div>
    </div>
  );
}

export default MockInterview;