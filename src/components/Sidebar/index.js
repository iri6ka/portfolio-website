import React from 'react'
import {SidebarContainer, Icon, ClosedIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <ClosedIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">About</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to="projects">Projects</SidebarLink>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarLink to="contact">Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/resume">Resume</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
