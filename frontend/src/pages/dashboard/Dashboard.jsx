function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Track your interview preparation and continue learning.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Problems Solved
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            0
          </h2>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            DSA Progress
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            0%
          </h2>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Core CS Progress
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            0%
          </h2>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Aptitude Progress
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            0%
          </h2>
        </div>

      </div>

      {/* Continue Learning */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          Continue Learning
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Start preparing for your technical interviews.
        </p>
      </div>

    </div>
  );
}

export default Dashboard;