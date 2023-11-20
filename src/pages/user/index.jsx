import React from "react";
import { useParams } from "react-router-dom";
import { useGetUser } from "../../Api";
import { Loading, RecipesFeed } from "../../components";

export const User = () => {
  const { id } = useParams();
  const { loading, data } = useGetUser(id);
  if (loading) return <Loading />;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-200 p-4 rounded-md shadow-md mb-6 inline-block">
        <h3 className="text-2xl font-semibold">
          {data?.user.username}'s Recipes
        </h3>
      </div>
      {data?.userRecipes && <RecipesFeed recipes={data?.userRecipes} />}
    </div>
  );
};
