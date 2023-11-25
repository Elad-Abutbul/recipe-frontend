import React, { useState } from "react";
import { useGetAllOwnerRecipes } from "../../../Hooks";
import { Layout } from "../../../pages";
import { Loading, RecipesFeed, Search } from "../../../components";

export const EditRecipes = () => {
  const { isLoading, ownerRecipes } = useGetAllOwnerRecipes();

  const [searchList, setSearchList] = useState([]);

  if (isLoading) return <Loading />;

  return <Layout>

    {ownerRecipes?.length === 0 ? "Create A Recipe To See!" :
      <>
      <Search setSearchList={setSearchList} userId={ownerRecipes[0]?.userOwner?.id} permission="userCard" />
      <RecipesFeed recipes={searchList.length===0?ownerRecipes:searchList} mode={"edit-recipes"} />
      </>
    }
    </Layout>
};
