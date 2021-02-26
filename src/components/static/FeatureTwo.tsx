import React from "react";
import Feature from "../Feature";
import credit from "../../assets/pay.png";
import PoolText from "../PoolText";
import CardText from "../CardText";

function FeatureTwo() {
  return (
    <Feature
      header={
        <>
          Send cash on credit <br /> with <CardText>zero</CardText>{" "}
          <PoolText>fees</PoolText>
        </>
      }
      paragraph={
        <>
          Avoid awkward IOU's when you can't pay someone back. Let us spot you
          the cash and we'll help you build your credit score along the way.
        </>
      }
      image={credit}
      alignment="right"
    ></Feature>
  );
}

export default FeatureTwo;
