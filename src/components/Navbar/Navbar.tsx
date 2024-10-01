import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Link, useLocation } from "react-router-dom";
import { IoSearch, IoBasket } from "react-icons/io5";

import { navbarMenu } from "../../constants";
import Logo from "../Logo/Logo";

import styles from "./navbar.module.css";
import { StoreContext } from "../../context/StoreContext";

// Navbar component props interface
interface NavbarProps {
  showLogin: boolean;
  setShowLogin: Dispatch<SetStateAction<boolean>>;
}

// Navbar component
const Navbar = ({ setShowLogin, showLogin }: NavbarProps) => {
  // Current menu path
  const [menuPath, setMenuPath] = useState("home");

  // Location with hash
  const { hash } = useLocation();

  const context = useContext(StoreContext);
  // When url location changed
  useEffect(() => {
    // scroll to #id section if exist
    if (hash) {
      const element = document.querySelector(hash);

      // Not found not scroll
      if (!element) return;

      // Found scroll to that element
      element.scrollIntoView();
    }
  }, [hash]);
  if (!context) return;

  const { getTotalCartAmount } = context;

  return (
    <nav className={styles.navbar}>
      {/* Website Logo */}
      <Logo />
      {/* Navbar Menu */}
      <ul className={styles.navMenu}>
        {/* Menu lists */}
        {navbarMenu.map((menu) => (
          <li
            key={menu.label}
            className={menu.label === menuPath ? styles.active : ""}
          >
            <Link to={menu.path} onClick={() => setMenuPath(menu.label)}>
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Navbar right side */}
      <div className={styles.navRight}>
        {/* Search icon */}
        <button>
          <IoSearch size={32} />
        </button>
        {/* Basket icon */}
        <Link className={styles.basket} to={"/cart"}>
          <IoBasket size={32} />
          {getTotalCartAmount() !== 0 && (
            <div className={styles.basketNoti}></div>
          )}
        </Link>
        {/* Sign in */}
        <button
          className={`${styles.signIn} ${showLogin && styles.active}`}
          onClick={() => setShowLogin(true)}
        >
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
