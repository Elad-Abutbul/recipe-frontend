import { useAuth } from "../../Api";
import { ROUTES } from "../../constants";

const useSignInOut = () => {
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
export default useSignInOut;
