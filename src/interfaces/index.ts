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
    foodLists: FoodListType[];
  };
