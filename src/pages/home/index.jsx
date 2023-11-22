import React, { useState } from "react";
import { SelectRecipesType } from "../../components";

export const Home = () => {
  const [select, setSelect] = useState("users");
  
  return (
    <div className="p-6 space-y-8">
      <SelectRecipesType/>
      {/* <h1 className="text-3xl font-bold">Recipes</h1>
      {recipes?.length === 0 ? (
        "Nothing To Show.."
      ) : (
        <div className="flex items-center space-x-2">
          <Search
            setSearchList={setSearchList}
            select={select}
            permission={select}
          />
          <select
            onChange={(e) => setSelect(e.target.value)}
            className="px-4 py-2 border rounded-lg shadow-md focus:outline-none"
          >
            <option value="allRecipes">Recipes</option>
            <option value="users" selected>Users</option>
          </select>
        </div>
      )}

      {select === "users" ? (
        <UserFeed items={searchList} />
      ) : (
        <RecipesFeed
          recipes={searchList.length === 0 ? recipes : searchList}
        />
      )} */}
    </div>
  );
};
