import React, { useState } from "react";
import { useGetUser } from "../../Hooks";
import { Layout } from "../layout";
import { Loading, RecipesFeed, Search } from "../../components";
import { useParams } from "react-router-dom";

export const User = () => {
  const { id } = useParams();
  const { loading, user } = useGetUser(id);
  const [search, setSearch] = useState([]);
  if (loading) return <Loading />;
  return (
    <Layout>
    <div className="container mx-auto p-4">
      <div className="bg-gray-200 p-4 rounded-md shadow-md mb-6 inline-block">
        <h3 className="text-2xl font-semibold">
          {user?.username}'s Recipes
        </h3>
      </div>
      <Search setSearch={setSearch} permission="userCard"  userId={user?.id}/>
      {user?.recipes && <RecipesFeed recipes={search?.totalRecipesCount<=0?user?.recipes:search.searchRecipes} />}
    </div>
    </Layout>
  );
};
