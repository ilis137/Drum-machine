import React from "react";
import "./pad.css";
const Pad = props => {
  return (
    <button
      className="pad"
      onClick={e => {
        props.playSound(e);
        console.log("playing sound");
      }}
      value={props.sound}
      id={props.padId}
      disabled={!props.power}
    >
      {props.keyTrigger}
    </button>
  );
};
export default Pad;
