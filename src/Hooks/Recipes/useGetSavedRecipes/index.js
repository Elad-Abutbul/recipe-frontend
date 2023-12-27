import { usersApiService } from "../../../services";
import { apiErrors, getUser } from "../../../Functions";
import { useAuth } from "../../User";
import { useQuery } from "react-query";

const useGetSavedRecipes = (category = "all-recipes", page = 1, search) => {
  const user = getUser();
  const { checkIfUserAuth } = useAuth();
  const savedRecipes = async () => {
    if (checkIfUserAuth()) {
      try {
        const res = await usersApiService.savedRecipes(
          user.id,
          category,
          page,
          search
        );
        if (!res.data.message) return res.data;
      } catch (error) {
        apiErrors(error);
      }
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["savedRecipes", category, page],
    queryFn: savedRecipes,
  });

  return { data, isLoading };
};

export default useGetSavedRecipes;
