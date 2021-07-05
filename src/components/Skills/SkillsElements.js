import styled from 'styled-components';
import img from '../../images/background.png'

// font-family: 'Ruda', sans-serif;

export const SkillsContainer = styled.div`
    height: 890px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${img});
    width: 100vw;
    @media screen and (max-width: 768px) {
        height: 2000px;

     }

    @media screen and (max-width: 560px){
        /* max-width: 300px; */
        /* width: 100%; */

        height: 1800px;
    }

    @media screen and (max-width: 480px){
        /* max-width: 300px; */
        /* width: 100%; */

        height: 2300px;
    }

    @media screen and (max-width: 320px){
        /* max-width: 300px; */
        /* width: 100%; */

        height: 2400px;
    }
`

export const SkillsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        /* padding: 0 20px; */
    }
`

export const SkillsCard = styled.div`
    background: #fff;
    display: flex;
    font-family: 'Ruda', sans-serif;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 500px;
    padding: 30px;
    box-shadow: 0 1px 3px rbga(0,0,0,0.2);
    transition: all 0.2 ease-in-out;


    @media screen and (max-width: 768px) {
        width: 90%;
        height: 450px;

    }
    @media screen and (max-width: 540px) {
        width: 80%;
        height: 420px;

    }

    @media screen and (max-width: 480px){
        width: 200px;
        height: 580px;
    }

    @media screen and (max-width: 320px){
        width: 150px;
        height: 680px;
    }
    @media screen and (max-width: 280px){
        width: 150px;
        padding: 15px;

        height: 620px;
    }

    &:hover {
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    };
`

export const Img= styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;


export const SkillsH1 = styled.h1`
    font-size: 2.5rem;
    font-family: 'Ruda', sans-serif;
    color: #fff;
    margin-bottom: 54px;


    @media screen and (max-width: 600px){
        /* margin-top: 80px; */
    }


    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;

export const SkillsH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;


`

export const SkillsP = styled.p`
    font-size: 1rem;
    text-align: center;
`