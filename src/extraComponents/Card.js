import React from "react";
import "./card.css";

const Card = props => {
  return (
    <div className="container">
      <div>
        <img src={props.imagelink} alt="" />
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default Card;
