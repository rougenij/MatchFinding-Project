import React from "react";
import "./counter.css";

function Counter(props) {
  return (
    <span className={`counter  ${props.givenClassName}`}>{props.value}</span>
  );
}

export default Counter;
