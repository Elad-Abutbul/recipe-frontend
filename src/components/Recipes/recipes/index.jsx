import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetRecipes } from '../../../Hooks';
import { RecipesFeed } from '..';
import { Loading } from '../../loading';
import { Search } from '../../search';

export const Recipes = () => {
  const { pathname } = useLocation();
  const [searchList, setSearchList] = useState([]);
  const { recipes, isLoading } = useGetRecipes(pathname.substring(9));
if(isLoading) return <Loading/>
  return (
    <div className='p-4'>
      <Search setSearchList={setSearchList} />
<RecipesFeed recipes={recipes}/>
    </div>
  );
};
