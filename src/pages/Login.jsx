/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const login = () => {
    
  };
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen h-full lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  required=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-sm font-medium text-blue-600 hover:underline">
                Forgot password?
              </div>
              <button
                type="button"
                onClick={() => login()}
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Sign in
              </button>
              <div className="flex justify-between">
                <p className="text-sm font-light text-gray-500">
                  Need an account?
                </p>
                <button
                  type="button"
                  onClick={() => nav("/register")}
                  className="font-medium text-blue-600 hover:underline"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
        <label className="fixed top-5 left-5 md:top-10 md:left-10 inline-flex items-center mb-4 cursor-pointer">
          <FaHome
            onClick={() => nav("/home")}
            className="text-3xl cursor-pointer"
          />
        </label>
      </div>
    </section>
  );
};

export default Login;
