import { Link, useNavigate } from "react-router-dom";
import AppName from "../../components/AppName";
import logging from "../../assets/logging.png";

function Login() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // Temporary navigation.
    // Later this will call your backend login API.
    navigate("/dashboard");
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">

      {/* Form Section */}
      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          <div className="mb-10">
            <AppName />

            <h1 className="mt-8 text-4xl font-bold text-gray-900">
              Welcome back
            </h1>

            <p className="mt-2 text-gray-500">
              Continue your interview preparation.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                className="w-full rounded-lg border border-gray-300
                           px-4 py-3 outline-none
                           transition
                           focus:border-teal-500
                           focus:ring-2 focus:ring-teal-100"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <label className="text-sm font-medium">
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm text-teal-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <input
                className="w-full rounded-lg border border-gray-300
                           px-4 py-3 outline-none
                           transition
                           focus:border-teal-500
                           focus:ring-2 focus:ring-teal-100"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-lg bg-blue-950
                         px-5 py-3 font-semibold text-white
                         transition hover:bg-blue-900"
            >
              Login
            </button>

          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-teal-600 hover:underline"
            >
              Register here
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

export default Login;