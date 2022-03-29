import React from "react";
import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg='dark' variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text>
                    <FormControl
                        style={{ width: 500 }}
                        placeholder="Search A Product"
                        className="m-auto"
                    />
                </Navbar.Text>
                <Nav  >
                    <Dropdown >
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="25px" />
                            <Badge  > 10 </Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            <span style={{ padding: 10 }}> Cart is Empty</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
