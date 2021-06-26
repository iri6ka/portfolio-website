import styled from 'styled-components';
import {HiOutlineX} from  "react-icons/hi";
import {Link as LinkScroll} from 'react-scroll';
import {Link as LinkRoute} from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #F4CFCF;
    align-items: center;
    display: grid;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    top: 0;
    // opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    // top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const ClosedIcon = styled(HiOutlineX)`
    color: #fff;    
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
`

export const SidebarWrapper = styled.div`
    color: #fff;

`

export const SidebarMenu = styled.ul`
    display: grid;
    drid-template-columns: 1fr;
    grid-template-rows: repeat(6, 15px);
    text-align: center;
    padding-right: 40px;
    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,60px);
    }
    `
export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #73676A;
    cursor: pointer;
    &:hover {
        color: #9F5D6D;
        transition: 0.2s ease-in-out;
}

`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;

`

export const SidebarRoute = styled(LinkRoute)`
    border-radius: 50px;
    background: #F4CFCF;
    write-space: nowrap;
    padding: 16px 64px;
    color: #000;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in0out;
        background:#fff;
        color: #ddd;
    }
`
