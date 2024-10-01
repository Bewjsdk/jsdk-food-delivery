import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

import styles from "./app.module.css";
import { Outlet } from "react-router-dom";

// Main App Component
const App = () => {

  // Show login popup state
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Show login popup if true */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin}/>}
      
      {/* Main app */}
      <div className={styles.app}>
        {/* Navbar */}
        <Navbar setShowLogin={setShowLogin} showLogin={showLogin}/>
        
        {/* Children of react router */}
        <Outlet />
      </div>
      
      {/* Footer section */}
      <Footer />
    </>
  );
};

export default App;
