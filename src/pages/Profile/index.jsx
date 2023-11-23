import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Layout } from "../layout";

export const Profile = () => {
  const [select, setSelect] = useState("edit-recipes");

  return (
    <Layout>
      <div className="flex justify-center mb-4 ">
        <Link
          to={ROUTES.EDIT_RECIPES}
          onClick={() => setSelect("edit-recipes")}
          className={`text-gray-800 font-semibold text-lg mx-4 transition duration-300 transform hover:scale-105 hover:shadow-md p-2 rounded-md  border-b-2 bg-gray-200  ${
            select === "edit-recipes" ? " border-black  " : "border-gray-200"
          }`}
        >
          Edit Your Recipes
        </Link>
        <Link
          to={ROUTES.EDIT_PROFILE}
          onClick={() => setSelect("edit-profile")}
          className={`text-gray-800 font-semibold text-lg mx-4 cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-md p-2 rounded-md  border-b-2 bg-gray-200  ${
            select === "edit-profile" ? " border-black  " : "border-gray-200"
          }`}
        >
          Edit Profile
        </Link>
      </div>
      <Outlet />
    </Layout>
  );
};
