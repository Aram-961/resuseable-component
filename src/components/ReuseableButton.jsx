import React from "react";

const ReuseableButton = (props) => {
  return (
    <div>
      <button className={props.className} onClick={props.onClick}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default ReuseableButton;
