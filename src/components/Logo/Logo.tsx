import { IoFastFood } from "react-icons/io5";
import styles from "./logo.module.css";


const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href="#">
        <span>
          <IoFastFood size={40} />
        </span>
        <span>JSDKFOOD</span>
      </a>
    </div>
  );
};

export default Logo;
