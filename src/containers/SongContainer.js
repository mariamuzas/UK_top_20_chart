import SongList from "../components/SongList";
import {useState, useEffect} from 'react'

const SongContainer = () => {

    const [songs, setSongs] = useState([])

    const getSongs = () => {
        console.log("getting songs info");
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(res => res.json())
            .then(data => setSongs(data.feed.entry))
    }

    useEffect(() => {
        getSongs();
    }, [])

    return (
        <>
            <h1>This is the SongContainer</h1>
            <SongList songs={songs}/> 
        </>
    )
}

export default SongContainer;