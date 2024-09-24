import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <ExploreMenu />
    </div>
  )
}

export default Home