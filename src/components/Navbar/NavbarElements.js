import styled from 'styled-components';
import {Link as LinkRouter } from 'react-router-dom';
import {Link as LinkScroll } from 'react-router-dom';


export const Nav = styled.nav`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background:#F4CFCF
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24 px;
`

export const NavLogo = styled(LinkRouter)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    font-size: 1.5rem;
    align-items: center;
    font-weight: bold;
    margin-left: 24px;
    text-decoration: none;
    color: #000;
    `
export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: #000;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
`
export const NavItem = styled.li`
    height: 60px;
`
export const NavLinks = styled(LinkScroll)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    // margin: 20px;
    font-size: 1.5rem;
    // font-family: 'Roboto', sans-serif;
    // margin-top: 20px;   
    
    &.active{
        border-bottom: 3px solid #59363F;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`