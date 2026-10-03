import { useParams } from "react-router-dom";

function MockInterviewSetup() {
  const { category } = useParams();

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-900">
        {category} Mock Interview
      </h1>

      <p className="mt-2 text-slate-500">
        Configure your mock interview before starting.
      </p>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          Interview Setup
        </h2>

        <p className="mt-2 text-slate-500">
          Setup options will be added here.
        </p>
      </div>
    </div>
  );
}

export default MockInterviewSetup;