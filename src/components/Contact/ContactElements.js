import styled from 'styled-components';
// import {Link} from 'react-router-dom';
import img from '../../images/background.png';


export const Container = styled.div`
    min-height: 1200px;
    background-image: url(${img});

    font-family: 'Ruda', sans-serif;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
`

export const FormWrap = styled.div`

    height: 100%auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }`;
// `
// export const Icon = styled(Link)`
//     margin-left: 32px;
//     margin-top: 32px;
//     text-decoration: none;
//     color: #fff;
//     font-weight: 700;
//     font-size: 32px;

//     @media screen and (max-width: 480px){
//         margin-left: 16px;
//         margin-top: 8px;
// }
// `;

export const FormContent = styled.div`
    margin-top: 120px;

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #44637B;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
        max-width: 320px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #2E1518;
    padding: 16px 0;
    border: none;
    border-radius: 16px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin-top: 60px;
    
    &:hover {
        transition: all 0.2 ease-in-out;
        background: #DA7B93;
        color: #000;
    }
`;

export const FormText = styled.textarea`
    text-align: left;
    min-width: 400px;
    max-width: 400px;
    border-radius: 4px;

    color: #000;
    font-size: 14px;
`;