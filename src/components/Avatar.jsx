import { Buttom } from "./Buttom"
import { ImgAv } from "./avimg"
import { Card } from "./styles/cardStyles"

export const Avatar = (props) =>{
    return(
        <Card>
            <div>
                <ImgAv src="https://images-ext-2.discordapp.net/external/pHICwzLRZ9ZJDqhVTBEbXrfMIvdLeG4ix3OmWyCFiOg/%3Fimg%3D51/https/i.pravatar.cc/150" alt="aca va el avatar" />
            </div>
            <div className='texto'>
                <h1>{props.userName}</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur aliquid exercitationem nulla, rem laborum odio perspiciatis impedit nesciunt eligendi iusto mollitia corrupti delectus minima corporis aperiam quisquam quae deleniti error?</p>
                <Buttom title="LEER MAS"/>
            </div>
        </Card>
    )
}