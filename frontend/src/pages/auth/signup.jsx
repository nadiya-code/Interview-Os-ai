import { Link, useNavigate } from "react-router-dom";
import AppName from "../../components/AppName";
import logging from "../../assets/logging.png";

function Signup() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Temporary navigation.
    // Later this will call your signup API.
    navigate("/dashboard");
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">

      {/* Form */}
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          <AppName />

          <h1 className="mt-8 text-4xl font-bold text-gray-900">
            Create your account
          </h1>

          <p className="mt-2 text-gray-500">
            Start preparing for your next technical interview.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-5"
          >

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                className="w-full rounded-lg border border-gray-300
                           px-4 py-3 outline-none
                           focus:border-teal-500
                           focus:ring-2 focus:ring-teal-100"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                User ID
              </label>

              <input
                className="w-full rounded-lg border border-gray-300
                           px-4 py-3 outline-none
                           focus:border-teal-500
                           focus:ring-2 focus:ring-teal-100"
                type="text"
                name="userId"
                placeholder="Create your user ID"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Password
              </label>

              <input
                className="w-full rounded-lg border border-gray-300
                           px-4 py-3 outline-none
                           focus:border-teal-500
                           focus:ring-2 focus:ring-teal-100"
                type="password"
                name="password"
                placeholder="Create a password"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Confirm Password
              </label>

              <input
                className="w-full rounded-lg border border-gray-300
                           px-4 py-3 outline-none
                           focus:border-teal-500
                           focus:ring-2 focus:ring-teal-100"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-lg bg-blue-950
                         px-5 py-3 font-semibold text-white
                         transition hover:bg-blue-900"
            >
              Create Account
            </button>

          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-teal-600 hover:underline"
            >
              Login here
            </Link>
          </p>

        </div>
      </div>

      {/* Image */}
      <div className="hidden lg:block">
        <img
          className="h-full w-full object-cover"
          src={logging}
          alt="Interview preparation"
        />
      </div>

    </div>
  );
}

export default Signup;