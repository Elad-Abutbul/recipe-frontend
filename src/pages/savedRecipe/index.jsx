import React, { useState } from "react";
import { axiosSavedRecipes } from "../../Api";
import { Loading, RecipesFeed, Search } from "../../components";
import { localStorageService } from "../../services";
import { useQuery } from "react-query";

export const SavedRecipe = () => {
  const [searchList, setSearchList] = useState([]);
  const userId = localStorageService.getItem("userId");
  const { isLoading, data: savedRecipes } = useQuery({
    queryKey: ["savedRecipes"],
    queryFn: axiosSavedRecipes,
  });

  if (isLoading) return <Loading />;
  return (
    <div className="m-10">
      {savedRecipes?.length === 0 ? (
        "Nothing To Show.."
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
