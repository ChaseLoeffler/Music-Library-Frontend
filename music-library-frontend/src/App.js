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

  



  return (
    <div>
      <Header/>
      <SearchBar/>
      <MusicTable songs ={songs}/>
    </div>
  );
}

export default App;
