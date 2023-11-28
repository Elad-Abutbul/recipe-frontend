export const SelectRecipesType = ({ setCategory }) => {
  const handleCategoryChange = (event) => {
    const selectedCategory = event?.target?.value || 'all-recipes';

    switch (selectedCategory) {
      case "all-recipes":
        setCategory("all-recipes");
        break;
      case "meat-recipes":
        setCategory("meat");
        break;
      case "dairy-recipes":
        setCategory("dairy");
        break;
      case "parve-recipes":
        setCategory("parve");
        break;
      default:
        break;
    }
  };

  return (
    <select
      name="recipeCategory"
      onChange={handleCategoryChange}
      className="border border-gray-300 bg-white px-2 py-1 rounded-md focus:outline-none focus:border-blue-500"
    >
      <option value="all-recipes">All Recipes</option>
      <option value="meat-recipes">Meat Recipes</option>
      <option value="dairy-recipes">Dairy Recipes</option>
      <option value="parve-recipes">Parve Recipes</option>
    </select>
  );
};
