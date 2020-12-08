import SongDetails from "./SongDetails";

const SongList = ({songs}) => {


    const songList = songs.map( song => {
        return (
            <SongDetails 
                key={song.id.attributes['im:id']} 
                image={song['im:image'][1].label} 
                artist={song['im:artist'].label}> 
                {song['im:name'].label}</SongDetails>
        )
    })
     return (
         <>
         <ol>
             {songList}
         </ol>
         </>
     )
}

export default SongList;
