import React, { useEffect, useState } from "react";
import { useGetRecipesCategory } from "../../../Hooks";
import { Loading, RecipesFeed } from "../..";
import { Pagination } from "../pagination";

export const RecipesCategory = ({ category, searchList = null }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetRecipesCategory(category, currentPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  if (isLoading) return <Loading />;

  const totalPages = Math.ceil(data.totalRecipesCount / 9);

  return (
    <>
      <RecipesFeed recipes={searchList?.length === 0 ? data.recipes : searchList} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(newPage)=>setCurrentPage(newPage)} />
    </>
  );
};
