import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Colors from "../config/Colors";

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor ?? Colors.card};
  &:hover {
    color: black;
    background-color: ${(props) => props.hoverBackgroundColor ?? Colors.pool};
  }
  font-weight: bold;
  font-family: "montserrat";
  padding: 10px 25px 10px 25px;
  white-space: nowrap;
  font-size: 22px;
  border-radius: 10px;
  border-width: 0;
  transition: 0.3s;
  color: ${Colors.darkGray};
  line-height: normal;
  margin: 10px 10px 10px 10px;
`;

type ButtonProps = {
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  marginLeft?: string;
  onClick?: any;
};

const Button: FunctionComponent<ButtonProps> = (props) => {
  return (
    <StyledButton
      backgroundColor={props.backgroundColor}
      hoverBackgroundColor={props.hoverBackgroundColor}
      marginLeft={props.marginLeft}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
