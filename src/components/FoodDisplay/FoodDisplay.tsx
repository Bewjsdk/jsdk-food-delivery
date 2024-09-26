import { useContext } from "react";
import styles from "./foodDisplay.module.css";
import { StoreContext } from "../../context/StoreContext";
import { FoodType } from "../../interfaces";
import FoodItem from "../FoodItem/FoodItem";

interface FoodDisplayProps {
  category: FoodType
}

const FoodDisplay = ({ category }: FoodDisplayProps) => {

  const context = useContext(StoreContext);
  
  if(!context) return <div>Loading...</div>

  const { foodLists } = context;

  console.log(category)
  
  return (
    <section className={styles.foodDisplay} id="foodDisplay">
      <h2>Top dishes near you</h2>
      {/* Food Lists */}
      <div className={styles.foodDisplayList}>
        {foodLists.map(item => (
          category === "All" || item.category.includes(category) ?
          <FoodItem 
            key={item.id}
            foodData={item}
          />
          : ""
        ))}
      </div>
    </section>
  )
}

export default FoodDisplay