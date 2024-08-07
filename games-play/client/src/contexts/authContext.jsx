import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import Path from '../paths';

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState('auth', {});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);
    console.log(result);

    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);
    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    // console.log(values);
    const result = await authService.register(values.email, values.password);

    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);
    navigate(Path.Home);
  };

  const logoutHandler = () => {
    setAuth({});
    // navigate(Path.Home);
    localStorage.removeItem("accessToken");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
  };

  return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>;
};

// We can name contexts, if they are more than one.
AuthContext.displayName = "AuthContext";

export default AuthContext;
