import React from "react";
import { Layout } from "../layout";
import { RecipesWithSearch } from "../../components";
import { useLocation, useParams } from "react-router-dom";
import { usersApiService } from "../../services";
import { QUERY_KEY } from "../../constants";

export const User = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const username = state?.username;

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-4">{username}'s Recipes</h2>
      <RecipesWithSearch
        service={usersApiService.getUserRecipes}
        mode="user"
        userId={id}
        urlParams={"user"}
        queryKey={QUERY_KEY.USER}
      />
    </Layout>
  );
};
