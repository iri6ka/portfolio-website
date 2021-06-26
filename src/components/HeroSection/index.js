import React, {useState} from 'react';
// import Space from '../../videos/space.mp4';
// import Poster from '../../images/poster.png';
import { HeroContainer, ParticleStyle, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import Particle from '../../components/Particle';
import {Button} from '../ButtonElement'


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <HeroContainer>
                <ParticleStyle>
                    <Particle />
                </ParticleStyle>
            </HeroContainer>
            <HeroContent>
                <HeroH1>Hi, My name is Irina</HeroH1>
                <HeroP>I am a Full Stack Developer, UX/UI Designer, based in Melbourne</HeroP>
                <HeroBtnWrapper>
                    <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover}>Let's Connect {hover? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </>
    )
}

export default HeroSection;