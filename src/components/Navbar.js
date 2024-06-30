import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffa500;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <big>My Portfolio</big>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
