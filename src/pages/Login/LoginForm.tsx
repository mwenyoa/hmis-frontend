import React from "react";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";

type Props = {
  // Add props here
  
};

const LoginForm: React.FC<Props> = () => {
  const loginHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // Add login logic here
  };

  return (
    <section className="flex min-h-full w-full flex-col h-full items-center justify-center px-6 my-8 py-2 lg:px-8">
      <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm bg-white shadow-md  rounded-lg p-4 w-full">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <CiLogin className="mx-auto h-12 w-auto font-bold" />
        <p className="py-8 text-center text-xl tracking-tight text-dark.-900">
          Sign in to your account
        </p>
      </div>
        <form className="space-y-6 w-full" onSubmit={loginHandler}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/Register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
