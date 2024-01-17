import { useState } from "react";
import styles from "./Displaygame.module.css";
import Rule from "./Rules";
function DisplayGame({ dice, Random, Reset, Main }) {
  const [showrule, setshowrule] = useState(false);
  const onshow = () => {
    setshowrule(!showrule);
  };

  return (
    <div className={styles.Container}>
      <div className="mainfun">
        <div onClick={() => Main()} className={styles.Dice}>
          <img
            style={{ width: "220px" }}
            src={`./Images/dice_${dice}.png`}
            alt=""
          />
        </div>
        <div className={styles.content}>
          {" "}
          <h4>Click on Dice to roll</h4>
          <button onClick={() => Reset()} className={styles.setscore}>
            Reset Score
          </button>
          <button
            onClick={onshow}
            style={{ backgroundColor: "black", color: "white" }}
            className={styles.setscore}
          >
            Show Rules
          </button>
          {showrule && <Rule />}
        </div>
      </div>
    </div>
  );
}
export default DisplayGame;
