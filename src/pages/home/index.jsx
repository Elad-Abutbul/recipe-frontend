import React, { useState } from 'react';
import { Loading } from '../../components';
import { useGetAllRecipes, useSaveRecipe } from '../../Api';
import { ROUTES } from '../../constants';
import { ShowFullRecipe } from '../../components/showFullRecipe';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { GrFormView } from 'react-icons/gr';
import { LiaSave } from 'react-icons/lia';
import { Search } from '../../components/search';
import { useMutation, useQuery, useQueryClient } from 'react-query'

export const Home = () => {
  const [cookies, setCookies] = useCookies(['access_token']);
  const [showFullRecipe, setShowFullRecipe] = useState(false);
  const { axiosSaveRecipe } = useSaveRecipe();
  const { getAllRecipes } = useGetAllRecipes();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, data:recipes } = useQuery(['allRecipes'], getAllRecipes);

  const saveRecipeseMutation = useMutation(axiosSaveRecipe,{
    onSuccess: () => {
      queryClient.invalidateQueries(['savedRecipes']);
    }
  });
  
  const handleSaveRecipe = async (recipeId) => {
    if (cookies.access_token) {
      return await saveRecipeseMutation.mutateAsync(recipeId);
    }
    navigate(ROUTES.LOGIN);
  };

  if (isLoading) return <Loading />;
  
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Recipes</h1>
      {recipes?.length === 0 ? (
        'Nothing To Show'
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {recipes?.map((recipe) => (
            <li
              key={recipe._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              style={{ height: '100%' }}
            >
              <div className="h-full flex flex-col">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col justify-between h-full">
                  <h2 className="text-2xl font-semibold mb-2">{recipe.name}</h2>

                  <div className="flex justify-center mt-2 gap-5">
                    <LiaSave size={30} />
                    <button
                      className="text-blue-500"
                      disabled={saveRecipeseMutation.isLoading}
                      onClick={() => handleSaveRecipe(recipe._id)}
                    >
                      save
                    </button>
                    <GrFormView
                      size={30}
                      onClick={() => setShowFullRecipe(true)}
                      className='cursor-pointer'
                    />
                    {showFullRecipe && <ShowFullRecipe onClose={() => setShowFullRecipe(false)} recipe={recipe} key={recipe._id} />}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
