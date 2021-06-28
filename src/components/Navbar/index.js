import React from 'react';
import {HiMenuAlt4} from "react-icons/hi";
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Irina Konnova</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <HiMenuAlt4 />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                         </NavItem> 
                        <NavItem>
                            <NavLinks to="skills">Skills</NavLinks>
                        </NavItem> 
                        <NavItem>
                            <NavLinks to="projects">Projects</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/resume">Resume</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
