import React from "react";
import "./cardscore.css";


//stateless component
const cardscore = props => (
  <div className="gameScore">
    <h2 className="score">Your Score: {props.total}</h2>
    <h2 className="status">{props.status}</h2>
  </div>
);

export default cardscore;
