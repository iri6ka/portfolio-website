import styled from 'styled-components';
import {FiChevronRight, FiChevronsRight} from 'react-icons/fi';

export const HeroContainer = styled.main`
    display: flex;
    vertical-align: bottom;
    }

`
export const HeroHeader = styled.header`
    width: 100%;
    height: 100vh;

    // display: flex;
    // justify-content: center;
    // align-items: center;
    // padding: 0 30px;
    // height: 800px;
    // position: relative;
    // z-index: 1;
    `;


export const ParticleStyle = styled.div`
    position: absolute;
    width: 100%;
    // padding: 10px 22px;
    left: 8px;
    // right: 8px;
    height: 100%;
    background-color: #026670;

`
export const HeroContent = styled.div`
    z-index: 1;
    max-width: 1200px;
    position: absolute;
    align-items: center;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%)
    // padding: 8px 24px;
    // display: column;
    // justify-content: column;
    // align-items: center;
    // padding: 0 30px;
    // height: 800px;
    // position: relative;
    // z-index: 1;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 3rem;
    text-align: center;
    font-family: 'Ruda', sans-serif;


    @media screen and (max-width: 780px) {
        font-size: 40px;
    }
    @media scrreen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p` // styled text on the main page
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    font-family: 'Ruda', sans-serif;


    @media screen and (max-width: 780px) {
        font-size: 24px;
    }
    @media scrreen and (max-width: 480px) {
        font-size: 18px;
    }
 `  

export const HeroBtnWrapper = styled.div` // wrapper div for a main page button
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Ruda', sans-serif;

`

export const Arrow = styled(FiChevronRight)` 
    margin-left: 8px;
    font-size: 20px;
`

export const Arrows = styled(FiChevronsRight)`
margin-left: 8px;
font-size: 20px;
`