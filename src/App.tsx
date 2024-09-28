import Navbar from "./components/Navbar/Navbar";
import styles from "./app.module.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className={styles.app}>
        <Navbar />
        <Home />
      </div>
      
      <Footer />
    </>
  );
};

export default App;
