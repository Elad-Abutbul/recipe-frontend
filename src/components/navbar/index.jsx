import React, { useState } from "react";
import { ROUTES } from "../../constants";
import { Link } from "react-router-dom";
import { useAuth, useGetSavedRecipes, useRemoveToken } from "../../Api";

export const Navbar = () => {
  const { recipes } = useGetSavedRecipes();
  const { checkIfUserAuth } = useAuth();
  const { logOut } = useRemoveToken();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-20">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link
          to={ROUTES.HOME}
          className="text-2xl font-extrabold text-white hover:text-blue-600"
        >
          MyRecipes
        </Link>

        <button
          onClick={toggleMobileMenu}
          className="lg:hidden block text-white hover:text-blue-500"
        >
          ☰
        </button>

        <div
          className={`lg:flex lg:space-x-4 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
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
                to={ROUTES.SAVE_RECIPE}
                className="block text-white hover:text-blue-500"
              >
                Saved Recipes
              </Link>
              {recipes?.length > 0 && (
                <span className=" bg-white text-gray-800 rounded-full px-2 ">
                  {recipes.length}
                </span>
              )}
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
        </div>
      </div>
    </nav>
  );
};
