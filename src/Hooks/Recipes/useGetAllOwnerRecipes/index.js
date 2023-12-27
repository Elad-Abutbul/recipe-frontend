import { recipesApiService } from "../../../services";
import { apiErrors, getUser } from "../../../Functions";
import { useQuery } from "react-query";
import { enqueueSnackbar } from "notistack";

const useGetAllOwnerRecipes = (category, page) => {
  const user = getUser();
  const getAllOwnerRecipes = async () => {
    try {
      const res = await recipesApiService.getAllOwnerRecipes(
        user.id,
        category,
        page
      );
      if (res.data.message)
        return enqueueSnackbar(res.data.message, { variant: "error" });
      console.log(res.data);
      return res.data;
    } catch (error) {
      apiErrors(error);
    }
  };
  const { isLoading, data } = useQuery(
    ["allOwnerRecipes", category, page],
    getAllOwnerRecipes
  );
  return { isLoading, data };
};
export default useGetAllOwnerRecipes;
