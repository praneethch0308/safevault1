import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Landing from "./Login";

function Signup() {
  const navigate = useNavigate();

  const [isclicked, setIsclicked] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleAccountcreation = () => {
    navigate("/")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, cpassword }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/notes");
    } else {
      alert("Invalid credentials");
    }
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex ">
      <div className="hidden sm:block ">
        <div className="w-1/2 place-content-center h-[550px] items-center ">
          <p className="text-7xl font-bold text-left p-5">Welcome to Lockbox</p>
          <p className="text-2xl text-left p-5">
          Your safe place for storing your passwords and notes.
          </p>
        </div>
      </div>

      <div className="sm:w-full md:w-1/2  justify-center">
      <div>
        Exisiting user?
        <button
          className="bg-teal-700 text-white font-bold p-3 px-5 rounded-md ml-2"
          onClick={handleAccountcreation}
        >
          Login
        </button>
      </div>
      <div>
        <p className="text-3xl mt-20 mb-2">Create your digital vault</p>
        <div className="justify-center">
        <form className="max-w-sm mx-auto mt-2" onSubmit={handleSubmit}>
          <div className="mb-5 text-left">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              name="name"
              value={credentials.name}
              type="text"
              id="name"
              onChange={onchange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="Ram"
              required
            />
          </div>
          <div className="mb-5 text-left">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              name="email"
              value={credentials.email}
              type="email"
              id="email"
              onChange={onchange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="name@gmail.com"
              required
            />
          </div>

          <div className="mb-5 text-left">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Create a password
            </label>
            <input
              name="password"
              value={credentials.password}
              type="password"
              id="password"
              onChange={onchange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-5 text-left">
            <label
              htmlFor="cpassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm your password
            </label>
            <input
              name="cpassword"
              value={credentials.cpassword}
              type="password"
              id="cpassword"
              onChange={onchange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            Submit
          </button>
        </form>

        </div>
       
      </div>
    </div>
      </div>
  );
}

export default Signup;
