
import React,{useState} from 'react';
import {Navbar,NavItem,
    NavbarBrand,Collapse, Nav
    ,NavbarToggler} from "reactstrap";
const Header = () => {
    const [isOpen, setIsOpen]= useState(false);

    const toggle= () => setIsOpen(!isOpen);

    return(
        <Navbar color="info" light expand="md">

            <NavbarBrand className="text-Black ">
                NewsApp
            </NavbarBrand>

            <NavbarToggler onClick={toggle} />
            
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem >
                        Home
                    </NavItem>

                </Nav>
            </Collapse>
            

        </Navbar>
    )
}

export default Header;