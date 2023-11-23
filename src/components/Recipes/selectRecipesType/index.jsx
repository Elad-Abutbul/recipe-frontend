export const SelectRecipesType = ({setCategory}) => {
  const handleCategoryChange = (event) => {
    const category = event?.target?.value || 'all-recipes'
    setCategory(category);
    switch (category) {
      case "all-recipes":
        setCategory("all-recipes")
        break;
      case "meat-recipes":
        setCategory("meat")
        break;
      case "dairy-recipes":
        setCategory("dairy")
        break;
      case "parve-recipes":
        setCategory("parve")
        break;
      default:
        break;
    }
  };
  return (
    <select name="recipeCategory" onChange={handleCategoryChange}>
      <option value="all-recipes" selected>All Recipes</option>
      <option value="meat-recipes">Meat Recipes</option>
      <option value="dairy-recipes">Dairy Recipes</option>
      <option value="parve-recipes">Parve Recipes</option>
    </select>
  );
};
