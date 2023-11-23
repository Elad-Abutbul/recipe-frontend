import React, { useState } from "react";
import { Recipes, Search, SelectRecipesType } from "../../components";
import { Layout } from "../../pages";

export const Home = () => {
  const [searchList, setSearchList] = useState([]);
  const [category, setCategory] = useState('all-recipes');
    
  return (
    <Layout>
      <div className="flex items-center gap-5">
        <Search setSearchList={setSearchList} permission={category} />
        <SelectRecipesType setCategory={setCategory} />
      </div>
      <Recipes category={category} searchList={searchList} />
    </Layout>
  );
};
