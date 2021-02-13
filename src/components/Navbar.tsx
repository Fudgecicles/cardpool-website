import React from "react";
import NavbarBs from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "./Container";
import styled from "styled-components";
import LogoText from "./LogoText";
import Colors from "../config/Colors";

const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${Colors.white};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${Colors.lightGray};
`;

const StyledNavbar = styled(NavbarBs)`
  width: 100%;
`;

const NavigationContainer = styled(Nav)`
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  display: flex;
`;

const NavButton = styled(Nav.Link)`
  padding-right: 1rem;
  font-size: 2rem;
  font-weight: bold;
  margin-inline: 1rem;
  color: rgb(171, 209, 161);
`;

function Navbar() {
  return (
    <HeaderContainer>
      <Container>
        <StyledNavbar expand="lg">
          <NavbarBs.Brand>
            <h1>
              <LogoText />
            </h1>
          </NavbarBs.Brand>
          <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
          <NavbarBs.Collapse id="basic-navbar-nav">
            <NavigationContainer>
              <NavButton>Home</NavButton>
              <NavButton>About</NavButton>
              <NavButton>Team</NavButton>
            </NavigationContainer>
          </NavbarBs.Collapse>
        </StyledNavbar>
      </Container>
    </HeaderContainer>
  );
}

export default Navbar;
