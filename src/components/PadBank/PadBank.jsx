import React from "react";
import Pad from "./pad/pad";
import "./PadBank.css";
const PadBank = props => {
  const arr = props.bank;
  const padBank = arr.map(obj => {
    return (
      <Pad
        padId={obj.id}
        keyCode={obj.keyCode}
        keyTrigger={obj.keyTrigger}
        sound={obj.url}
        power={props.power}
        playSound={props.playSound}
      />
    );
  });
  return <div className="PadBank">{padBank}</div>;
};

export default PadBank;
