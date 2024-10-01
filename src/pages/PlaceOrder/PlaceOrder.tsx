import { useContext } from "react";
import styles from "./placeOrder.module.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const context = useContext(StoreContext);
  if(!context) return;

  const {getTotalCartAmount} = context;

  return (
    <form className={styles.placeOrder}>
      <div className={styles.placeOrderLeft}>
        <p className={styles.title}>Delivery Information</p>
        <div className={styles.multiFields}>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className={styles.multiFields}>
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>

      <div className={styles.placeOrderRight}>
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
              <p>{getTotalCartAmount() ? 30 : 0} Baht</p>
            </div>
            <hr />
            <div className={styles.cartTotalDetails}>
              <strong>Total</strong>
              <strong>
                {getTotalCartAmount() ? getTotalCartAmount() + 30 : 0} Baht
              </strong>
            </div>
          </div>
          <button>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
