import { useNavigate } from "react-router-dom";

function DiceHome() {
  const navigate = useNavigate();
  const navtoPlay = () => {
    navigate("/playNow");
  };
  return (
    <div className="ConHome">
      <div className="playcon">
        <img src="./Images/dices 1.png" alt="Dicepic" />
        <div className="title">
          <h1 className="Heading">DICE GAME</h1>
          <button onClick={navtoPlay}>Play now</button>
        </div>
      </div>
    </div>
  );
}

export default DiceHome;
