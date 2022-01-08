import { ImgRadius } from "./styles/avimgstyles"

export const ImgAv = (props) =>{
    return( 
        <ImgRadius>
            <img src={props.src} alt={props.alt} />
        </ImgRadius>
    )
}