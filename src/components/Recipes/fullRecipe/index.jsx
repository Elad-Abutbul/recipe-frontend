import { AiOutlineClose } from "react-icons/ai";
import { RatingStars } from "../..";

export const FullRecipe = ({
  recipe,
  onClose = null,
  mode = "peek",
  initialRating,
}) => {
  const handleOuterClick = (event) => {
    event.stopPropagation();
    if (onClose) onClose();
  };

  return (
    <div className="flex">
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
              ? "w-[600px] h-[400px] bg-white rounded-xl p-4 flex flex-col relative overflow-y-auto gap-4"
              : "p-4"
          }`}
        >
          {mode === "peek" && (
            <AiOutlineClose
              className="absolute right-6 top-4 text-3xl text-red-600 cursor-pointer"
              onClick={onClose}
            />
          )}
          <h2 className="w-fit px-4 py-1 bg-black text-white rounded-lg font-bold text-2xl">
            {recipe.name}
          </h2>
          <div className="">
            <h2 className="font-bold text-lg">Ingredients</h2>
            {recipe.ingredients.map((ingredient, index) => (
              <h3 className="w-fit" key={index}>
                {ingredient}
              </h3>
            ))}
          </div>
          <div className="">
            <h2 className="font-bold text-lg">Instruction</h2>
            <p>{recipe.instruction}</p>
          </div>
          <div>
            <h2 className="font-bold text-lg">Kosher Type</h2>
            <p className="mb-2 text-gray-800">{recipe.kosherType}</p>
          </div>
          <div>
            <h2 className="font-bold text-lg">Cooking Time</h2>
            <p className="mb-2 text-gray-800">{recipe.cookingTime} (minutes)</p>
          </div>
          {mode !== "peek" && (
            <RatingStars
              initialRating={initialRating}
              mode={mode}
              recipeId={recipe._id}
            />
          )}
        </div>
      </div>
      <div className="border shadow-md flex-grow mx-10 my-4 relative">
        <h1 className="text-center text-lg font-bold">Recipe Comments</h1>
        <hr />
        <div></div>
        <input
          type="search"
          placeholder="Enter Comment"
          className="absolute bottom-3 left-0 right-0 m-5 px-3 border-2 border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};
