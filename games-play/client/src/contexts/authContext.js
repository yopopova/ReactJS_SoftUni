import { createContext } from "react";

const AuthContext = createContext();

// We can name contexts, if they are more than one.
AuthContext.displayName = 'AuthContext';

export default AuthContext;