import { Dispatch, SetStateAction } from "react";
import { menuLists } from "../../constants";
import styles from "./exploreMenu.module.css";
import { FoodType } from "../../interfaces";

interface ExploreMenuProps {
  category: FoodType;
  setCategory: Dispatch<SetStateAction<FoodType>>;
 }

const ExploreMenu = ({ category, setCategory }: ExploreMenuProps) => {
  
  // Handle selected category
  const handleSelected = (currentCategory: FoodType) => {
    setCategory(prev => prev === currentCategory ? "All" : currentCategory);
  }

  return (
    <div className={styles.exploreMenu} id="explore-menu">
      {/* Explore menu topic */}
      <h2>Explore our menu</h2>
      
      {/* Description Text*/}
      <p className={styles.exploreMenuText}>
        Choose from a diverse menu featuring a delectable array of dishes.
        Our mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>

      {/* Menu lists */}
      <div className={styles.exploreMenuLists}>
        {/* Each menu list */}
        {menuLists.map(menu => (
          <div 
            key={menu.id} 
            className={styles.exploreMenuListItems}
            onClick={() => handleSelected(menu.type as FoodType)}
          >
            {/* Menu icon */}
            <img 
              src={menu.icon} 
              alt={`${menu.type} icon`} 
              className={`icon ${category === menu.type ? "active" : ""}`}
            />
            <p>{menu.type}</p>
          </div>
        ))}
      </div>

      <hr />
    </div>
  )
}

export default ExploreMenu