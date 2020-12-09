import SongDetails from "./SongDetails";
import '../App.css'

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
         <ol className= "songList">
             {songList}
         </ol>
         </>
     )
}

export default SongList;
