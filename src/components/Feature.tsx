import React, { FunctionComponent } from "react";
import styled from "styled-components";
import useIsMobile from "../hooks/UseIsMobile";

const CardContainer = styled.div<StyleProps>`
  width: 100%;
  display: flex;
  margin-top: 25px;
  margin-bottom: 25px;
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
  width: ${(props) => (props.mobile ? "100%" : "60%")};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledImage = styled.img`
  margin-left: 50px;
  margin-right: 50px;
  height: 100%;
  object-fit: scale-down;
`;

type FeatureProps = {
  alignment: string;
  header: React.ReactNode;
  paragraph: React.ReactNode;
  image: string;
};

type StyleProps = {
  alignment: string;
  mobile: boolean;
};

type LayoutProps = {
  mobile: boolean;
};

const StyledText = styled.p`
  font-size: 20px;
`;

const Feature: FunctionComponent<FeatureProps> = (props) => {
  const mobile = useIsMobile();

  return (
    <CardContainer id="about" mobile={mobile} alignment={props.alignment}>
      <TextContainer mobile={mobile}>
        <h3>{props.header}</h3>
        <StyledText>{props.paragraph}</StyledText>
      </TextContainer>
      <ImageContainer>
        <StyledImage src={props.image} />
      </ImageContainer>
    </CardContainer>
  );
};

export default Feature;
