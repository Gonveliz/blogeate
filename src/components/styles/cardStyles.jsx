import styled from "styled-components";

export const Card = styled.div`
    background-color: white ;
    border-radius: 1rem;
    width: 98%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    .texto{
        width: 70%;
        h1{
            text-align: start;
            border-bottom: 2px solid black;
            font-size: 1.5rem;
        }
        p{
            text-align: start;
        }
    }
`