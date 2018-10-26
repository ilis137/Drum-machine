import React from "react";
const Switch = props => {
  return (
    <div className="container">
      <div className="toggle " onClick={props.handleBank}>
        <div className="inner-circle" />
      </div>
    </div>
  );
};
export default Switch;
