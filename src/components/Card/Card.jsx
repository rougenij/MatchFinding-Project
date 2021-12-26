import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imgUrl} alt="img" className="card-img" />
      <p className="card-text">{props.text}</p>
    </div>
  );
};

export default Card;
