import React, {useState, useEffect} from 'react';
import {HiMenuAlt4} from "react-icons/hi";
import {animateScroll as scroll} from 'react-scroll';
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
// import Resume from '../Resume'

import IKResume from '../../files/IrinaKonnovaResume.pdf'

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    })

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Irina Konnova</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <HiMenuAlt4 />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" 
                            smooth={true} duration={500} spy={true} exact={true} offset={-80}
                            >About</NavLinks>
                         </NavItem> 
                        <NavItem>
                            <NavLinks to="skills"
                            smooth={true} duration={500} spy={true} exact={true} offset={-80}
                            >Skills</NavLinks>
                        </NavItem> 
                        <NavItem>
                            <NavLinks to="projects"
                            smooth={true} duration={500} spy={true} exact={true} offset={-80}
                            >Projects</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/resume" scr={IKResume} target="_blank" area-label="Resume">Resume</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
