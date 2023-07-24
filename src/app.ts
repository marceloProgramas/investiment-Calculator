import styled  from "styled-components";
import * as C from './assets/color';

export const wrapper = styled.div`
    height: fit-content;
    width: fit-content;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: ${C.LightGray};
    border-radius: 15px;

    margin-inline: auto;
    margin-top: 4vh;
`

export const titulo = styled.h1`
    font-size: 3rem;
    padding: 0;
    margin: 0;
    margin-bottom: 1.8rem;
`

export const DivInput  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 650px){
        flex-direction: row;

        gap: 2rem;
    }
`

export const inputs  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const text = styled.p`
    margin: 0;
    margin-bottom: 0.3rem;
    
    text-align: center;
    font-size: 2rem;
    
    
    @media (min-width: 650px){
        width: 18rem;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 1024px){
        font-size: 1.8rem;
        width: 16.2rem;
        height: 4.5rem; 
    }
`

export const input = styled.input`
    width: 9rem;
    margin-bottom: 1.3rem;
    
    font-size: 1.5rem;
    
    border-style: none;
    border-radius: 7px;

    @media (min-width: 1024px){
        font-size: 1.3rem;
    }
`

export const btn = styled(input)`
    background: ${C.ExtraLight};
    margin-top: 0.8rem;

`