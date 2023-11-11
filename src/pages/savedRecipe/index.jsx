import React, { useState } from "react";
import { useGetSavedRecipes } from "../../Api";
import { Loading, RecipesFeed, Search } from "../../components";
import { localStorageService } from "../../services";

export const SavedRecipe = () => {
  const [searchList, setSearchList] = useState([]);
  const { isLoading, savedRecipes } = useGetSavedRecipes();
  const userId = localStorageService.getItem("userId");

  if (isLoading) return <Loading />;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Saved Recipes</h1>
      {savedRecipes?.length === 0 ? (
        "Save A Recipe To See!"
      ) : (
        <>
          <Search
            permission="savedRecipes"
            setSearchList={setSearchList}
            userId={userId}
          />

          <RecipesFeed
            recipes={searchList.length === 0 ? savedRecipes : searchList}
            condition={"saved-recipes"}
          />
        </>
      )}
    </div>
  );
};
