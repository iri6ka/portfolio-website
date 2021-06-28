import React from 'react';
import { Button } from '../ButtonElements';
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './AboutElements';
// import Image1 from '../../images/svg1.svg';
// import Image2 from '../../images/svg2.svg';
// import Image3 from '../../images/svg3.svg';
// import Image4 from '../../images/svg4.svg';
import Image from '../../images/svg-hero.svg';

const AboutSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, primary, dark, dark2}) => {
    
    return (
        <>
           <AboutContainer lightBg={lightBg} id="about">
                <AboutWrapper>
                    <AboutRow imgStart={imgStart}>
                    {/* <TopLine>{topLine}</TopLine> */}
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home" 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={Image} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer> 
        </>
    )
}

export default AboutSection;
