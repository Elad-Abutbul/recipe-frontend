import { recipeService } from "../../../services";
import { apiErrors } from "../../../Functions";
import { useQuery } from "react-query";

const useGetHomeRecipes = (category, page) => {
  const getHomeRecipes = async () => {
    try {
      const res = await recipeService.getRecipes(category, page);
      return res.data;
    } catch (error) {
      apiErrors(error);
    }
  };

  const { isLoading, data } = useQuery({
    queryFn: getHomeRecipes,
    queryKey: ["home", category, page],
  });

  return { isLoading, data };
};

export default useGetHomeRecipes;
