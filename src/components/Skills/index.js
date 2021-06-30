import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {
    SkillsContainer, 
    SkillsWrapper,
    // SkillsIcon,
    SkillsH1, 
    SkillsH2, 
    Img,
    SkillsCard, 
    SkillsP, 
} from './SkillsElements'

const Skills = (lightBg) => {
    return (
        <SkillsContainer lightBg={!lightBg} id='skills'>
            <SkillsH1>Skills</SkillsH1>
            <SkillsWrapper>
                <SkillsCard>
                    <Img src={Icon1} />
                    <SkillsH2>Full Stack Development</SkillsH2>
                    <SkillsP>I like building applications from scratch and love when both front-end and back-end gets connected - it's like pure magic. My skills stack includes HTML, CSS, JavaScript, React, Ruby, Ruby on Rails. I work with frameworks/Ruby Gems, web APIs and plugins.</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <Img src={Icon2} />
                    <SkillsH2>UX/UI Design</SkillsH2>
                    <SkillsP>I like to sketch, develop wireframe and prototypes while implementing UX and UI design patterns for intuitive user flow and interactive experiences. My favourite tool is Figma.</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <Img src={Icon3} />
                    <SkillsH2>And More</SkillsH2>
                    <SkillsP>Thanks to my previous experience in marketing and communications, I love talking to people, communicating with stakeholders and colleagues. My verbal and written communications skills as well as time management, collaboration skills and experience in project management can help with project development from inception to completion. </SkillsP>
                </SkillsCard>
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default Skills
