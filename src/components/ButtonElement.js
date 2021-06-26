import styled from 'styled-components';

import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#9fedd7' : '#fef9c7')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '010606' : '#fff')}
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};  
    outline: none;
    bordere:none;
    cursor: p;ointer;
    display: flex;
    justify-content: center;
    align-iterms: center;
    transition: all 0.2 ease-in-out;
    
    &:hover {
        transition: all 0.2 ease-in-out;
        background: ${({primary}) => (primary ? '#fef9c7' : '#fff')};

    }
`