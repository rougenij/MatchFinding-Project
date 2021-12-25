import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <div role={"button"} className="btn" onClick={props.handleClick}>
      {props.name}{" "}
      <img src={props.iconURL} alt="button-img" className="btn-img" />
    </div>
  );
};

export default Button;
