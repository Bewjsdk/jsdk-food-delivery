import { useContext, useState } from "react";
import { FoodListType } from "../../interfaces";
import Ratings from "../Ratings/Ratings";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

import styles from "./fooditem.module.css";
import { StoreContext } from "../../context/StoreContext";

interface FoodItemProps {
  foodData: FoodListType;
}

const FoodItem = ({ foodData }: FoodItemProps) => {
  // Food item properties
  const { id, name, image, price, description, category, ratings } = foodData;

  // Add item to cart state
  const storeContext = useContext(StoreContext);

  if (!storeContext) return <div>Loading...</div>

  const {cartItems, addToCart, removeFromCart} = storeContext;

  // Add item to cart
  const addItem = () => {
    addToCart(id)
  };

  // Remove item on cart
  const removeItem = () => {
    removeFromCart(id)
  };

  return (
    <div className={styles.foodItem}>
      {/* Food Image */}
      <figure className={styles.foodItemImage}>
        <img src={image} alt={`Picture of ${name}`} />
        {
          // Item = 0
          !cartItems[id] ? (
            <button className={styles.btnFirstAdd} onClick={addItem}>
              <IoMdAdd fontSize={20} />
            </button>
          ) : (
            // Item > 0
            <div className={styles.itemCountContainer}>
              {/* Remove Button */}
              <button onClick={removeItem} className={styles.removeBtn}>
                <IoMdRemove fontSize={20} />
              </button>
              {/* Show Item Count */}
              <p>{cartItems[id]}</p>

              {/* Add Button */}
              <button onClick={addItem} className={styles.addBtn}>
                <IoMdAdd fontSize={20} />
              </button>
            </div>
          )
        }
      </figure>

      {/* Food Item Information */}
      <div className={styles.foodItemInfo}>
        {/* Name & Rating */}
        <div className={styles.nameRating}>
          <p>{name}</p>
          <Ratings score={ratings} />
        </div>
        {/* Description */}
        <p className={styles.foodDesc}>{description}</p>
        {/* Price */}
        <p className={styles.foodPrice}>{`${price} Baht`}</p>
      </div>
    </div>
  );
};

export default FoodItem;
