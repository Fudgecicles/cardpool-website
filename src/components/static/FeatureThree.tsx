import React from "react";
import Feature from "../Feature";
import tools from "../../assets/tools.png";
import PoolText from "../PoolText";
import CardText from "../CardText";

function FeatureThree() {
  return (
    <Feature
      header={
        <>
          Use our elegant tools to <br />
          split costs <CardText>pain</CardText> <PoolText>free</PoolText>
        </>
      }
      paragraph={
        <>
          No one wants to figure out the dinner bill - so we made it easy. Use
          our tools to quickly create groups, itemize the purchase, and
          calculate who owes what.
        </>
      }
      image={tools}
      alignment="left"
    ></Feature>
  );
}

export default FeatureThree;
