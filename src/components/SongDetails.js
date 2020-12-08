import '../components/'

const SongDetails = ({children, artist, image}) => {
    return (
        <>
        <img src={image} alt="" />
        <li> 
            <div className = "details">
                <p>{children}</p>
                <p>{artist}</p>
            </div>
        </li>
        </>
    )
}

export default SongDetails;