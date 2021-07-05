import styled from 'styled-components';

import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #44637B;
    font-family: 'Ruda', sans-serif;
    width: 100vw;

`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLInkscontainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }

`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 10px auto 0 auto;
    padding: 20px;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    font-family: 'Codystar', cursive;

`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #DA7B93;
        ;
    }
`
