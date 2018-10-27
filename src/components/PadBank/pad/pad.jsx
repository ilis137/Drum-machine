import React from "react";
import "./pad.css";
const Pad = props => {
  return (
    <button
      className="pad"
      onClick={props.playSound}
      onKeyDown={props.playSound}
      value={props.sound}
      id={props.padId}
    >
      {props.keyTrigger}
    </button>
  );
};
export default Pad;
