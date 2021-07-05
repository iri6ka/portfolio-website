import React from 'react'
import {SidebarContainer, Icon, ClosedIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <ClosedIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle} xact={true.toString()} smooth={true} duration={500} spy={true}>About</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to="skills" onClick={toggle} exact={true.toString()} smooth={true} duration={500} spy={true} >Skills</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to="projects" onClick={toggle} exact={true.toString()} smooth={true} duration={500} spy={true}>Projects</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to="contact" onClick={toggle} exact={true.toString()} smooth={true} duration={500} spy={true} >Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/resume" target="_blank">Resume</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
