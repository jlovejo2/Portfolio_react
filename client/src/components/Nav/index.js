import React from "react";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark cloud ml-2">
    <a className="navbar-brand " href="https://github.com/jlovejo2/">
      <img
        className="brand-image rounded-circle"
        alt="Profile"
        src="assets/images/profile_pic.jpg"
      ></img>
    </a>
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
    {/* <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/contact"
    >
      Contact
    </NavLink> */}
    {/* <div>
      <DropdownButton
        // as={ButtonGroup}
        key={"right"}
        id={"dropdown-button-drop-right"}
        drop={"right"}
        size={"sm"}
        variant="tg navbar__button"
        title={"More Goodies"}
      >
        <Dropdown.Item href="">Option 1</Dropdown.Item>
        <Dropdown.Item href="">Option 2</Dropdown.Item>
        <Dropdown.Item href="">Option 3</Dropdown.Item>
      </DropdownButton>
    </div> */}
  </nav>
);

export default Navbar;
