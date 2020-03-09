import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {
  NavContainer,
  LogoContainer,
  LogoLink,
  LinksContainer,
  NavLinks,
} from './Navigation.styles';

const Navigation = () => (
  <NavContainer>
    <LogoContainer>
      <FaMapMarkerAlt />
      <LogoLink to="/">Safe Routes</LogoLink>
    </LogoContainer>

    <LinksContainer>
      <NavLinks to="/register">Register</NavLinks>
      <NavLinks to="/login">Login</NavLinks>
    </LinksContainer>
  </NavContainer>
);

export default Navigation;
