import './SongDetails.css';

const SongDetails = ({children, artist, image}) => {
    return (
        <>
        <div className= "item">
        <img src={image} alt="" />
            <li> 
            <hr/>
                <div className = "details">
                    <p className = "song">{children}</p>
                    <p className="artist">{artist}</p>
                </div>
            </li>
        </div>
        </>
    )
}

export default SongDetails;