import { useQuery } from "react-query";
import { recipesApiService } from "../../services";
import { apiErrors, getUser } from "../../Functions";

const useGetUserStars = (recipeId, mode) => {
  const user = getUser();
  const userStar = async () => {
    try {
      const res = await recipesApiService.getUserStars(recipeId, user.id);
      return res.data;
    } catch (error) {
      apiErrors(error);
    }
  };
  const { isLoading, data } = useQuery({
    queryKey: ["userRating", recipeId],
    queryFn: userStar,
    // enabled: mode === "full-recipe",
  });

  return { isLoading, data };
};
export default useGetUserStars;
