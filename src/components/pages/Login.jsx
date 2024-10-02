import React from "react";
import { Link } from "react-router-dom";

import useLogin from "../../hooks/useLogin";  //useLogin hooks

const Login = () => {
  const { loginFormData, handleChange, loginSubmitHandler } = useLogin();

  return (
    <div className="flex  flex-col items-center justify-center max-w-96 mx-auto p-2 md:p-0">
      <div className="w-full p-6 mt-20 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter bg-opacity-0 backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
        </h1>

        <form onSubmit={loginSubmitHandler}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              className="input input-bordered w-full h-10"
              value={loginFormData.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="input input-bordered w-full h-10"
              value={loginFormData.password}
              onChange={handleChange}
            />
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account? <span className="underline text-blue-300">sign up</span>
          </Link>

          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 inline-block h-9"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
