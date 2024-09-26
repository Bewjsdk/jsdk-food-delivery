import { createContext, ReactNode, useEffect, useState } from "react";
import { foodLists } from "../constants";
import { StoreContextType } from "../interfaces";

interface StoreContextProviderProps {
  children: ReactNode;
}

export const StoreContext = createContext<StoreContextType | null>(null);

const StoreContextProvider = ({ children }: StoreContextProviderProps) => {
  
  const [cartItems, setCartItems] = useState<{ [key: number]: number}>({});

  // Add To Cart
  const addToCart = (itemId: number) => {
    if (!cartItems[itemId]) {
      setCartItems(prev => ({...prev, [itemId]: 1}))
    }
    else {
      setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1}))
    }
  } 

  // Remove To Cart
  const removeFromCart = (itemId: number) => {
    setCartItems(prev => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])


  const contextValue = {
    foodLists,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;