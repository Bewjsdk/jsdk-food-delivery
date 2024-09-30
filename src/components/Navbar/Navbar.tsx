import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { IoSearch, IoBasket } from "react-icons/io5";
import { navbarMenu } from "../../constants";
import Logo from "../Logo/Logo";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  setShowLogin: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setShowLogin }: NavbarProps) => {
  // Current menu path
  const [menuPath, setMenuPath] = useState("home");

  // Location with hash
  const {hash} = useLocation();

  // When id bookmark change
  useEffect(() => {
    if(hash) {
      const element = document.querySelector(hash);
      
      if(!element) return;

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
            <Link to={menu.path} onClick={() => setMenuPath(menu.label)}>{menu.label}</Link>
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
          className={styles.signIn}
          onClick={() => setShowLogin(true)}
        >
          Sign in
        </button>
      </div>
    </nav>
  )
}

export default Navbar