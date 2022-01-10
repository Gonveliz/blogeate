import styled from "styled-components";

export const Card = styled.div`
    background-color: white ;
    border-radius: 1rem;
    width: 95%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    .texto{
        width: 70%;
        h1{
            text-align: start;
            border-bottom: 2px solid #282c34;
            font-size: 1.5rem;
            color: #282c34;
        }
        p{
            text-align: start;
            margin: 1rem;
            text-indent: 1rem;
            font-size: 0.8rem;
        }
        div{
            display: flex;
            justify-content: flex-end;
        }
    }
`