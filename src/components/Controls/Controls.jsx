import React from "react";
import Switch from "./Switch/Switch";
import "./Controls.css";
const Controls = props => {
  return (
    <div className="controls">
      <div className="power-control">
        <p>Power</p>
        <Switch power={props.power} powerChange={props.powerChange} />
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
        onChange={props.adjustVolume}
        value={props.volume}
        className="volume"
      />
      <p>Bank</p>
      <Switch bank={props.bank} bankChange={props.handleBank} />
    </div>
  );
};
export default Controls;
