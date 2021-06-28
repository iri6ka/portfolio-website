import styled from 'styled-components';

// font-family: 'Ruda', sans-serif;

export const SkillsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;r
    background: #44637B;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#44637B')};
    
    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        max-width: 1300px;
    }
`

export const SkillsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 50px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
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
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rbga(0,0,0,0.2);
    transition: all 0.2 ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: alll 0.2 ease-in-out;
        cursor: pointer;
    };
`

export const Img= styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;


export const SkillsH1 = styled.h1`
    font-size: 1.5rem;
    font-family: 'Ruda', sans-serif;
    color: #DA7B93;
    magrin-bottom: 64px;

    @media screen (max-width: 480px){
        font-size: 2rem;
    }
`;

export const SkillsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;

`

export const SkillsP = styled.p`
    font-size: 1rem;
    text-align: center;
`