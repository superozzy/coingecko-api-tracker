import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "#5D3FD3" : "#F3EFE0",
              };
            }}
          >
            CoinMarket
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#5D3FD3" : "#F3EFE0",
                };
              }}
            >
              List
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="market"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#5D3FD3" : "#F3EFE0",
                };
              }}
            >
              Market
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
