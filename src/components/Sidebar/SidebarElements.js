import styled from 'styled-components';
import {HiOutlineX} from  "react-icons/hi";
import {Link as LinkScroll} from 'react-scroll';
import {Link as LinkRoute} from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #44637B;
    align-items: center;
    display: grid;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const ClosedIcon = styled(HiOutlineX)`
    color: #fff;    
    /* padding-right: 5px; */
    
    @media screen and (max-width: 280px){
        padding-left: 0;
    }
`

export const Icon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
    
    @media screen and (max-width: 280px){
        /* padding-left: 20px; */
    }
`

export const SidebarWrapper = styled.div`
    color: #fff;

`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 15px);
    text-align: center;
    padding-right: 45px;
    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,15px);
    }
    `
export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    font-family: 'Ruda', sans-serif;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    &:hover {
        color: #DA7B93;
        transition: 0.2s ease-in-out;
}

`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;

`

export const SidebarRoute = styled(LinkRoute)`
    border-radius: 50px;
    background: #2E1518;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    font-family: 'Ruda', sans-serif;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: bold;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #DA7B93;
        color: #000;
    }
`
