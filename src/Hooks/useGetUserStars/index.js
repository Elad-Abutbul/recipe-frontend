import { useQuery } from "react-query";
import { recipeService } from "../../services";
import { apiErrors } from "../../Functions";

const useGetUserStars = (recipeId, userId) => {
  const userStar = async () => {
    try {
      const res = await recipeService.getUserStars(recipeId, userId);
      return res.data;
    } catch (error) {
      apiErrors(error);
    }
  };
  const { data, isLoading } = useQuery({
    queryKey: ["userRating", recipeId],
    queryFn: userStar,
  });

  return { data, isLoading };
};
export default useGetUserStars;
