import React, { FunctionComponent } from "react";
import styled from "styled-components";
import useIsMobile from "../hooks/UseIsMobile";

const CardBackground = styled.div<LayoutProps>`
  width: 100%;

  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  display: flex;
  flex-direction: ${(props) =>
    props.mobile
      ? "column"
      : props.alignment === "left"
      ? "row"
      : "row-reverse"};
  float: ${(props) => props.alignment};
  text-align: ${(props) => (props.mobile ? "center" : "left")};
  align-items: center;
`;

const TextContainer = styled.div<LayoutProps>`
  width: ${(props) => (props.mobile ? "100%" : "50%")};
  margin-left: ${(props) =>
    props.mobile ? "0" : props.alignment === "left" ? "0" : "50px"};
  margin-right: ${(props) =>
    props.mobile ? "0" : props.alignment === "left" ? "50px" : "0px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageContainer = styled.div<LayoutProps>`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${(props) =>
    props.mobile ? "0" : props.alignment === "left" ? "50px" : "0"};
  margin-right: ${(props) =>
    props.mobile ? "0" : props.alignment === "left" ? "0" : "50px"};
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: scale-down;
`;

type FeatureProps = {
  alignment: string;
  header: React.ReactNode;
  paragraph: React.ReactNode;
  image: string;
  backgroundColor?: string;
};

type LayoutProps = {
  alignment: string;
  backgroundColor?: string;
  mobile: boolean;
};

const StyledText = styled.p`
  font-size: 22px;
`;

const Feature: FunctionComponent<FeatureProps> = (props) => {
  const mobile = useIsMobile();

  return (
    <CardBackground
      id="about"
      backgroundColor={props.backgroundColor}
      mobile={mobile}
      alignment={props.alignment}
    >
      <TextContainer alignment={props.alignment} mobile={mobile}>
        <h3>{props.header}</h3>
        <StyledText>{props.paragraph}</StyledText>
      </TextContainer>
      <ImageContainer mobile={mobile} alignment={props.alignment}>
        <StyledImage src={props.image} />
      </ImageContainer>
    </CardBackground>
  );
};

export default Feature;
