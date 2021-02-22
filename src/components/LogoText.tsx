import { FunctionComponent } from "react";
import styled from "styled-components";
import CardStyled from "./CardText";
import PoolStyled from "./PoolText";
import React from "react";

const ClickableSpan = styled.span<ClickableProps>`
  cursor: ${(props) => (props.clickable ? "pointer" : "auto")};
`;

type ClickableProps = {
  clickable?: boolean;
};

const LogoText: FunctionComponent<ClickableProps> = (props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ClickableSpan
      clickable={props.clickable}
      onClick={() => props.clickable && scrollToTop()}
    >
      <CardStyled>card</CardStyled>
      <PoolStyled>pool</PoolStyled>
    </ClickableSpan>
  );
};

export default LogoText;
