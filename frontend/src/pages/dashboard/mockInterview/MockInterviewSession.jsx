import { useParams } from "react-router-dom";

function MockInterviewSession() {
  const { category } = useParams();

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-900">
        {category} Interview
      </h1>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          Interview Session
        </h2>

        <p className="mt-2 text-slate-500">
          Questions, timer and interview interface will be added here.
        </p>
      </div>
    </div>
  );
}

export default MockInterviewSession;