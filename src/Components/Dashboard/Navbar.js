import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { Link } from 'react-router-dom';

const NavbarWrapper = styled.div`
  min-width: 100%;
  button#logout-btn {
    padding: 5px 10px;
    border: 1px solid pink;
    background-color: white;
    color: tomato;
    outline: none;
    border-radius: 10px;
  }
`;

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleCollapse() {
        setIsOpen(!isOpen);
    }

    function _onLogout() {
        console.log('aaa')
    }

    return (
        <NavbarWrapper>
            <MDBNavbar color="pink" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">Navbar</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="#!">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Features</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Pricing</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2">Dropdown</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <Link to="/">Dashboard</Link>
                                    <Link to="/dashboard/customers">Customers</Link>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBFormInline>
                                <div className="md-form my-0">
                                    <button type="button" onClick={_onLogout} id="logout-btn">
                                        Logout
                                    </button>
                                </div>
                            </MDBFormInline>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </NavbarWrapper>
    );
}

export default Navbar;