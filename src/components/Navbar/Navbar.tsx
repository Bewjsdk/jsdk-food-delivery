import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoSearch, IoBasket } from "react-icons/io5";

import { navbarMenu } from "../../constants";
import Logo from "../Logo/Logo";

import styles from "./navbar.module.css";

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

  // When url location changed
  useEffect(() => {
    // scroll to #id section if exist
    if(hash) {
      const element = document.querySelector(hash);
      
      // Not found not scroll
      if(!element) return;

      // Found scroll to that element
      element.scrollIntoView();
    }
  }, [hash]);  

  return (
    <nav className={styles.navbar}> 
      {/* Website Logo */}
      <Logo />
      {/* Navbar Menu */}
      <ul className={styles.navMenu}>
        {/* Menu lists */}
        {navbarMenu.map(menu => (
          <li 
            key={menu.label}
            className={menu.label === menuPath ? styles.active : ""}
          >
            <Link 
              to={menu.path} 
              onClick={() => setMenuPath(menu.label)}
            >
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
        <button className={styles.basket}>
          <IoBasket size={32} />
          <div className={styles.basketNoti}></div>
        </button>
        {/* Sign in */}
        <button 
          className={`${styles.signIn} ${showLogin && styles.active}`}
          onClick={() => setShowLogin(true)}
        >
          Sign in
        </button>
      </div>
    </nav>
  )
}

export default Navbar