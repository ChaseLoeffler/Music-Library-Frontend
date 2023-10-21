import React, { useState } from 'react';
import './Header.css'

const Header = (props) => {

    const [title,setTitle] = useState('');
    const [artist,setArtist] = useState('');
    const [album,setAlbum] = useState('');
    const [genre,setGenre] = useState('');
    const [date,setdate] = useState('');
    
    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            title: title,
            artist: artist,
            album: album,
            releaseDate: date,
            genre: genre
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }

    return (
        <div>
            <div>
                <h1 className='text-center'>Music Library</h1>
            </div>
            <div>
                <h3 className='text-center'>Add a Song</h3>
                <div>
                    <form onSubmit={handleSubmit} className='form-grid'>
                        <label>Title</label>
                        <input type='text' value={title} onChange={(event)=> setTitle(event.target.value)}/>
                        <label>Artist</label>
                        <input type='text' value={artist} onChange={(event)=> setArtist(event.target.value)}/>
                        <label>Album</label>
                        <input type='text'value={album} onChange={(event)=> setAlbum(event.target.value)}/>
                        <label>Genre</label>
                        <input type='text' value={genre} onChange={(event)=> setGenre(event.target.value)}/>
                        <label>Release Date</label>
                        <input type='date' value={date} onChange={(event)=> setdate(event.target.value)}/>
                        <button type='submit'>Add Song</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Header;