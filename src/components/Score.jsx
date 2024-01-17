import styles from "./score.module.css";
import { useState } from "react";
function Score({
  MyNum,
  MyScore,
  error,
  clickedNumber,
  setClickedNumber,
  handleClick,
}) {
  const num = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.Dashboard}>
      <div className={styles.score}>
        <h1>{MyScore}</h1>
      </div>
      <div className={styles.buttonspace}>
        <p id={styles.error}>{error}</p>
        {num.map((num) => (
          <button
            key={num}
            className={clickedNumber === num ? styles.clickedbtn : styles.btns}
            onClick={(event) => handleClick(num, event)}
          >
            {num}
          </button>
        ))}
      </div>
      <div className={styles.message}>Select number</div>
    </div>
  );
}

export default Score;
