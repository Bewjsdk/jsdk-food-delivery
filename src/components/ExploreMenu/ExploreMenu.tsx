import { menuLists } from "../../constants";
import styles from "./exploreMenu.module.css";

const ExploreMenu = () => {

  return (
    <div className={styles.exploreMenu} id="explore-menu">
      {/* Explore menu topic */}
      <h2>Explore our menu</h2>
      
      {/* Description Text*/}
      <p className={styles.exploreMenuText}>
        Choose from a diverse menu featuring a delectable array of dishes.
        Our mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>

      {/* Menu lists */}
      <div className={styles.exploreMenuLists}>
        {/* Each menu list */}
        {menuLists.map(menu => (
          <div key={menu.id} className={styles.exploreMenuListItems}>
            {/* Menu icon */}
            <img src={menu.icon} alt={`${menu.type} icon`} className="icon"/>
            <p>{menu.type}</p>
          </div>
        ))}
      </div>

      <hr />
    </div>
  )
}

export default ExploreMenu