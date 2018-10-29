import React from "react";
import Pad from "./pad/pad";
import "./PadBank.css";
const PadBank = props => {
  const arr = props.bank;
  const padBank = arr.map(obj => {
    return (
      <Pad
        key={obj.keyCode}
        padId={obj.id}
        keyCode={obj.keyCode}
        keyTrigger={obj.keyTrigger}
        sound={obj.url}
        power={props.power}
        playSound={e => {
          props.playSound(e);
          console.log("playing sound");
        }}
      />
    );
  });
  return <div className="PadBank">{padBank}</div>;
};

export default PadBank;
