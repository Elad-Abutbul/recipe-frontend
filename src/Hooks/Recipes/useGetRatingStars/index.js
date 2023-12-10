import { useQuery } from "react-query";
import { apiErrors } from "../../../Functions";
import { recipeService } from "../../../services";

const useGetRatingStars = (recipeId, userId) => {
  const ratingStars = async () => {
    try {
  
    } catch (error) {
      apiErrors(error);
    }
  };
  const { data, isLoading } = useQuery({
    queryKey: ["ratingStars"],
    queryFn: ratingStars,
  });

  return { data, isLoading };
};
export default useGetRatingStars;
