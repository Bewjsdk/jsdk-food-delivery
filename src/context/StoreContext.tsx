import { createContext, ReactNode, useState } from "react";
import { foodLists } from "../constants";
import { StoreContextType } from "../interfaces";

interface StoreContextProviderProps {
  children: ReactNode;
}

export const StoreContext = createContext<StoreContextType | null>(null);

const StoreContextProvider = ({ children }: StoreContextProviderProps) => {
  const [cartItems, setCartItems] = useState<{ [key: number]: number }>({});

  // Add To Cart
  const addToCart = (itemId: number) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // Remove To Cart
  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = foodLists.find((product) => product.id === Number(item));
        totalAmount += itemInfo!.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    foodLists,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
