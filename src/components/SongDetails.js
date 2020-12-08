const SongDetails = ({children, artist, image}) => {
    return (
        <>
        <img src={image} alt="" />
        <li>{children} by {artist}</li>
        </>
    )
}

export default SongDetails;