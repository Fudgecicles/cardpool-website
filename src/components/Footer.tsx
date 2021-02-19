import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Colors from "../config/Colors";
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
  justify-content: center;
`;

const Links = styled.a`
  cursor: pointer;
  &&:hover {
    color: white;
  }
  color: ${Colors.lightGray};
  transition-duration: 0.3s;
`;

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Background>
      <Container>
        <FooterLayout>
          <Column>
            <h1>
              <LogoText clickable></LogoText>
            </h1>
            <p>Copyright 2021</p>
          </Column>
          <Column>
            <Links onClick={scrollToTop}>Sign Up</Links>
            <Links href="mailto:listeven@alumni.usc.edu">Get In Contact</Links>
          </Column>
        </FooterLayout>
      </Container>
    </Background>
  );
}

export default Footer;
