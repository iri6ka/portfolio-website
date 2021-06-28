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
                    <SkillsP>bla bla bla</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <Img src={Icon2} />
                    <SkillsH2>UX/UI Design</SkillsH2>
                    <SkillsP>bla bla bla</SkillsP>
                </SkillsCard>
                <SkillsCard>
                    <Img src={Icon3} />
                    <SkillsH2>And More</SkillsH2>
                    <SkillsP>bla bla bla</SkillsP>
                </SkillsCard>
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default Skills
