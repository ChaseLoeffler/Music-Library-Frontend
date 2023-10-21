import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';
import Header from './Components/Header/Header';


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
    <div>
      <Header/>
      <SearchBar searchByS ={searchBy}/>
      <MusicTable songs ={songs}/>
    </div>
  );
}

export default App;
