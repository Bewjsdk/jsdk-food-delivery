import Navbar from "./components/Navbar/Navbar";
import styles from "./app.module.css";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
