import styled from 'styled-components';

import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#2E1518' : '#1C3334')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#000' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};  
    outline: none;
    border:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2 ease-in-out;
    
    &:hover {
        transition: all 0.2 ease-in-out;
        background: ${({primary}) => (primary ? '#DA7B93' : '#376E6F')};
        color: ${({dark}) => (dark ? '#fff' : '#000')}
    }
`