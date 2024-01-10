import React from "react";

const SampleCard = (props) => {
  return (
    <div className={props.cardColClass}>
      <div className={props.cardBorder} style={props.cardStyle}>
        {props.image}
      </div>
      <div className='card__body'>
        <h5 className='card__title'>{props.cardTitle}</h5>
        <p className='card__text'>{props.cardText}</p>
          </div>
          {props.children}
    </div>
  );
};

export default SampleCard;
