import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="header-container">
            <Navbar className="navbar" expand="lg" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#home"><h2 className="web-title">Travel <span className="secondary-color">BD</span></h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-5">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#destinations">Destinations</Nav.Link>
                            <Nav.Link as={HashLink} to="/aboutUs">About Us</Nav.Link>
                            {
                                user.email && <NavDropdown title="Dashboard" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1"><Nav.Link as={HashLink} to="/myBooking">My Booking</Nav.Link></NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2"><Nav.Link as={HashLink} to="/manageAllBooking">Manage All Booking</Nav.Link></NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3"><Nav.Link as={HashLink} to="/addNewDestination">Add New Destination</Nav.Link></NavDropdown.Item>
                              </NavDropdown>
                            }
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="#avatarName">{user.displayName}</Nav.Link>
                            <Nav.Link className="p-0" href="#avatarIMG">
                                { user.email && <img className="avatar-img" src={user.photoURL} alt="Avatar" />}
                            </Nav.Link>
                            {
                                user.email ? <button onClick={logOut} className="logout-btn">Log Out</button> :
                                <Link to="/login"><button className="login-btn">Log In</button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Header;