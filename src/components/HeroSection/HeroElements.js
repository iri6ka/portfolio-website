import styled from 'styled-components';
import {FiChevronRight, FiChevronsRight} from 'react-icons/fi';

export const HeroContainer = styled.main`
    display: flex;
    vertical-align: bottom;
    overflow-y: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    width: 101vw;

    :before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rbga(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)

    }
`
export const HeroHeader = styled.header`
    width: 100%;
    height: 100vh;

    `;


export const ParticleStyle = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #44637B;

`
export const HeroContent = styled.div`
    z-index: 1;
    position: absolute;
    align-items: center;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);

`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 3rem;
    text-align: center;
    font-family: 'Ruda', sans-serif;


    @media screen and (max-width: 780px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
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
    @media screen and (max-width: 480px) {
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