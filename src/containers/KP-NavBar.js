import {Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import React from "react";
import "./KP-NavBar.css"


class KPNavBar extends React.Component {
    render() {
        return (
            <header className="container">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Kevin Portlock</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer to="/home">
                                <NavItem>Home</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <NavItem>About</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/services">
                                <NavItem>Services</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/secure">
                                <NavItem>Secure Area</NavItem>
                            </LinkContainer>

                            <NavDropdown title="Client Area">
                                <LinkContainer to="/notes-app">
                                    <NavItem>Notes App</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/about">
                                    <NavItem>About</NavItem>
                                </LinkContainer>
                            </NavDropdown>

                            <LinkContainer to="/contact">
                                <NavItem>Contact</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/signup">
                                <NavItem>Signup</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <NavItem>Login</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

export default KPNavBar;