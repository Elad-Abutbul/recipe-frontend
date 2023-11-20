import { localStorageService } from "../../services";

export const getUser = () => {
  return localStorageService.getItem("user");
};
