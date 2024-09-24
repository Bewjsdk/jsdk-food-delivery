import { menuListImages } from "../assets";

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