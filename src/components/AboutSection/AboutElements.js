import styled from 'styled-components';
import {Link as LinkRouter } from 'react-router-dom';


export const AboutContainer = styled.section`
    color: #fff;
    position: relative;
    font-family: 'Ruda', sans-serif;

    background: ${({lightBg}) => (lightBg ? '#fff' : '#44637B')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 890px;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 600px;
    padding-top: 0;
    padding-bottom: 60px;
    padding-right: 24px;
    `

export const TopLine = styled.p`
    color: #DA7B93;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    color: #fff;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#fff' : '#000')};

    @media scrreen and (max-width: 480px){
        font-size: 23px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010101' : '#fff')};
`
export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 80%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const BtnLink = styled(LinkRouter)`
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

    @media scrreen and (max-width: 480px) {
        padding: 16px 32px;
    }

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #DA7B93;
        color: #000;
    }
`