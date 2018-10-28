import React from "react";
import Switch from "./Switch/Switch";
import "./Controls.css";
const Controls = props => {
  return (
    <div className="controls">
      <div className="power-control">
        <p>Power</p>
        <Switch onOff={props.power} switch={props.powerChange} />
      </div>
      <div className="display">
        <p>
          Volume:
          {props.volume}
        </p>
      </div>
      <input
        type="range"
        id="volume"
        name="vol"
        min="0"
        max="1"
        step="0.01"
        onChange={e => props.adjustVolume(e)}
        value={props.volume / 100}
        className="volume"
      />
      <p>Bank</p>
      <Switch onOff={props.bank} switch={props.bankChange} />
    </div>
  );
};
export default Controls;
