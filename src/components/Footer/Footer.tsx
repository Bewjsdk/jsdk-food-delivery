import Logo from "../Logo/Logo";
import styles from "./footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      {/* Footer Content */}
      <div className={styles.footerContent}>
        
        {/* Left Content */}
        <div className={styles.leftContent}>
          {/* Footer Logo */}
          <Logo />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            recusandae in id, architecto et dolorum. Iste amet voluptate earum
            aperiam?
          </p>
          {/* Social link icons */}
          <ul className={styles.socialIcons}>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>

        {/* Center Content */}
        <div className={styles.centerContent}>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right Content */}
        <div className={styles.rightContent}>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr />
      
      {/* Copyright */}
      <p className={styles.footerCopyright}>
        Copyright 2024 &copy; JSDKFOOD.com - All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
