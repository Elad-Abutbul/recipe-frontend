import React, { useState } from "react";
import { useGetSavedRecipes } from "../../Api";
import { Loading, RecipesFeed, Search } from "../../components";
import { getUser } from "../../Functions";
import { Layout } from "../../pages";

export const SavedRecipes = () => {
  const [searchList, setSearchList] = useState([]);
  const { isLoading, recipes } = useGetSavedRecipes();
  const user = getUser();

  if (isLoading) return <Loading />;
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center">Saved Recipes</h1>

      {recipes?.length === 0 ? (
        "Save A Recipe To See!"
      ) : (
        <>
          <Search
            permission="savedRecipes"
            setSearchList={setSearchList}
            userId={user._id}
          />
          <RecipesFeed
            recipes={searchList.length === 0 ? recipes : searchList}
            mode={"saved-recipes"}
          />
        </>
      )}
    </Layout>
  );
};
