import React, { FunctionComponent } from "react";
import styled from "styled-components";

const CardContainer = styled.div<StyleProps>`
  width: 100%;
  height: 300px;
  display: flex;
  margin-top: 25px;
  margin-bottom: 25px;
  flex-direction: ${(props) =>
    props.alignment === "left" ? "row" : "row-reverse"};
  float: ${(props) => props.alignment};
  text-align: left;
`;

const TextContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 40%;
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
};

const StyledText = styled.p`
  font-size: 20px;
`;

const Feature: FunctionComponent<FeatureProps> = (props) => {
  return (
    <CardContainer alignment={props.alignment}>
      <TextContainer>
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
