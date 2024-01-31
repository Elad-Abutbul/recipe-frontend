import { AiOutlineClose } from "react-icons/ai";
import { RatingStars, Comments } from "../../../components";
import { useRecipeContent } from "../../../Hooks";

export const FullRecipe = ({ recipeId, onClose = null, mode = "peek" }) => {
  const { data: recipe } = useRecipeContent(recipeId);
  const handleOuterClick = (event) => {
    event.stopPropagation();
    if (onClose) onClose();
  };

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8`}>
      <div
        className={`${
          mode === "peek" &&
          "fixed bg-gray-600 bg-opacity-40 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
        }`}
        onClick={handleOuterClick}
      >
        <div
          className={`${
            mode === "peek"
              ? "w-[600px] h-[400px] bg-white dark:bg-slate-800 rounded-xl p-4 flex flex-col relative overflow-y-auto gap-4"
              : "p-4"
          }`}
        >
          {mode === "peek" && (
            <AiOutlineClose
              className="absolute right-6 top-4 text-3xl text-red-600 cursor-pointer"
              onClick={onClose}
            />
          )}
          <h2 className="w-fit px-4 py-1 bg-black dark:bg-white dark:text-black text-white rounded-lg font-bold text-2xl">
            {recipe?.name}
          </h2>
          <div>
            <h2 className="font-bold text-lg dark:text-slate-300 underline">Ingredients</h2>
            {recipe?.ingredients?.map((ingredient, index) => (
              <h3 className="w-fit dark:text-white" key={index}>
                {ingredient}
              </h3>
            ))}
          </div>
          <div>
            <h2 className="font-bold text-lg  dark:text-slate-300 underline">Instruction</h2>
            <p className="dark:text-white">{recipe?.instruction}</p>
          </div>
          <div>
            <h2 className="font-bold text-lg  dark:text-slate-300 underline">Kosher Type</h2>
            <p className="mb-2 text-gray-800 dark:text-white">{recipe?.kosherType}</p>
          </div>
          <div>
            <h2 className="font-bold text-lg dark:text-slate-300 underline">Cooking Time</h2>
            <p className="mb-2 dark:text-white">
              {recipe?.cookingTime} (minutes)
            </p>
          </div>
          {mode !== "peek" && <RatingStars mode={mode} recipeId={recipeId} />}
        </div>
      </div>
      {mode !== "peek" && <Comments recipeId={recipeId} />}
    </div>
  );
};
