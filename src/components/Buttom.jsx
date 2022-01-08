import { Div } from "./styles/buttomstyles"

export const Buttom = (props) =>{
    return( 
        <Div>
            <button>{props.title}</button>
        </Div>
    )
}