import styled from 'styled-components';

import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#edeae5' : '#FCE181')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#A0A0A0' : '#000')}
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
        background: ${({primary}) => (primary ? '#FCE181' : '#fff')};

    }
`