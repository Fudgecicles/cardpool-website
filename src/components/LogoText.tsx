import { FunctionComponent } from "react";
import styled from "styled-components";
import CardStyled from "./CardText";
import PoolStyled from "./PoolText";
import React from "react";
import Logo from "../assets/Logo.svg";

const ClickableSpan = styled.span<LogoProps>`
  cursor: ${(props) => (props.clickable ? "pointer" : "auto")};
`;

const LogoStyle = styled.img`
  width: 40px;
  margin-right: 10px;
`;

type LogoProps = {
  clickable?: boolean;
  displayLogoImage?: boolean;
};

const LogoText: FunctionComponent<LogoProps> = (props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ClickableSpan
      clickable={props.clickable}
      onClick={() => props.clickable && scrollToTop()}
    >
      {props.displayLogoImage && <LogoStyle src={Logo} />}

      <CardStyled>card</CardStyled>
      <PoolStyled>pool</PoolStyled>
    </ClickableSpan>
  );
};

export default LogoText;
