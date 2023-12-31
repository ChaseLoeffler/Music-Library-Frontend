import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';
import Header from './Components/Header/Header';
import './App.css';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('https://localhost:7160/api/Songs');
    console.log(response.data);
    setSongs(response.data);
  }

  async function createSong(newSong){
    const response = await axios.post('https://localhost:7160/api/Songs', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  async function deleteSong(id){
    const response = await axios.delete(`https://localhost:7160/api/Songs/${id}`, {
      method: 'DELETE'
    })
      if(response.status === 200) {
         getAllSongs();
      }
  }

 async function searchBy(by){
    let tempSongs = songs.filter((el) => {
      if (el.title.toLowerCase().includes(by.search.toLowerCase()) || el.artist.toLowerCase().includes(by.search.toLowerCase()) || el.album.toLowerCase().includes(by.search.toLowerCase()) || el.releaseDate.toLowerCase().includes(by.search.toLowerCase()) || el.genre.toLowerCase().includes(by.search.toLowerCase())){
        return true;
      }
    });
    console.log(tempSongs);
    if(tempSongs.length === 0){
      getAllSongs();
    }
    setSongs(tempSongs);
  }



  return (
    <div className='color'>
      <div className='display'>
      <Header addNewEntryProperty ={createSong}/>
      </div>
      <div>
      <SearchBar searchByS ={searchBy}/>
      </div>
      <div className='border-box display'>
      <MusicTable songs ={songs} deleteSong={deleteSong}/>
      </div>
    </div>
  );
}

export default App;
