import { useState } from "react";
import DisplayGame from "./DIsplayGame";
import styles from "./Play.module.css";
import Score from "./Score";
function Play() {
  const [clickedNumber, setClickedNumber] = useState(null);
  const [error, seterror] = useState("  ");
  const [Dice, setDice] = useState(1);
  const [MyScore, setScore] = useState(0);
  const [num, setnum] = useState(0);
  const handleClick = (clickedNum) => {
    setClickedNumber(clickedNum);
    MyNum(clickedNum);
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const MyNum = (num) => {
    setnum(num);
    seterror(" ");
  };
  const MainPlay = () => {
    if (num === 0) {
      seterror("plz select a number from buttons =>");
      return;
    }
    setClickedNumber(null);
    setnum(0);
    const Ran = generateRandomNumber(1, 7);
    console.log(Ran);
    setDice((prev) => Ran);
    console.log(num, Ran);
    if (num === Ran) {
      setScore((prev) => prev + Ran);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  const Reset = () => {
    setScore(0);
  };
  return (
    <div className={styles.main}>
      <center>
        <Score
          MyScore={MyScore}
          MyNum={MyNum}
          error={error}
          seterror={seterror}
          clickedNumber={clickedNumber}
          setClickedNumber={setClickedNumber}
          handleClick={handleClick}
        />
        <DisplayGame Reset={Reset} dice={Dice} Main={MainPlay} />
      </center>
    </div>
  );
}
export default Play;
