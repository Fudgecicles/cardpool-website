import React from "react";
import NavbarBs from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import LogoText from "./LogoText";
import Colors from "../config/Colors";
import Button from "./Button";
import useIsMobile from "../hooks/UseIsMobile";
import { NavDropdown } from "react-bootstrap";

const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${Colors.blue};
`;

const StyledNavbar = styled(NavbarBs)<LayoutProps>`
  width: 100%;
  padding: 1vh 0;
  display: flex;
  flex-grow: 0;
  justify-content: space-between;
`;

const NavigationContainer = styled(Nav)<LayoutProps>`
  display: flex;
  flex-grow: 0;
  align-items: ${(props) => (props.mobile ? "flex-end" : "center")};
`;

const NavButton = styled(Nav.Link)`
  font-size: 25px;
  font-weight: bold;
  margin-inline: 1rem;
  color: rgb(171, 209, 161);
`;

const StyledCollapse = styled(NavbarBs.Collapse)<LayoutProps>`
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.mobile ? "flex-end" : "center")};
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
`;

const StyledBrand = styled(NavbarBs.Brand)`
  font-size: 40px;
`;

const StyledNavButton = styled(NavButton)`
  &&&:hover {
    color: black;
  }
  &&& {
    color: ${Colors.darkGray};
    transition: 0.3s;
  }
`;

type LayoutProps = {
  mobile: boolean;
};

function Navbar() {
  const mobile = useIsMobile();

  return (
    <HeaderContainer>
      <Container>
        <StyledNavbar mobile={mobile} expand="lg">
          <StyledBrand>
            <LogoText />
          </StyledBrand>
          <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
          <StyledCollapse mobile={mobile} id="basic-navbar-nav">
            <NavigationContainer mobile={mobile}>
              <NavDropdown.Divider />
              <StyledNavButton>Home</StyledNavButton>
              <StyledNavButton>About</StyledNavButton>
              <StyledNavButton>Team</StyledNavButton>
              <NavDropdown.Divider />
            </NavigationContainer>
            <NavigationContainer mobile={mobile}>
              <Button>Sign Up</Button>
              <Button
                backgroundColor={Colors.pool}
                hoverBackgroundColor={Colors.card}
              >
                Login
              </Button>
            </NavigationContainer>
          </StyledCollapse>
        </StyledNavbar>
      </Container>
    </HeaderContainer>
  );
}

export default Navbar;
