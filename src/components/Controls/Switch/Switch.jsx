import React from "react";
import "./Switch.css";
const Switch = props => {
  const switchOn = props.onOff ? "outer outer-active" : "outer outer-inactive";
  return (
    <div className="outer outer-inactive" onClick={props.switch}>
      <div className="inner" onClick={props.handleBank} />
    </div>
  );
};
export default Switch;
