import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>
              Discover
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Services
            </SidebarLink>
            <SidebarLink to="signup" onClick={toggle}>
              Sign Up
            </SidebarLink>
          </SidebarMenu>
          <SideButtonWrap>
            <SidebarRoute to="/signin" onClick={toggle}>
              Sign In
            </SidebarRoute>
          </SideButtonWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

// Styles ***************************
const SidebarContainer = styled.aside`
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  position: fixed;
  background: #0d0d0d;
  width: 100%;
  height: 100%;
  z-index: 999;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const SidebarLink = styled(LinkS)`
  color: #fff;
  text-decoration: none;
  list-style: none;
  font-size: 1.5rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: green;
  }
`;
const SideButtonWrap = styled.div`
  background-color: green;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const SidebarRoute = styled(LinkR)`
  color: #fff;
  font-size: 1rem;
  border-radius: 50px;
  letter-spacing: 1px;
  white-space: nowrap;
  padding: 16px 64px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #fff;
    color: #010606;
  }
`;

export default Sidebar;
