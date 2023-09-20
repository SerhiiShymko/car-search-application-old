import React from 'react';
import { Nav, NavLink } from './Header.styled';

export const Header = () => {
    return (
        <header>
            <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/catalog">Catalog</NavLink>
                <NavLink to="/favorites">Favorites</NavLink>
            </Nav>
        </header>
    );
};