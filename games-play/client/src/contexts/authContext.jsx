import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
    value
}) => {
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

// We can name contexts, if they are more than one.
AuthContext.displayName = 'AuthContext';

export default AuthContext;