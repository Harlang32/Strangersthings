import React from "react";
import { useState } from "react";
import { redirect } from "react-router-dom";

const COHORT_NAME = "2303-FTB-MT-WEB-PT";
const BASE_URL = "https://strangers-things.herokuapp.com/api";
const TOKEN =
  "Bearer eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9";

const registerUser = async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/${COHORT_NAME}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      });
      const result = await response.json();
// You can log ▲▲▲ the result
// here ▼▼▼ to view the json object before returning it
      console.log(result)
      return result
    } catch (err) {
      console.error(err);
    }
  }

  const loginUser = async (username, password) => {
    try {
      const response = await fetch(
        `${BASE_URL}/${COHORT_NAME}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username: username,
              password: password,
            },
          }),
        }
      );
      const result = await response.json();
      // You can log ▲▲▲ the result
      // here ▼▼▼ to view the json object before returning it
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    let result = await registerUser(username, password)
    if (result.success)
    {
      console.log(result.data.token);
      localStorage.setItem("authToken", result.data.token);
      setToken(result.data.token);
    }
    setUsername("");
    setPassword("");
  };
//Login Handler
const handleLogin = async (event) => {
  event.preventDefault();
  console.log(username);
  console.log(password);
  let result = await loginUser(username, password);
  if (result.success) {
    console.log(result.data.token);
    localStorage.setItem("authToken", result.data.token);
    setToken(result.data.token);
  }
  setUsername("");
  setPassword("");
<redirect push to="./components/index" />;

};


  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <div className="text-3xl font-bold text-gray-800 mb-8">
        Login
        <form className="bd-1">
          <label
            htmlFor="username"
            className="text-xl font-normal text-gray-800 mb-8"
          >
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <div></div>
          <label
            htmlFor="password"
            className="text-xl font-normal text-gray-800 mb-8"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            type="submit"
            className="text-xl font-normal text-gray-800 mb-8"
            onClick={handleSubmit}
          >
            Register
          </button>
          <button
            type="submit"
            className="text-xl font-normal text-gray-800 mb-8"
            onClick={handleLogin}
          >
            Login
          </button>

        </form>
      </div>
    </>
  );
};

export default login;
