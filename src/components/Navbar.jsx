import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink to="/signin">Sign In</NavButtonLink>
          </NavButton>
        </NavbarContainer>
      </Nav>
    </>
  );
};

// Styles ***************************
const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  color: #fff;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
`;

const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 65%);
    font-size: 1.8rem;
    color: #fff;
    cursor: pointer;
  }
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  letter-spacing: 1px;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid green;
  }
`;

const NavButton = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
const NavButtonLink = styled(LinkR)`
  border-radius: 50px;
  background: green;
  white-space: norwrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #010606;
  }
`;

export default Navbar;
