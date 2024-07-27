import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';

function NavBar() {
  const [login, setLogin] = useState('LOGIN');
  const [loginName, setLoginName] = useState('');

  useEffect(() => {
    // Add logic to check login state if needed
  }, []);

  const handleLogout = () => {
    // Add logic to handle logout
    setLogin('LOGIN');
    setLoginName('');
  };

  const handleGoogleLogin = () => {
    // Add logic to handle Google login
    setLogin('LOGOUT');
    setLoginName('User Name'); // Example user name
  };

  return (
    <Container className="mt-4">
      <Navbar collapseOnSelect variant="dark" expand="lg" className="border-bottom border-dark">
        <Container>
          <img
            alt="Logo"
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top rounded-circle border"
          />
          <Navbar.Brand href="/" className="ms-2 fs-5 nav-bar" style={{ color: 'white' }}>
            AgroInOne
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* Add any navigation items here if needed */}
            </Nav>
            <Nav>
              <Nav.Link href="/" className="pe-3 nav-bar" style={{ color: 'white' }}>
                HOME
              </Nav.Link>
              <Nav.Link href="/shop" className="pe-3 nav-bar" style={{ color: 'white' }}>
                SHOP
              </Nav.Link>
              <Nav.Link href="/schemes" className="pe-3 nav-bar" style={{ color: 'white' }}>
                SCHEMES
              </Nav.Link>
              <NavDropdown title="SERVICES" className="pe-3 nav-bar" style={{ color: 'white' }} id="nav-services">
                <NavDropdown.Item href="/helpdesk">HELPDESK</NavDropdown.Item>
                <NavDropdown.Item href="/predict">PREDICT</NavDropdown.Item>
              </NavDropdown>
              {login === 'LOGIN' ? (
                <Nav.Link onClick={handleGoogleLogin} className="pe-3 nav-bar" style={{ color: 'white' }}>
                  {login}
                </Nav.Link>
              ) : (
                <NavDropdown title={loginName} className="pe-3 nav-bar" style={{ color: 'white' }} id="nav-login">
                  <NavDropdown.Item href="/marketplace">MARKETPLACE</NavDropdown.Item>
                  <NavDropdown.Item href="#action4" onClick={handleLogout}>
                    {login}
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;
