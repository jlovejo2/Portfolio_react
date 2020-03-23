import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavLink } from 'react-router-dom';
import './style.css'


const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark cloud">
        <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/"
        >
            About
          </NavLink>
        <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/portfolio"
        >
            Portfolio
          </NavLink>
        <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/contact"
        >
            Contact
          </NavLink>
        <div>
            <DropdownButton
                // as={ButtonGroup}
                key={'right'}
                id={'dropdown-button-drop-right'}
                drop={'right'}
                size={'sm'}
                variant='tg navbar__button'
                title={'Professional Links'}
            >
                <Dropdown.Item href="https://www.linkedin.com/in/james-lovejoy-b414307a/">Linkedin</Dropdown.Item>
                <Dropdown.Item href="https://github.com/jlovejo2/">Github Profile</Dropdown.Item>
                <Dropdown.Item href="assets/James_Lovejoy_FullStack_Resume.pdf">Resume</Dropdown.Item>
            </DropdownButton>
        </div>
    </nav>
);

export default Navbar;
