import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants';

export const SelectRecipesType = () => {
  const linkClass= "bg-gray-100 p-6 mx-4 my-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
  return (
    <div className="flex justify-center items-center h-72">
            <Link
        to={`${ROUTES.RECIPES}/${ROUTES.ALL_RECIPES}`}
        className={linkClass}
      >
        <div>All Recipes</div>
      </Link>
      <Link
        to={`${ROUTES.RECIPES}/${ROUTES.PARVE}`}
        className={linkClass}
      >
        <div>Parve Recipes</div>
      </Link>
      <Link
        to={`${ROUTES.RECIPES}/${ROUTES.MEAT}`}
        className={linkClass}
      >
        <div>Meat Recipes</div>
      </Link>
      <Link
        to={`${ROUTES.RECIPES}/${ROUTES.DAIRY}`}
        className={linkClass}
      >
        <div>Dairy Recipes</div>
      </Link>
    </div>
  );
};
