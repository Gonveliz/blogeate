import { ImgAv } from './Avimg'

export const Avatar = (props) =>{
    return(
        <div className='Avatar'>
            <div>
                <ImgAv src="" alt="aca va el avatar" />
            </div>
            <div className='texto'>
                <h1>{props.userName}</h1>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur aliquid exercitationem nulla, rem laborum odio perspiciatis impedit nesciunt eligendi iusto mollitia corrupti delectus minima corporis aperiam quisquam quae deleniti error?</span>
            </div>
        </div>
    )
}