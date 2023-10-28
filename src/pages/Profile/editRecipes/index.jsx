import React, { useEffect, useState } from 'react'
import axios from '../../../axiosConfig'
import { getUserId } from '../../../Api';
import { Loading } from '../../../components';
import { RecipeCard } from '../../../components/recipeCard';

export const EditRecipes = () => {
  // const [recipe, setRecipe] = useState({
  //   name: '',
  //   ingredients: [],
  //   instruction: '',
  //   imageUrl: '',
  //   cookingTime: 0,
  // });
  const [showRecipes, setShowRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const userId = getUserId();

  useEffect(() => {
    const waitForRecipes = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/recipes/my-recipes/${userId}`);
        setShowRecipes(res.data.allUserRecipes)
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    waitForRecipes();
  }, [userId]); 
  
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setRecipe({ ...recipe, [name]: value });
  // };


  // return (
  //   <div className="p-6 space-y-6">
  //     <form  className="space-y-4">
  //       <input
  //         type="search"
  //         placeholder="Enter A Name.."
  //         name="name"
  //         onChange={handleChange}
  //         required
  //         className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
  //       />
  //       <textarea
  //         name="instruction"
  //         placeholder="Instruction.."
  //         cols="20"
  //         rows="3"
  //         onChange={handleChange}
  //         required
  //         className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
  //       />
  //       <button
  //         // onClick={addIngredient}
  //         type="button"
  //         required
  //         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  //       >
  //         Add Ingredient
  //       </button>
  //       {recipe.ingredients.map((ingredients, index) => (
  //         <div key={index} className="flex items-center space-x-2">
  //           <input
  //             type="search"
  //             name="ingredients"
  //             value={ingredients}
  //             // onChange={(e) => handleIngredientChange(e, index)}
  //             className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
  //           />
  //           <button
  //             type="button"
  //             // onClick={() => deleteIngredient(index)}
  //             className="px-2 py-1 text-red-600 hover:text-red-800"
  //           >
  //             X
  //           </button>
  //         </div>
  //       ))}
  //       <input
  //         type="search"
  //         placeholder="Enter A Image URL.."
  //         name="imageUrl"
  //         onChange={handleChange}
  //         required
  //         className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
  //       />
  //       <input
  //         type="number"
  //         placeholder="Cooking Time (minutes).."
  //         name="cookingTime"
  //         onChange={handleChange}
  //         required
  //         className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
  //       />
  //       <button
  //         type="submit"
  //         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  //       >
  //         Submit
  //       </button>
  //     </form>
  //   </div>
  // );
}
