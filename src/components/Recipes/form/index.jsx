import { useQueryMutation } from "../../../Hooks";
import { useForm } from "./useForm";
import { ROUTES } from "../../../constants";
import { handleChangeState } from "../../../Utils";

export const Form = ({ fullRecipe, location }) => {
  const { createRecipeMutation, editRecipeMutation } = useQueryMutation();

  const {
    recipe,
    setRecipe,
    handleIngredientChange,
    formHandleSubmit,
    addIngredient,
    deleteIngredient,
  } = useForm(fullRecipe);

  const handleChange = (event) => {
    handleChangeState(event, setRecipe, recipe);
  };
  const inputClassName =
    "w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400";

  return (
    <div className=" space-y-6">
      <h1 className="text-3xl font-bold text-center dark:text-white">
        {fullRecipe ? "Edit Recipes" : "Create Recipes"}
      </h1>
      <form
        onSubmit={(event) =>
          formHandleSubmit(
            event,
            recipe,
            location,
            editRecipeMutation,
            fullRecipe,
            createRecipeMutation
          )
        }
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Enter A Name.."
          name="name"
          onChange={handleChange}
          value={recipe.name}
          required
          autoFocus
          className={inputClassName}
        />
        <textarea
          name="instruction"
          placeholder="Instruction.."
          cols="20"
          rows="3"
          value={recipe.instruction}
          onChange={handleChange}
          required
          className={inputClassName}
        />
        <button
          onClick={() => addIngredient(recipe, setRecipe)}
          type="button"
          required
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Ingredient
        </button>
        {recipe.ingredients.map((ingredient, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              name="ingredients"
              value={ingredient}
              onChange={(event) =>
                handleIngredientChange(event, index, recipe, setRecipe)
              }
              className={inputClassName}
            />
            <button
              type="button"
              onClick={() => deleteIngredient(index, recipe, setRecipe)}
              className="px-2 py-1 text-red-600 hover:text-red-800"
            >
              X
            </button>
          </div>
        ))}
        <input
          type="text"
          placeholder="Enter A Image URL.."
          name="imageUrl"
          onChange={handleChange}
          required
          value={recipe.imageUrl}
          className={inputClassName}
        />
        <select onChange={handleChange} name="kosherType" required>
          <option
            disabled={!fullRecipe?.kosherType}
            value={""}
            selected={!fullRecipe}
          >
            Kosher Type
          </option>
          <option value={"parve"} selected={fullRecipe?.kosherType === "parve"}>
            Parve
          </option>
          <option value={"dairy"} selected={fullRecipe?.kosherType === "dairy"}>
            Dairy
          </option>
          <option value={"meat"} selected={fullRecipe?.kosherType === "meat"}>
            Meat
          </option>
        </select>

        <input
          type="number"
          placeholder="Cooking Time (minutes).."
          name="cookingTime"
          onChange={handleChange}
          required
          value={recipe.cookingTime}
          className={inputClassName}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={createRecipeMutation.isLoading}
        >
          {createRecipeMutation.isLoading
            ? location.pathname === ROUTES.EDIT_RECIPE
              ? "Editing"
              : "Creating..."
            : "Submit"}
        </button>
      </form>
    </div>
  );
};
