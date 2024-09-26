import styles from "./ratings.module.css";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Ratings = ({ score }: { score: number }) => {
  // Stars
  const stars = Array(Math.floor(score)).fill("null");

  return score % 1 === 0 
  ? (
    // Ratings full stars
    <div className={styles.ratings}>
      {stars.map((_, index) => (
        <FaStar key={index} />
      ))}
    </div>
  ) 
  : (
    // Ratings with half stars
    <div className={styles.ratings}>
      {stars.map((_, index) => (
        <FaStar key={index} />
      ))}
      <FaStarHalf />
    </div>
  );
};

export default Ratings;
