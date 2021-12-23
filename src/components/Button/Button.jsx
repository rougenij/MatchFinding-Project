import React from "react";

function Button(props) {
  return (
    <button className="btn" onClick={this.props.handleClick}>
      {this.props.btnName}
    </button>
  );
}

export default Button;
