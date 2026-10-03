import { useParams } from "react-router-dom";

function MockInterviewResult() {
  const { category } = useParams();

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-900">
        Interview Result
      </h1>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          {category} Interview Result
        </h2>

        <p className="mt-2 text-slate-500">
          Your score and performance analysis will appear here.
        </p>
      </div>
    </div>
  );
}

export default MockInterviewResult;