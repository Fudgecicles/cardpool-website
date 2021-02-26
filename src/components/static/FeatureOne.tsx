import React from "react";
import Feature from "../Feature";
import pay from "../../assets/credit.png";
import PoolText from "../PoolText";
import CardText from "../CardText";

function FeatureOne() {
  return (
    <Feature
      header={
        <>
          Pay as a group with <br />
          the <PoolText>pool</PoolText>
          <CardText>card</CardText>
        </>
      }
      paragraph={
        <>
          {" "}
          Use our card at checkout and instantly split your purchase. Never
          front a payment, manually split a transaction or figure out who pays
          what ever again.
        </>
      }
      image={pay}
      alignment="left"
    ></Feature>
  );
}

export default FeatureOne;
