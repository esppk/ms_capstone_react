import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = props => {
  return (
    <div className="container">
      <div>
        <Link to={`/products/${props.id}`}>
          <img src={props.imagelink} alt="" />
        </Link>
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default Card;
