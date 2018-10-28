import React from "react";
import "./Switch.css";
const Switch = props => {
  const switchOn = props.onOff ? "outer outer-active" : "outer outer-inactive";
  console.log(props.onOff);
  return (
    <div className={switchOn} onClick={props.switch}>
      <div className="inner" />
    </div>
  );
};
export default Switch;
