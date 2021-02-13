import React from "react";
import NavbarBs from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import LogoText from "./LogoText";
import Colors from "../config/Colors";
import Signup from "./Signup";

const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${Colors.blue};
`;

const StyledNavbar = styled(NavbarBs)`
  width: 100%;
  padding: 2vh 0;
  display: flex;
  flex-grow:0;
  justify-content: space-between;
`;

const NavigationContainer = styled(Nav)`
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  display: flex;
`;

const NavButton = styled(Nav.Link)`
  font-size: 25px;
  font-weight: bold;
  margin-inline: 1rem;
  color: rgb(171, 209, 161);
`;

const StyledBrand = styled(NavbarBs.Brand)`
  font-size: 40px;
`;

function Navbar() {
  return (
    <HeaderContainer>
      <Container>
        <StyledNavbar expand="lg">
          <StyledBrand>
              <LogoText />
          </StyledBrand>
          <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
          <NavbarBs.Collapse id="basic-navbar-nav">
            <NavigationContainer>
              <NavButton>Home</NavButton>
              <NavButton>About</NavButton>
              <NavButton>Team</NavButton>
            </NavigationContainer>
          </NavbarBs.Collapse>
          <NavbarBs.Collapse id="basic-navbar-nav">
            <Signup/>
          </NavbarBs.Collapse>
        </StyledNavbar>
      </Container>
    </HeaderContainer>
  );
}

export default Navbar;
