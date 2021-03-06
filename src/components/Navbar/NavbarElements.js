import styled from 'styled-components';
import {Link as LinkRouter } from 'react-router-dom';
import {Link as LinkScroll } from 'react-scroll';


export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'rgba(68, 99, 123, 0.76)' : 'transparent')};
    height: 80px;
    display: flex;
    align-items: center;
    margin-top: -80px;
    justify-content: center;
    background:rgba(68, 99, 123, 0.76);
    // opacity: rgba(68, 99, 123, 0.92);
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100vw;


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
    padding: 0 20px;
`

export const NavLogo = styled(LinkRouter)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    font-size: 1.5rem;
    align-items: center;
    font-weight: bold;
    /* margin-left: 24px; */
    font-family: 'Codystar', cursive;
    text-decoration: none;
    color: #fff;

    @media screen and (max-width: 280px) {
        font-size: 1.2rem;    
    }
    `
export const MobileIcon = styled.div`
    padding-top: 4px;
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: #fff;
        /* padding-right: 15px; */
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 30px;

    @media screen and (max-width: 768px) {
        display: none;}
`
export const NavItem = styled.li`
    height: 60px;
`
export const Link = styled(LinkScroll)`
    color: #edeae5;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.3rem;
    font-family: 'Ruda', sans-serif;
    
    &.active{
        border-bottom: 3px solid #DA7B93;
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
    background: #edeae5;
    white-space: nowrap;
    padding: 10px 22px;
    color: grey;
    margin-right: 20px;
    font-size: 16px;
    outline: none;
    font-family: 'Ruda', sans-serif;

    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background:#DA7B93;
        color: #000;
        ;
    }
`