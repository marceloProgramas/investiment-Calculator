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
    margin-bottom: 2rem;
`

export const input = styled.input`
    width: 9rem;
    margin-bottom: 2rem;
    
    font-size: 1.5rem;
    
    border-style: none;
    border-radius: 7px;
`

export const text = styled.p`
    font-size: 1.5rem;
    margin: 0;
`

export const btn = styled(input)`
        background: ${C.ExtraLight};
        font-size: 1rem;
`

//export const switch = styled.