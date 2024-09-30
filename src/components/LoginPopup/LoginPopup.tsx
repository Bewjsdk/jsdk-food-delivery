import { Dispatch, SetStateAction, useState } from "react";
import styles from "./loginpopup.module.css";

interface LoginPopupProps {
  setShowLogin: Dispatch<SetStateAction<boolean>>;
}

type LoginState = "Sign Up" | "Login";

const LoginPopup = ({ setShowLogin }: LoginPopupProps) => {
  const [currentState, setCurrentState] = useState<LoginState>("Sign Up");

  return (
    <div className={styles.loginPopup}>
      {/* Login form */}
      <form className={styles.loginForm}>
        {/* Form title */}
        <div className={styles.loginTitle}>
          <h2>{currentState}</h2>
          <button onClick={() => setShowLogin(false)}>X</button>
        </div>

        {/* Form inputs */}
        <div className={styles.loginInputs}>
          {currentState === "Sign Up" ? (
            <input type="text" placeholder="Username" required />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        {/* Button for Create account or login */}
        <button type="button" className={styles.submitBtn}>
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>

        {/* Agree condition check */}
        <div className={styles.conditionCheck}>
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        
        {/* Switch to Sign Up or Login */}
        {currentState === "Sign Up" ? (
          <p>
            Alreay have an account? 
            <button type="button" onClick={() => setCurrentState("Login")}>Login</button>
          </p>
        ) : (
          <p>
            Create a new account? 
            <button type="button" onClick={() => setCurrentState("Sign Up")}>Click here</button>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
