import React from "react";
import "./button.css";
function Button(props) {
 
    return (
      <div className="button" data-testid="button">
        {props.label}
      </div>
    );
  }
export default Button