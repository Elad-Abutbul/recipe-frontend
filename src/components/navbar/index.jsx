import React, { useState } from "react";
import { ROUTES } from "../../constants";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useRemoveToken } from "../../Api";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const { logOut } = useRemoveToken();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeProfileDropdown = () => {
    setIsProfileDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to={ROUTES.HOME} className="text-2xl font-extrabold text-white hover:text-blue-600">
          MyRecipes
        </Link>

        <button
          onClick={toggleMobileMenu}
          className="lg:hidden block text-white hover:text-blue-500"
        >
          ☰
        </button>

        <div className={`lg:flex lg:space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          {cookies.access_token && (
            <Link to={`${ROUTES.PROFILE}/${ROUTES.EDIT_RECIPES}`} className="block text-white hover:text-blue-500">
              Profile
            </Link>
          )}
          {cookies.access_token && (
            <Link to={ROUTES.CREATE_RECIPE} className="block text-white hover:text-blue-500">
              Create Recipe
            </Link>
          )}
          {cookies.access_token && (
            <Link to={ROUTES.SAVE_RECIPE} className="block text-white hover:text-blue-500">
              Saved Recipes
            </Link>
          )}
          {cookies.access_token ? (
            <button onClick={logOut} className="block text-red-400 hover:text-red-500">
              Logout
            </button>
          ) : (
            <Link to={ROUTES.LOGIN} className="block text-white hover:text-blue-500">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
