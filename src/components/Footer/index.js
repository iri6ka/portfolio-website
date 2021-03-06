import React from 'react';
import {animateScroll as scroll} from 'react-scroll'
import {FooterContainer, 
    FooterWrap, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink} from './FooterElements'

import {FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer id='footer'>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Irina Konnova
                        </SocialLogo>
                        <WebsiteRights>Irina Konnova © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.github.com/iri6ka/" target="_blank" 
                            aria-label="GitHub">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/in/irina-konnova" target="_blank" 
                            aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="//twitter.com/iri6kakonnova" target="_blank" 
                            aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
