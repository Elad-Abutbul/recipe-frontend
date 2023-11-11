import { useQuery } from "react-query";
import { enqueueSnackbar } from "notistack";
import { recipeService } from "../../../services";

const useGetAllRecipes = () => {
  const fetchGetAllRecipes = async () => {
    try {
      const res = await recipeService.getAll();
      return res.data;
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Try Later", { variant: "error" });
    }
  };
  const { isLoading, data: recipes } = useQuery(
    ["allRecipes"],
    fetchGetAllRecipes
  );

  return { isLoading, recipes };
};

export default useGetAllRecipes;
