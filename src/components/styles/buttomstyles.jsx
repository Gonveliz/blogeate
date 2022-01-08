import styled from 'styled-components'

export const Div = styled.div`
    button{
        background-color: #4FBDBA;
        color: white;
        font-weight: bold;
        padding: 0.4rem;
        border: 2px solid white;
        border-radius: 15px;
        cursor: pointer;
        &:hover{
            color: #4FBDBA;
            background-color: white;
            transition: 0.3s;
            border: 2px solid #4FBDBA;
        }
    }
`