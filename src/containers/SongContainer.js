import SongList from "../components/SongList";
import {useState, useEffect} from 'react'

const SongContainer = () => {

    const [songs, setSongs] = useState([])

    const getSongs = () => {
        console.log("getting songs info");
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(res => res.json())
            .then(data => setSongs(data.feed))
    }

    useEffect(() => {
        getSongs();
    }, [])

    return (
        <>
            <h1>This is the SongContainer</h1>
            <SongList /> 
        </>
    )
}

export default SongContainer;

// // 
// const getLaunch = () => {
//     console.log("getting launch info");
//     fetch(`https://api.spacexdata.com/v3/launches/${selectedLaunchId}`)
//         .then(res => res.json())
//         .then(data => setLaunch(data))
//         .then(() => setLoaded(true))
// }

// useEffect(() => {
//     getLaunch();
// }, [selectedLaunchId]);