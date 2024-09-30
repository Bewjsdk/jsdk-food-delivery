import Navbar from "./components/Navbar/Navbar";
import styles from "./app.module.css";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin && <LoginPopup setShowLogin={setShowLogin}/>}
      <div className={styles.app}>
        <Navbar setShowLogin={setShowLogin}/>
        <Home />
      </div>
      
      <Footer />
    </>
  );
};

export default App;
