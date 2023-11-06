import React, { useState } from 'react';
import { ROUTES } from '../../constants';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useRemoveToken } from '../../Api';

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(['access_token']);
  const { logOut } = useRemoveToken();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const closeProfileDropdown = () => {
    setIsProfileDropdownOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to={ROUTES.HOME} className="text-2xl font-extrabold">
          MyRecipes
        </Link>
        <div className="space-x-4 relative">
          {cookies.access_token && (
      
              <Link
                to={ROUTES.PROFILE}
                className="hover:text-blue-500"
              >
                Profile
              </Link>
          )}
          {cookies.access_token && (
            <Link to={ROUTES.CREATE_RECIPE} className="hover:text-blue-500">
              Create Recipe
            </Link>
          )}

          {cookies.access_token && (
            <div className='flex'>
              {}
            <Link to={ROUTES.SAVE_RECIPE} className="hover:text-blue-500">
              Saved Recipes
            </Link>
            </div>
          )}
          {cookies.access_token ? (
            <button onClick={logOut} className="hover:text-red-500">
              Logout
            </button>
          ) : (
            <Link to={ROUTES.LOGIN} className="hover:text-blue-500">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
