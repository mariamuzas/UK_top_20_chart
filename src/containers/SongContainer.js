import SongList from "../components/SongList";
import {useState, useEffect} from 'react'
import '../App.css'

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
        < >
        <div className= "container">
            <div className = "header">
                <h1>UK top 20 song</h1>
                <p>Last updates: </p>
            </div>
            <SongList songs={songs}/> 
            </div>
        </>
    )
}

export default SongContainer;