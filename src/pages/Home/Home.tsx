import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import styles from "./home.module.css";
import { FoodType } from "../../interfaces";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home = () => {
  // Category state
  const [category, setCategory] = useState<FoodType>("All");
  
  return (
    <div className={styles.home}>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />

      <FoodDisplay category={category} />
    </div>
  )
}

export default Home