import styled from 'styled-components';
import { NavLink as NavLinkForStyle } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
gap: 50px;
    margin-top: 24px;
  margin-bottom: 24px;
  background-color: #fffaaa;
`;

export const NavLink = styled(NavLinkForStyle)`
  color: #3e85f3;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  text-decoration-line: none;

  &.active {
    color: rgba(11, 68, 205, 1);

  }

  &:focus,
  &:hover {
    color: rgba(11, 68, 205, 1);
  }
`;