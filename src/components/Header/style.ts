import styled from "styled-components"

export const Container = styled.header ` 
    background: var(--blue);
    
`;

export const Contant = styled.div `
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 2rem 12rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        padding: 0 2rem;
        height: 3rem;

        border: 0;
        border-radius: 0.25rem;

        background: var(--blue-light);
        color: #ffffff;

        transition: filter 1.5s;

        &:hover{
            filter: grayscale(0.6)
        }
    }
`;