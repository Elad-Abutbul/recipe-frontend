import { AiOutlineClose } from 'react-icons/ai';

export const ShowFullRecipe = ({ recipe, onClose }) => {
  return (
    <div
      className="fixed bg-gray-600 bg-opacity-40 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
        style={{ overflowY: 'scroll' }}
      >
        <AiOutlineClose
          className="absolute right-6 top-4 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-black text-white rounded-lg">
          {recipe.name}
        </h2>
        <div className="my-2">
          {recipe.ingredients.map((ingredient, index) => (
            <h3 className="w-fit" key={index}>
              {ingredient}
            </h3>
          ))}
        </div>
        <p>{recipe.instruction}</p>
        <p className="mt-5 text-gray-800">
          Cooking Time: {recipe.cookingTime} (minutes)
        </p>
      </div>
    </div>
  );
};
