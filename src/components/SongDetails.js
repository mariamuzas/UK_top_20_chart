const SongDetails = ({children, artist}) => {
    return (
        <>
        <li>{children} by {artist}</li>
        </>
    )
}

export default SongDetails;