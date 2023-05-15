/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalState } from "../UserContext";
import users from "../data/user.json";
import games from "../data/games.json";
import event from "../data/events.json";
import eventnew from "../data/eventnew.json";
const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [user, setUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useGlobalState("isLoggedIn");
  const [userInfo, setUserInfo] = useGlobalState("user");

  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    if (location.state === "registered") {
      toast.success("Registration Successful");
      toast.warning("Please log in to continue");
    }
  }, []);

  const login = () => {
    for (let i = 0; i < user.length; i++) {
      if (email === user[i].email) {
        if (password === user[i].password) {
          setIsLoggedIn(true);
          setUserInfo({
            name: user[i].name,
            mail: user[i].email,
            phone: user[i].phone,
          });
          nav("/home", { state: "login" });
          localStorage.setItem("email", email);
          localStorage.setItem("pass", password);
          window.location.reload();
        } else {
          toast.error("Incorrect password");
        }
      }
    }
  };
  const load = () => {
    localStorage.setItem("user", JSON.stringify(users));
    localStorage.setItem("events", JSON.stringify(eventnew));
    localStorage.setItem("games", JSON.stringify(games));
  };

  const loadi = () => {
    localStorage.setItem("user", JSON.stringify(users));
    localStorage.setItem("events", JSON.stringify(event));
    localStorage.setItem("games", JSON.stringify(games));
  };

  const loadie = () => {
    localStorage.removeItem("events");
    localStorage.removeItem("games");
  };

  return (
    <section className="bg-gray-50">
      <button onClick={load} className="">
        .
      </button>
      <button onClick={loadi} className="">
        _
      </button>
      <button onClick={loadie} className="">
        .
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen h-full lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6">
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
                onClick={() => {
                  login();
                }}
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
