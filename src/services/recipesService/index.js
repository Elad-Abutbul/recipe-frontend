import axios from '../../axiosConfig'


export const recipeService = { 
     getAll: async () => await axios.get('/recipes/getAllRecipes'),

     createRecipe: async (recipe, accessToken) => await axios.post('/recipes/createRecip', recipe,
          { headers: { authorization: accessToken } }),

     deleteSavedRecipe: async (recipeId,userId,accessToken)=> await axios.delete('/recipes/delete/saved-recipe', {
          data: { recipeId, userId },
          headers: { authorization: accessToken}
        })
}