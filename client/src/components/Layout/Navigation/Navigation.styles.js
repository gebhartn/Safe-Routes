import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const LogoLink = styled(Link)`
  font-family: 'Khula', sans-serif;
  font-size: 1.6rem;
  height: 26px;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 1.6rem;
    height: 26px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinks = styled(NavLink).attrs({
  activeClassName: 'active',
})`
  margin-left: 2rem;
  &.active {
    //
  }
`;
