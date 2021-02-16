import React, { useState } from 'react';
import {
  MDBNavbar,
  // MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer
} from 'mdbreact';

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <MDBNavbar color="black" dark expand="md">
      <MDBContainer>
        <MDBNavbarToggler onClick={() => setCollapse(!collapse)} />
        <MDBCollapse isOpen={collapse} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/bio">Bio</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/courses">Courses</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;