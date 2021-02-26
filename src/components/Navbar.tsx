import React, { FunctionComponent } from "react";
import NavbarBs from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import LogoText from "./LogoText";
import Colors from "../config/Colors";
import useIsMobile from "../hooks/UseIsMobile";
import { NavDropdown } from "react-bootstrap";

const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${Colors.blue};
`;

const StyledNavbar = styled(NavbarBs)`
  width: 100%;
  padding: 1vh 0;
  display: flex;
  flex-grow: 0;
  justify-content: space-between;
`;

const NavigationContainer = styled(Nav)<LayoutProps>`
  display: flex;
  flex-grow: 0;
  align-items: ${(props) => (props.ismobile ? "flex-end" : "center")};
`;

const StyledCollapse = styled(NavbarBs.Collapse)`
  width: 100%;
`;

const CollapseLayout = styled.div<LayoutProps>`
  width: 100%;
  display: flex;
  align-items: ${(props) => (props.ismobile ? "flex-end" : "center")};
  flex-direction: ${(props) => (props.ismobile ? "column" : "row-reverse")};
`;

const StyledBrand = styled(NavbarBs.Brand)`
  font-size: 40px;
`;

const StyledNavButton = styled(Nav.Link)`
  font-size: 25px;
  font-weight: bold;
  margin-inline: 1rem;
  color: rgb(171, 209, 161);
  &&&:hover {
    color: black;
  }
  &&& {
    color: ${Colors.darkGray};
    transition: 0.3s;
  }
`;

type LayoutProps = {
  ismobile: boolean;
};

type NavbarProps = {
  about: React.MutableRefObject<HTMLDivElement | undefined>;
  team: React.MutableRefObject<HTMLDivElement | undefined>;
};

const Navbar: FunctionComponent<NavbarProps> = (props) => {
  const mobile = useIsMobile();

  const scrollTo = (
    elem: React.MutableRefObject<HTMLDivElement | undefined>
  ) => {
    elem.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeaderContainer>
      <Container>
        <StyledNavbar expand="lg">
          <StyledBrand>
            <LogoText clickable displayLogoImage />
          </StyledBrand>
          <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
          <StyledCollapse id="basic-navbar-nav">
            <CollapseLayout ismobile={mobile}>
              <NavigationContainer>
                <NavDropdown.Divider />
                <StyledNavButton onClick={() => scrollTo(props.about)}>
                  About
                </StyledNavButton>
                <StyledNavButton onClick={() => scrollTo(props.team)}>
                  Team
                </StyledNavButton>
                <NavDropdown.Divider />
              </NavigationContainer>
            </CollapseLayout>
          </StyledCollapse>
        </StyledNavbar>
      </Container>
    </HeaderContainer>
  );
};

export default Navbar;
