import React from "react";
import { Pagination,RecipeCard } from "../../../components";

export const RecipesFeed = ({ recipes, mode, currentPage, totalPages, setCurrentPage,category }) => {
  return (
  <div>
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {recipes?.map((recipe) => (
      <RecipeCard
        recipe={recipe}
        key={recipe._id}
        mode={mode}
        category={category}
        page={currentPage}
      />
    ))}
    </ul>
    {(totalPages !== 0 && totalPages !== 1) &&
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage} />}
  </div>
)}
