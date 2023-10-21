import React, { useState } from 'react';
import moment from 'moment';

const MusicTable = (props) => {
    return (
        <div>
            <table>
                <thead className='table'>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>ReleaseDate</th>
                    <th>Genre</th>
                </tr>
                </thead>
                <tbody>
                    {props.songs.map((song, index) => {
                        return(
                            <tr key={index}>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{moment(song.releaseDate).format('MM/DD/YYYY')}</td>
                                <td>{song.genre}</td>
                                <td><button onClick={() => props.deleteSong(song.id)}>Delete Song</button></td>
                                <td><button>Edit song</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
 
export default MusicTable;