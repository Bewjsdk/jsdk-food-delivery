import styles from "./navbar.module.css";
import { IoFastFood, IoSearch, IoBasket } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav className={styles.navbar}> 
      {/* Food delivery Logo */}
      <div className={styles.logo}>
        <a href="#">
          <IoFastFood size={32} />
          <span>JSDKFOOD</span>
        </a>
      </div>

      {/* Navbar Menu */}
      <ul className={styles.navMenu}>
        <li>home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>contact us</li>
      </ul>

      {/* Navbar right side */}
      <div className={styles.navRight}>
        {/* Search icon */}
        <button>
          <IoSearch size={24} />
        </button>
        {/* Basket icon */}
        <div className={styles.basket}>
          <IoBasket size={24} />
          <div className={styles.basketNoti}></div>
        </div>
        {/* Sign in */}
        <button>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar