import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.main`
    display: block;
    vertical-align: bottom;
    }

`
export const HeroHeader = styled.header`
    width: 100%;
    height: 100vh;
    `;


export const ParticleStyle = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #026670;

`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

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
`

export const ArrowForward = styled(MdArrowForward)` 
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`