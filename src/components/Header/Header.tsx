import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Header Content */}
      <div className={styles.headerContent}>
        <h1>Order your favourite food here</h1>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our misson
          is to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </header>
  );
};

export default Header;
