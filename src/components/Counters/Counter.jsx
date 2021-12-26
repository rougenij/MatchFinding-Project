import React from "react";
import "./counter.css";

function Counter(props) {
  return (
    <span className={`counter  ${props.givenClassName}`}>
      <img src={props.imgURL} alt="emoji" className="counter-img" />
      {props.value}
    </span>
  );
}

export default Counter;
