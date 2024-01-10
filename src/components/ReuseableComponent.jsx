/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import SampleCard from "./SampleCard";
import ReuseableButton from "./ReuseableButton";

const ReuseableComponent = () => {
  const onButtonClick = () => {
    console.log("Button clicked");
  };
  return (
    <div>
      <SampleCard
        card
        cardColClass={"col-sm-3"}
        cardBorder={"card border-default mx-1"}
        cardTitle={"First Card"}
        cardText={"Sample Card 1"}>
        <ReuseableButton
          className={"btn btn-primary"}
          onClick={onButtonClick}
          buttonText='Button 1'
        />
          </SampleCard>
          
      /** Second Customized Reusable Component **/
      <SampleCard
        cardColClass={"col-sm-3"}
        cardBorder={"card border-info mx-1"}
        cardTitle={"Second Card"}
        cardText={"Sample Card 2"}>
        <ReuseableButton
          className={"btn btn-secondary"}
          onClick={onButtonClick}
          buttonText='Button 2'
        />
          </SampleCard>
          
          /** Third Customized Component  **/
      
      <SampleCard 
       cardColClass={"col-sm-3"}
       cardBorder={"card border-primary mx-1"}
       cardTitle={"Third Card"}
       cardText={"Sample Card 3" }
   > 
   <ReuseableButton className={"btn btn-info"} onClick={onButtonClick} buttonText="Button 3"/>
     Button 3
   </SampleCard>
     
    </div>
  );
};

export default ReuseableComponent;
