import React from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const { formData, handleChange, submitHandler, loading } = useSignup();

  return (
    <div className="flex flex-col items-center justify-center max-w-md mx-auto p-2 md:p-0">
      <div className="w-full p-6 md:mt-8 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter bg-opacity-0 backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center -mt-5 text-gray-300">
          Sign Up
        </h1>

        <form onSubmit={submitHandler}>
          {/* Full name field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Full Name
              </span>
            </label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter Full Name"
              className="input input-bordered w-full h-10"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>

          {/* Username field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Username
              </span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className="input input-bordered w-full h-10"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          {/* Password field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="input input-bordered w-full h-10"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Confirm password field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter Confirm Password"
              className="input input-bordered w-full h-10"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {/* Gender field */}
          <div className="mt-4">
            <span className="text-base label-text text-gray-200 ml-2">
              Gender
            </span>
            <div className="flex gap-10 mt-2">
              <div className="flex items-center">
                <input
                  id="male"
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="male">Male</label>
              </div>

              <div className="flex items-center">
                <input
                  id="female"
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>

          {/* Link to login page */}
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account? <span className="underline text-blue-300">login</span>
          </Link>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2 inline-block h-9"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
