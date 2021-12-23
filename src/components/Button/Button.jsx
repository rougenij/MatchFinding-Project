import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <div role={"button"} className="btn" onClick={props.handleClick}>
      {props.name}
    </div>
  );
};

export default Button;
