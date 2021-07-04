import styled from 'styled-components';

import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#2E1518' : '#1C3334')};
    white-space: nowrap;
    padding: 14px 30px;
    color: ${({dark}) => (dark ? '#000' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};  
    outline: none;
    border:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2 ease-in-out;

    @media screen and (max-width: 480px){
        font-size: 16px;  
        padding: 12px 16px;
    }
    
    &:hover {
        transition: all 0.2 ease-in-out;
        background: ${({primary}) => (primary ? '#DA7B93' : '#376E6F')};
        color: ${({dark}) => (dark ? '#fff' : '#000')}
    }

`