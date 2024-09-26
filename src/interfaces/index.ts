import { Dispatch, SetStateAction } from "react";

export type FoodType =
  | "Fast Food"
  | "Noodles"
  | "Drinks"
  | "Thai Food"
  | "Sea Food"
  | "Desserts"
  | "Salad"
  | "Sandwich"
  | "All";

  export type FoodTypeNotAll = Exclude<FoodType, "All">

  export type FoodListType = {
    id: number,
    name: string,
    image: string,
    price: number,
    ratings: number,
    description: string,
    category: FoodTypeNotAll[]
  }

  export type StoreContextType = {
    foodLists: FoodListType[],
    cartItems: {
      [key: number]: number;
    },
    setCartItems: Dispatch<SetStateAction<{
      [key: number]: number;
    }>>,
    addToCart: (itemId: number) => void,
    removeFromCart: (itemId: number) => void,
  };
