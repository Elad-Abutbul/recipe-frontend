import React from "react";
import { useGetUser } from "../../Hooks";
import { Layout } from "../layout";
import { RecipesWithSearch } from "../../components";
import { useLocation, useParams } from "react-router-dom";

export const User = () => {
  const { id } = useParams();
  const { location } = useLocation();
  const username = location.state?.username;
  return (
    <Layout>
      <h2>{username} Recipe's</h2>
      <RecipesWithSearch
        useRecipe={useGetUser}
        mode="user"
        userId={id}
        urlParams={"user"}
      />
    </Layout>
  );
};
