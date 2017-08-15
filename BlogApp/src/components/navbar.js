import React, {Component} from "react";
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


class BlogNavBar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to="/">
                            <a href="#">Home</a>
                        </LinkContainer>

                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/posts/new" activeClassName="active">
                            <NavItem>New Post</NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">

                            <LinkContainer to="/posts/new">
                                <MenuItem>New Post 1</MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/posts/new">
                                <MenuItem>New Post 2</MenuItem>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
;

export default BlogNavBar;