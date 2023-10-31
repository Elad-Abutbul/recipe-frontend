import React from 'react';
import { Loading, RecipeCard } from '../../components';
import { getAllRecipes } from '../../Api';
import { useQuery } from 'react-query'

export const Home = () => {

  const { isLoading, data: recipes } = useQuery(['allRecipes'], getAllRecipes);
  
  if (isLoading) return <Loading />;
  
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Recipes</h1>
      {recipes?.length === 0 ? (
        'Nothing To Show'
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recipes?.map((recipe) => (
            <RecipeCard recipe={recipe} />
          ))}
        </ul>
      )}
    </div>
  );
};
