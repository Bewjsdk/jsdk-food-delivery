import { IoFastFood } from "react-icons/io5";
import styles from "./logo.module.css";
import { Link } from "react-router-dom";


const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to={"/"}>
        <span>
          <IoFastFood size={40} />
        </span>
        <span>JSDKFOOD</span>
      </Link>
    </div>
  );
};

export default Logo;
