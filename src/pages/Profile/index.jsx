import React, { useState } from "react";
import { Layout } from "../../components";
import { ROUTES } from "../../constants";
import { Outlet, Link } from "react-router-dom";

const Profile = () => {
  const [select, setSelect] = useState("edit-recipes");

  return (
    <Layout>
      <div className="flex justify-center mb-4 ">
        <Link
          to={ROUTES.EDIT_RECIPES}
          onClick={() => setSelect("edit-recipes")}
          className={`text-gray-800 font-semibold text-lg mx-4 transition duration-300 transform hover:scale-105 hover:shadow-md p-2 rounded-md  border-b-2 bg-gray-200 dark:bg-slate-400 dark:text-white dark:border-white ${
            select === "edit-recipes" ? " border-black  " : "border-gray-200"
          }`}
        >
          Edit Your Recipes
        </Link>
        <Link
          to={ROUTES.EDIT_PROFILE}
          onClick={() => setSelect("edit-profile")}
          className={`text-gray-800 font-semibold text-lg mx-4 cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-md p-2 rounded-md  border-b-2 bg-gray-200 dark:bg-slate-400 dark:text-white dark:border-white ${
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
export default Profile;