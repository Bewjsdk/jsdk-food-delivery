import { menuListImages, allImages } from "../assets";
import { FoodListType } from "../interfaces";

// Menu list images
const {
  menu1, 
  menu2, 
  menu3, 
  menu4, 
  menu5, 
  menu6, 
  menu7, 
  menu8
} = menuListImages;

// All images foods
const {
  dessertImages, 
  drinkImages, 
  fastFoodImages, 
  noodlesImages, 
  saladImages, 
  sandwichIamges, 
  seafoodImages, 
  thaifoodImages
} = allImages;

// Navbar Menu
export const navbarMenu = [
  {
    label: 'home',
    path: '/',
  },
  {
    label: 'menu',
    path: '/menu',
  },
  {
    label:'mobile-app',
    path: '/mobile-app',
  },
  {
    label: 'contact us',
    path: '/contact-us',
  }
];

// 8 Menu lists 
export const menuLists = [
  {
    id: 1,
    type: "Fast Food",
    icon: menu1
  },
  {
    id: 2,
    type: "Drinks",
    icon: menu2
  },
  {
    id: 3,
    type: "Desserts",
    icon: menu3
  },
  {
    id: 4,
    type: "Noodles",
    icon: menu4
  },
  {
    id: 5,
    type: "Thai Food",
    icon: menu5
  },
  {
    id: 6,
    type: "Sea Food",
    icon: menu6
  },
  {
    id: 7,
    type: "Salad",
    icon: menu7
  },
  {
    id: 8,
    type: "Sandwich",
    icon: menu8
  }
];

// All Food lists
export const foodLists: FoodListType[] = [
  {
    id: 1,
    name: "Cheese Burger",
    image: fastFoodImages.fastfood1,
    price: 99,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Fast Food"]
  },
  {
    id: 2,
    name: "Chicken Burger",
    image: fastFoodImages.fastfood2,
    price: 79,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Fast Food"]
  },
  {
    id: 3,
    name: "French Fries",
    image: fastFoodImages.fastfood3,
    price: 59,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Fast Food"]
  },
  {
    id: 4,
    name: "Chicken Nuggets", 
    image: fastFoodImages.fastfood4,
    price: 69,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Fast Food"]
  },
  {
    id: 5,
    name: "Taco",
    image: fastFoodImages.fastfood5,
    price: 59,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Fast Food"]
  },
  {
    id: 6,
    name: "Iced tea",
    image: drinkImages.drink1,
    price: 49,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Drinks"]
  },
  {
    id: 7,
    name: "Coca Cola",
    image: drinkImages.drink2,
    price: 30,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Drinks"]
  },
  {
    id: 8,
    name: "Strawberry Milkshake",
    image: drinkImages.drink3,
    price: 79,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Drinks"]
  },
  {
    id: 9,
    name: "Lemonade",
    image: drinkImages.drink4,
    price: 89,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Drinks"]
  },
  {
    id: 10,
    name: "Coffee",
    image: drinkImages.drink5,
    price: 79,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Drinks"]
  },
  {
    id: 11,
    name: "Chocolate Cake",
    image: dessertImages.dessert1,
    price: 129,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Desserts"]
  },
  {
    id: 12,
    name: "Blueberry Pies",
    image: dessertImages.dessert2,
    price: 149,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Desserts"]
  },
  {
    id: 13,
    name: "Ice Cream",
    image: dessertImages.dessert3,
    price: 59,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Desserts"]
  },
  {
    id: 14,
    name: "Cookies",
    image: dessertImages.dessert4,
    price: 49,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Desserts"]
  },
  {
    id: 15,
    name: "Pastries",
    image: dessertImages.dessert5,
    price: 109,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Desserts"]
  },
  {
    id: 16,
    name: "Ramen",
    image: noodlesImages.noodles1,
    price: 89,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Noodles"]
  },
  {
    id: 17,
    name: "Spaghetti",
    image: noodlesImages.noodles1,
    price: 79,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Noodles"]
  },
  {
    id: 18,
    name: "Udon",
    image: noodlesImages.noodles1,
    price: 59,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Noodles"]
  },
  {
    id: 19,
    name: "Pad Thai",
    image: noodlesImages.noodles1,
    price: 39,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Noodles", "Thai Food"]
  },
  {
    id: 20,
    name: "Sour Soup",
    image: thaifoodImages.thaifood1,
    price: 120,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Thai Food"]
  },
  {
    id: 21,
    name: "Shrimp Fried Rice",
    image: thaifoodImages.thaifood2,
    price: 80,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Thai Food"]
  },
  {
    id: 22,
    name: "Rice topped Stir-fried Seafood and Basil + fried egg",
    image: thaifoodImages.thaifood3,
    price: 130,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Thai Food", "Sea Food"]
  },
  {
    id: 23,
    name: "Somtum seafood",
    image: thaifoodImages.thaifood4,
    price: 120,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Thai Food", "Sea Food"]
  },
  {
    id: 24,
    name: "Somtum with crab and fermented fish",
    image: thaifoodImages.thaifood5,
    price: 50,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Thai Food"]
  },
  {
    id: 25,
    name: "Grilled Salmon",
    image: seafoodImages.seafood1,
    price: 150,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Sea Food"]
  },
  {
    id: 26,
    name: "Baked Shrimp",
    image: seafoodImages.seafood2,
    price: 180,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Sea Food"]
  },
  {
    id: 27,
    name: "Lobsters",
    image: seafoodImages.seafood3,
    price: 599,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Sea Food"]
  },
  {
    id: 28,
    name: "Crabs",
    image: seafoodImages.seafood4,
    price: 399,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Sea Food"]
  },
  {
    id: 29,
    name: "Salad 1",
    image: saladImages.salad1,
    price: 109,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Salad"]
  },
  {
    id: 30,
    name: "Salad 2",
    image: saladImages.salad2,
    price: 99,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Salad"]
  },
  {
    id: 31,
    name: "Salad 3",
    image: saladImages.salad3,
    price: 109,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Salad"]
  },
  {
    id: 32,
    name: "Sandwich 1",
    image: sandwichIamges.sandwich1,
    price: 119,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Sandwich"]
  },
  {
    id: 33,
    name: "Sandwich 2",
    image: sandwichIamges.sandwich2,
    price: 129,
    description: "lorem ipsum dolor sit amet dolor sit amet",
    category: ["Sandwich"]
  }
]