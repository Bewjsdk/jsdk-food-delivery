import { createContext, ReactNode } from "react";
import { foodLists } from "../constants";

interface StoreContextProviderProps {
  children: ReactNode;
}

export const StoreContext = createContext<object | null>(null);

const StoreContextProvider = ({ children }: StoreContextProviderProps) => {
  const contextValue = {
    foodLists
  };
  
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;