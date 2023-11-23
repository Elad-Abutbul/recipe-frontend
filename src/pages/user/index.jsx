import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetUser } from "../../Api";
import { Loading, RecipesFeed, Search } from "../../components";

export const User = () => {
  const { id } = useParams();
  const { loading, user } = useGetUser(id);
  const [searchList, setSearchList] = useState([]);
  if (loading) return <Loading />;
  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-200 p-4 rounded-md shadow-md mb-6 inline-block">
        <h3 className="text-2xl font-semibold">
          {user?.username}'s Recipes
        </h3>
      </div>
      <Search setSearchList={setSearchList} permission="userCard"  userId={user?.id}/>
      {user?.recipes && <RecipesFeed recipes={searchList.length===0?user?.recipes:searchList} />}
    </div>
  );
};
