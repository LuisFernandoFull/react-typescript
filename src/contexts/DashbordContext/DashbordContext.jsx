import { createContext, useContext } from "react";
import { AuthenticationContext } from "../UserContext/AuthContext";

export const DashbordContext = createContext({});

export const DashbordPrivider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  return (
    <DashbordContext.Provider value={{ user }}>
      {children}
    </DashbordContext.Provider>
  );
};
