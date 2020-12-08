import SongDetails from "./SongDetails";

const SongList = ({songs}) => {

    const songList = songs.map( song => {
        return (
            <SongDetails key={song.id.attributes["im:id"]} artist={song["im:artist"].label}> {song["im:name"].label}</SongDetails>
        )
    })
     return (
         <>
         <p>this is the SongList component</p>
         <ul>
             {songList}
         </ul>
         </>
     )
}

export default SongList;
