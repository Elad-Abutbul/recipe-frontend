import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import { useSignInOut } from "../../Hooks";
import { ROUTES } from "../../constants";
import { Link, useLocation } from "react-router-dom";

const SignInOut = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleSubmit } = useSignInOut();
  const location = useLocation();

  useEffect(() => {
    setUsername("");
    setPassword("");
  }, [location]);

  return (
    <Layout>
      <div className="mt-10 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h1 className="text-2xl font-bold text-center mb-4">
            {location.pathname === ROUTES.LOGIN ? "Login" : "Register"}
          </h1>
          <form
            onSubmit={(event) =>
              handleSubmit(event, location, username, password)
            }
          >
            <div className="mb-4">
              <input
                autoFocus
                value={username}
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <input
                value={password}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          <p className="text-center mt-4">
            {location.pathname === ROUTES.LOGIN
              ? "Don't have an account? "
              : "Have an account? "}
            <Link
              to={
                location.pathname === ROUTES.LOGIN
                  ? ROUTES.REGISTER
                  : ROUTES.LOGIN
              }
              className="text-blue-500"
            >
              {location.pathname === ROUTES.LOGIN ? "Register" : "Login"}
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default SignInOut;
