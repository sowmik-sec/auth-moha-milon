import { createContext } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const authInfo = { name: "nodi" };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
