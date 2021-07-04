import React from 'react';
import { ProjectsContainer, 
    ProjectsWrapper, 
    TopLine, 
    ProjectsH1, 
    ProjectsCard, 
    ProjectsH2, 
    ProjectsH3, 
    ProjectsP, 
    BtnLink,
    BtnWrapper,
    Img} from './ProjectsElements';
import img1 from '../../images/slider/website.png'
import img2 from '../../images/slider/callback_cats.png'
import img3 from '../../images/slider/frame_of_mind.jpeg'
import img4 from '../../images/slider/vespa_sharing.png'
import img5 from '../../images/slider/bbf.png'
import img6 from '../../images/slider/sidekicker.png'
import { FaStripe,FaAws,FaBootstrap} from "react-icons/fa";
import { SiReact, SiHtml5, SiHeroku, SiFirebase, SiRails, SiMongodb, SiPostgresql, SiSpotify, SiTrello, SiFigma, SiGithub } from "react-icons/si";
import { DiRubyRough, DiJavascript1, DiCss3 } from "react-icons/di";
// import ScrollToTop from '../components/ScrollToTop';


const Projects = () => {
    return (        
    <>
        {/* <ScrollToTop/> */}
        <ProjectsContainer id='projects' >
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
                    <ProjectsCard>
                        <TopLine>React Website</TopLine>
                        <Img src={img1} />
                        <ProjectsH2>Portfolio</ProjectsH2>
                        <ProjectsH3> 
                            <SiReact/> <DiJavascript1/> <SiHtml5/> <DiCss3 /> <SiFirebase/> <SiFigma/>
                        </ProjectsH3>
                        <ProjectsP>Rebuild my portfolio website using React. A few libraries were used for the project: scroll, particles.js, styled components and others. Initial design and prototype was build with Figma.</ProjectsP>
                        <ProjectsP>
                            <BtnWrapper>
                            <BtnLink href="https://github.com/iri6ka/portfolio-website" target="_blank"><SiGithub/>  GitHub</BtnLink>
                            <BtnLink href="https://irina-konnova.web.app/" target="_blank">Website</BtnLink>
                            <BtnLink href="https://www.figma.com/file/taUUuo3USBglH3IvgW25Ag/Portfolio-Website?node-id=0%3A1" target="_blank"><SiFigma/>  Wireframes</BtnLink>
                            </BtnWrapper>
                        </ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <TopLine>React Hackathon</TopLine>
                        <Img src={img2} />
                        <ProjectsH2>Callback Cats</ProjectsH2>
                        <ProjectsH3>
                            <SiReact/> <DiJavascript1/> <SiHtml5/> <DiCss3 /> <SiMongodb/> <SiFirebase/><SiFigma/>
                            </ProjectsH3>
                        <ProjectsP>As a part of a 4-member-team created the website using HTML/CSS, JavaScript and React. Website was deployed at Firebase. Created UX/ UI wireframes and prototype designs using Figma.</ProjectsP>
                        <ProjectsP>
                        <BtnWrapper>
                            <BtnLink href="https://github.com/ryanTavcar/callback-cats" target="_blank"><SiGithub/>  GitHub</BtnLink>
                            <BtnLink href="https://callback-cats-2021.web.app/" target="_blank">Website</BtnLink>
                            <BtnLink href="https://www.figma.com/proto/3RxdPxTMRDi08nAOm7S26Z/Callback-Cats?page-id=1%3A5&node-id=1%3A6&scaling=min-zoom" target="_blank"><SiFigma/>  Prototype</BtnLink>
                        </BtnWrapper>
                        </ProjectsP>

                    </ProjectsCard>
                    <ProjectsCard>
                        <TopLine>JavaScript Hackathon</TopLine>
                        <Img src={img3} />
                        <ProjectsH2>Frame of Mind</ProjectsH2>
                        <ProjectsH3>
                            <DiJavascript1/> <SiHtml5/> <DiCss3 /> <SiFirebase/><SiFigma/><SiSpotify/>
                        </ProjectsH3>
                        <ProjectsP>As a part of Hakathon group (4 people) build a JavaScript one-page application which sources API from MET Gallery and Spotify. Developped initial design in Figma, worked on implementing MET API calls, worked on styling.</ProjectsP>
                        <ProjectsP>
                        <BtnWrapper>
                            <BtnLink href="https://frame-of-mind-60add.web.app/" target="_blank">Website</BtnLink>
                            <BtnLink href="https://www.figma.com/file/077ffTX8riv49wIK0ZIv7d/Frame-of-Mind?node-id=0%3A1" target="_blank"><SiFigma/>  Wireframes</BtnLink>
                        </BtnWrapper>
                        </ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <TopLine>Full Stack Ruby on Rails Project</TopLine>
                        <Img src={img4} />
                        <ProjectsH2>Vespa Sharing Club</ProjectsH2>
                        <ProjectsH3>
                            <DiRubyRough/>  <SiRails/>  <FaBootstrap/>  <FaStripe/> <FaAws/>  <SiTrello/>  <SiFigma/>  <SiPostgresql/>  <SiHeroku/>
                            </ProjectsH3>
                        <ProjectsP>Developed first full stack website (MVP): Vespa Sharing Club. Vespa Sharing Club is a platform where everyone can book a Vespa and anyone who owns a Vespa can list it so others can book Vespa for a ride (authentication and authorisation functionality). Project stages included: market research, creation of user personas and user flow, creation of ERD and establishing one-to-one/one-to-many relationships, Git branching, continuous deployment at Heroku. Project was documented in README.md file</ProjectsP>
                        <ProjectsP>
                        <BtnWrapper>
                            <BtnLink href="https://github.com/ryanTavcar/callback-cats" target="_blank"><SiGithub/>  GitHub</BtnLink>
                            <BtnLink href="http://vespa-sharing-app.herokuapp.com/" target="_blank">Website</BtnLink>
                            <BtnLink href="https://www.figma.com/file/cV4K80IZUGnsc8nPIqoZ01/Vespa-sharing-app?node-id=0%3A1" target="_blank"><SiFigma/>  Wireframes</BtnLink>
                        </BtnWrapper>
                        </ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <TopLine>UI Project</TopLine>
                        <Img src={img5} />
                        <ProjectsH3>Bruno's Best Friend</ProjectsH3>
                        <ProjectsP>Worked on User Interface Design of a dog-walking website “Bruno’s Best Friend” as per brief requirements. Project consisted of developing a mood-board, iterating various designs versions and working on user flow, setting up components in Figma, creating mid-fidelity prototype, testing it with users and then finalising gathered insights in the highfidelity prototype.</ProjectsP>
                        <ProjectsP>
                        <BtnWrapper>
                            <BtnLink href="https://www.figma.com/file/JHRGMTO83gOvXaA72iMMgV/BBF-project" target="_blank"><SiFigma/>  Wireframes</BtnLink>
                            <BtnLink href="https://docs.google.com/presentation/d/1kYZHFnuLD7AlDx_eZWmT_gQ8faGhv8TTnFCRR1YwLLk/edit#slide=id.p" target="_blank">Slide Deck</BtnLink>
                            <BtnLink href="https://www.figma.com/proto/JHRGMTO83gOvXaA72iMMgV/BBF-project?page-id=166%3A6005&node-id=166%3A6489&viewport=574%2C507%2C0.07849964499473572&scaling=scale-down" target="_blank"><SiFigma/>  Prototype</BtnLink>
                        </BtnWrapper>
                        </ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                        <TopLine>UX Project</TopLine>
                        <Img src={img6} />
                        <ProjectsH3>Sidekicker App redesign project</ProjectsH3>
                        <ProjectsP>Redeveloped mobile version of an existing website (Sidekicker). During the project I conducted market research, developed a low-fidelity prototype, held user interviews, analysed received data and then implemented the data in the mid fidelity prototype.</ProjectsP>
                        <ProjectsP>
                        <BtnWrapper>
                            <BtnLink href="https://www.figma.com/file/FPs2L9e6Y3WNuVbWlNft53/Sidekicker-app?node-id=107%3A0" target="_blank"><SiFigma/>  Wireframes</BtnLink>
                            <BtnLink href="https://docs.google.com/presentation/d/1OXTpufFHXck7U_G6EF8pTlYhcj8h2_brzqQPfEdT098/edit#slide=id.g25f6af9dd6_0_0" target="_blank">Slide Deck</BtnLink>
                            <BtnLink href="https://www.figma.com/proto/FPs2L9e6Y3WNuVbWlNft53/Sidekicker-app?page-id=107%3A0&node-id=118%3A525&viewport=215%2C445%2C0.10255350172519684&scaling=scale-down" target="_blank"><SiFigma/>  Prototype</BtnLink>
                        </BtnWrapper>
                        </ProjectsP>
                    </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
           
        </>
    )
}

export default Projects;
