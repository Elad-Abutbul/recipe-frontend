import { recipeService } from "../../../services";
import { apiErrors } from "../../../Functions";
import { useQuery } from "react-query";

const useGetAllRecipes = () => {
  const fetchGetAllRecipes = async () => {
    try {
      const res = await recipeService.getAll();
      return res.data;
    } catch (error) {
      apiErrors(error);
    }
  };
  const { isLoading, data: recipes } = useQuery(
    ["allRecipes"],
    fetchGetAllRecipes
  );

  return { isLoading, recipes };
};

export default useGetAllRecipes;
