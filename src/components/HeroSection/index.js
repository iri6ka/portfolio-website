import React, {useState} from 'react';
// import Space from '../../videos/space.mp4';
// import Poster from '../../images/poster.png';
import { HeroContainer, ParticleStyle, HeroContent, HeroH1, HeroP, HeroBtnWrapper, Arrow, Arrows } from './HeroElements';
import Particle from '../../components/Particle';
import { Button } from '../ButtonElements';


const HeroSection = (primary) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <HeroContainer id='home'>
                <ParticleStyle>
                    <Particle />
                </ParticleStyle>
            </HeroContainer>
            <HeroContent>
                <HeroH1>Hi, My name is Irina</HeroH1>
                <HeroP>I am a Full Stack Developer, UX/UI Designer, based in Melbourne</HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="contact" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary={primary ? 1 : 0}
                    >Let's Connect { hover ? <Arrows /> : <Arrow/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </>
    )
}

export default HeroSection;