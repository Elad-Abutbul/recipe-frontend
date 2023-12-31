import { useAuth } from "../../../Hooks";
import { ROUTES } from "../../../constants";

export const useSignInOut = () => {
  const { register, login } = useAuth();

  const handleSubmit = async (event, location, username, password) => {
    event.preventDefault();
    if (username !== "" && password !== "") {
      if (location.pathname === ROUTES.REGISTER) {
        return register(username, password);
      }
      return await login(username, password);
    }
  };
  return { handleSubmit };
};
