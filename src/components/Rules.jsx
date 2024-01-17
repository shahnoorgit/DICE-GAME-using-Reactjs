import styles from "./Rules.module.css";
function Rule() {
  return (
    <div className={styles.container}>
      <h4 id={styles.h4}>How to play dice game</h4>
      <p style={{ textAlign: "left" }} id={styles.para}>
        Select any number
        <br />
        Click on dice image
        <br />
        after click on dice if selected number is equal to dice number you will
        get same point as dice
        <br />
        if you get wrong guess then 2 point will be dedcuted
      </p>
    </div>
  );
}

export default Rule;
