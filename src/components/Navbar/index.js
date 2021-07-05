import React, {useState, useEffect} from 'react';
// import { FaTruckMonster } from 'react-icons/fa';
import {HiMenuAlt4} from "react-icons/hi";
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    Link,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

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
                            <Link to="about" activeClass="active" offset={-80}
                            smooth={true} duration={500} spy={true} 
                            >About</Link>
                        </NavItem> 
                        <NavItem>
                            <Link to="skills" activeClass="active" offset={-80}
                            smooth={true} duration={500} spy={true}
                            >Skills</Link>
                        </NavItem> 
                        <NavItem>
                        <Link to="projects" activeClass="active"
                            smooth={true} duration={500} spy={true} offset={-80} exact={true.toString()}
                            >Projects</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="contact" activeClass="active"
                            smooth={true} duration={500} spy={true}
                            >Contact</Link>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/resume" target="_blank">Resume</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
