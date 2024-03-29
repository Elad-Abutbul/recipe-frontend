import React, { useState } from "react";
import { useAuth, useDarkMode, useRemoveToken } from "../../Hooks";
import { ROUTES } from "../../constants";
import { UsersSearch } from "../User";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export const Navbar = () => {
  const { theme, handleThemeSwitch } = useDarkMode()
  const { checkIfUserAuth } = useAuth();
  const { logOut } = useRemoveToken();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-20">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link
          to={`/`}
          className="text-2xl font-extrabold text-white hover:text-blue-600"
        >
          Recipes
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden block text-white hover:text-blue-500"
        >
          ☰
        </button>

        <div
          className={`lg:flex lg:space-x-4 items-center ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <UsersSearch />
          {checkIfUserAuth() && (
            <Link
              to={`${ROUTES.PROFILE}/${ROUTES.EDIT_RECIPES}`}
              className="block text-white hover:text-blue-500"
            >
              Profile
            </Link>
          )}

          {checkIfUserAuth() && (
            <Link
              to={ROUTES.CREATE_RECIPE}
              className="block text-white hover:text-blue-500"
            >
              Create Recipe
            </Link>
          )}
          {checkIfUserAuth() && (
            <div className="flex gap-1">
              <Link
                to={ROUTES.SAVE_RECIPES}
                className="block text-white hover:text-blue-500"
              >
                Saved Recipes
              </Link>
              {/* {data?.totalRecipesCount > 0 && (
                <span className=" bg-white text-gray-800 rounded-full px-2 ">
                  {data.totalRecipesCount}
                </span>
              )} */}
            </div>
          )}

          {checkIfUserAuth() ? (
            <button
              onClick={logOut}
              className="block text-red-400 hover:text-red-500"
            >
              Logout
            </button>
          ) : (
            <Link
              to={ROUTES.LOGIN}
              className="block text-white hover:text-blue-500"
            >
              Login
            </Link>
          )}
          <button onClick={handleThemeSwitch}>{theme==="dark"?<MdDarkMode size={25} />
:<MdOutlineDarkMode size={25}/>
}</button>
        </div>
      </div>
    </nav>
  );
};
