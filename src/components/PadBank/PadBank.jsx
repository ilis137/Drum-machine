import React from "react";
import Pad from "./pad/pad";
const PadBank = props => {
  const arr = props.bank;
  return arr.map(obj => {
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
};
export default PadBank;
