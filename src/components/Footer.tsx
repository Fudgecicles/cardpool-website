import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Colors from "../config/Colors";
import Button from "./Button";
import LogoText from "./LogoText";

const Background = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${Colors.darkBlue};
  color: ${Colors.lightGray};
`;

const FooterLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Links = styled.p`
  cursor: pointer;
  &&:hover {
    color: white;
  }
  transition-duration: 0.3s;
`;

function Footer() {
  return (
    <Background>
      <Container>
        <FooterLayout>
          <Column>
            <h1>
              <LogoText></LogoText>
            </h1>
            <p>Copyright 2021</p>
          </Column>
          <Column>
            <Links>Sign Up</Links>
            <Links>Get In Contact</Links>
          </Column>
        </FooterLayout>
      </Container>
    </Background>
  );
}

export default Footer;
