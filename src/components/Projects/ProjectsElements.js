import styled from 'styled-components';
// import {Link as LinkRouter } from 'react-router-dom';


export const ProjectsContainer = styled.div`
    height: 2500px;
    offset: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #44637B;
    
    @media screen and (max-width: 768px) {
        padding-top: 80px;
        padding-bottom: 80px;
        height: 100%;

     }
    `

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        /* padding: 0 20px; */
    }
`

export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    font-family: 'Ruda', sans-serif;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 690px;
    padding: 30px;
    box-shadow: 0 1px 3px rbga(0,0,0,0.2);
    transition: all 0.2 ease-in-out;

    @media screen and (max-width: 768px) {
        width: 600px;
        height: auto;

    }
    @media screen and (max-width: 540px) {
        width: 350px;
        height: auto;

    }

    @media screen and (max-width: 480px){
        width: 200px;
        height: auto;
    }

    @media screen and (max-width: 320px){
        width: 150px;
        height: auto;
    }

    @media screen and (max-width: 320px){
        width: 120px;
        height: auto;
    }
    &:hover {
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    };
`

export const Img= styled.img`
    height: 250px;
    width: 400px;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        width: 600px;
        height: 352px;

     }

    @media screen and (max-width: 540px) {
        width: 320px;
        height: 188px;
    }
    @media screen and (max-width: 480px){
        width: 188px;
        height: auto;
    }

    @media screen and (max-width: 320px){
        width: 150px;
        height: auto;
    }
`;


export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    font-family: 'Ruda', sans-serif;
    color: #fff; 
    margin-bottom: 54px;
    align-items: center;
    flex-direction: column;
    justify-content: center;



    @media screen and (max-width: 600px){
        flex-direction: column;
        justify-content: center;
    }


    @media screen and (max-width: 480px){
        font-size: 1.8rem;
        align-items: center;

    }
`;

export const ProjectsH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;
`
export const ProjectsH3 = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 8px;
    text-align: center;

    @media screen and (max-width: 480px){
        text-align: center;
        max-width: 460px;
        font-size: 1.2rem;

    }
    @media screen and (max-width: 375px){
        text-align: center;
        max-width: 300px;
        font-size: 1rem;

    }
    @media screen and (max-width: 320px){
        text-align: center;
        max-width: 250px;
    }
`


export const ProjectsP = styled.div`
    font-size: 1rem;
    text-align: center;
    padding-top: 20px;
`

export const TopLine = styled.p`
    color: #DA7B93;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const BtnLink = styled.a`
    border-radius: 50px;
    background: #edeae5;
    white-space: nowrap;
    padding: 10px 16px;
    color: grey;
    margin-right: 8px;
    font-size: 14px;
    outline: none;

    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background:#DA7B93;
        color: #000;
        ;
    }

    @media screen and (max-width: 320px){
        flex-direction: column;
    }
`

export const BtnWrapper = styled.div`
max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 16px;
    padding: 0 50px;


    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr;
        align-self: center;
        justify-content: center;


    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;

    }
    @media screen and (max-width: 540px) {
        grid-template-columns: 1fr 1fr;
        align-items: center;
            justify-content: center;

    }
    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;

    }
`
// export const ImgWrap = styled.div`
//     max-width: 555px;
//     height: 100%;
// `

// export const ProjectsContainer = styled.section`
//     color: #fff;
//     position: relative;
//     font-family: 'Ruda', sans-serif;

// /* input a picture background to the case of a false background */
//     background: ${({lightBg}) => (lightBg ? '#fff' : '#44637B')};

//     @media screen and (max-width: 768px){
//         padding: 100px 0;
//     }
// `

// export const ProjectsWrapper = styled.div`
//     display: grid;
//     z-index: 1;
//     height:890px;
//     width: 100%;
//     max-width: 1200px;
//     margin-right: auto;
//     margin-left: auto;
//     padding: 0 24px;
//     justify-content: center;
// `

// export const ProjectsRow = styled.div`
//     display: grid;
//     grid-auto-columns: minmax(auto, 1fr);
//     align-items: center;
//     grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

//     @media screen and (max-width: 768px){
//         grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )};
//     }
// `

// export const Column1 = styled.div`
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: col1;
// `

// export const Column2 = styled.div`
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: col2;
// `

// export const TextWrapper = styled.div`
//     max-width: 540px;
//     padding-top: 0;
//     padding-bottom: 60px;
//     padding-right: 24px;
//     `

// export const TopLine = styled.p`
//     color: #DA7B93;
//     font-size: 16px;
//     line-height: 16px;
//     font-weight: 700;
//     letter-spacing: 1.4px;
//     text-transform: uppercase;
//     margin-bottom: 16px;
// `

// export const Heading = styled.h1`
//     color: #fff;
//     margin-bottom: 24px;
//     font-size: 48px;
//     line-height: 1.1;
//     font-weight: 600;
//     color: ${({lightText}) => (lightText ? '#fff' : '#000')};

//     @media screen and (max-width: 480px){
//         font-size: 23px;
//     }
// `

// export const Subtitle = styled.p`
//     max-width: 440px;
//     margin-bottom: 35px;
//     font-size: 18px;
//     line-height: 24px;
//     color: ${({darkText}) => (darkText ? '#010101' : '#fff')};
// `
// export const BtnWrap = styled.div`
//     display: flex;
//     justify-content: flex-start;
// `

// export const ImgWrap = styled.div`
//     max-width: 555px;
//     height: 100%;
// `

// export const Img = styled.img`
//     width: 100%;
//     margin: 0 0 10px 0;
//     padding-right: 0;
// `

// export const BtnLink = styled(LinkRouter)`
//     border-radius: 50px;
//     background: #2E1518;
//     white-space: nowrap;
//     padding: 16px 64px;
//     color: #fff;
//     font-size: 16px;
//     outline: none;
//     border: none;
//     font-family: 'Ruda', sans-serif;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;
//     text-decoration: none;
//     font-weight: bold;

//     &:hover{
//         transition: all 0.2s ease-in-out;
//         background: #DA7B93;
//         color: #000;
//     }
// `