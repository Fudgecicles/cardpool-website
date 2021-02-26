import React from "react";
import Feature from "../Feature";
import control from "../../assets/control.png";
import PoolText from "../PoolText";
import CardText from "../CardText";

function FeatureFour() {
  return (
    <Feature
      header={
        <>
          Maintain full control <br />
          over <CardText>your</CardText> <PoolText>money</PoolText>
        </>
      }
      paragraph={
        <>
          We've made sure instant split payments cannot be abused. If a friend
          makes an unauthorized purchase with our card, deny it and we'll return
          all your funds, no questions asked.
        </>
      }
      image={control}
      alignment="right"
    ></Feature>
  );
}

export default FeatureFour;
