import { localStorageService } from "../../services"

export const getUserId = () => {
     return localStorageService.getItem("userId")
}