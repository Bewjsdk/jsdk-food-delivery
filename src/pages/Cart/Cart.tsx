import { useContext } from "react";
import styles from "./cart.module.css";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const context = useContext(StoreContext);
  if(!context) return;
  
  const { cartItems, foodLists, removeFromCart, getTotalCartAmount } = context;

  return (
    <div className={styles.cart}>
      <div className={styles.cartItems}>
        <div className={styles.cartItemsTitle}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {foodLists.map((item) => {
          if(cartItems[item.id] > 0) {
            return (
              <div>
                <div className={`${styles.cartItemsTitle} ${styles.cartItemsItem}`}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                  />
                  <p>{item.name}</p>
                  <p>{item.price} Baht</p>
                  <p>{cartItems[item.id]}</p>
                  <p>{item.price * cartItems[item.id]} Baht</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    <span className="cross">X</span>
                  </button>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>

      <div className={styles.cartBottom}>
        <div className={styles.cartTotal}>
          <h2>Cart Total</h2>
          <div>
            <div className={styles.cartTotalDetails}>
              <p>Subtotal</p>
              <p>{getTotalCartAmount()} Baht</p>
            </div>
            <hr />
            <div className={styles.cartTotalDetails}>
              <p>Delivery Fee</p>
              <p>{30} Baht</p>
            </div>
            <hr />
            <div className={styles.cartTotalDetails}>
              <strong>Total</strong>
              <strong>{getTotalCartAmount() + 30} Baht</strong>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className={styles.cartPromocode}>
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className={styles.cartPromocodeInput}>
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart