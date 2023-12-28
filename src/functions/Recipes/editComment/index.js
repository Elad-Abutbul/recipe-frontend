import { apiErrors } from "../../Api";
import { API_URL } from "../../../constants";
import axiosInstance from "../../../axiosConfig";

export const editComment = async (commentId, comment) => {
  try {
    const res = await axiosInstance.post(API_URL.RECIPES.EDIT_COMMENT, {
      commentId,
      comment,
    });
    return res;
  } catch (error) {
    apiErrors(error);
  }
};
