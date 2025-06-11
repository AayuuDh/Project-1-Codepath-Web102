import React from 'react';
import AlbumCard from './AlbumCard';
import './App.css';

const artistsAlbums = [
  { 
    artist: 'Scorpions', 
    album: 'Love at First Sting', 
    ytlink: 'https://open.spotify.com/album/71cfSO0iO1fjgQLEb3Wc6C?si=b661e12b8c4449db',
    image: 'src/Images/scorpions png.png' 
  },
  { 
    artist: 'Katy Perry', 
    album: 'Witness', 
    ytlink: 'https://www.youtube.com/watch?v=FkGzJ-RR6Pc&list=OLAK5uy_lxWvnXurvXZBL4U9x77c0FU9DOPdt75jk',
    image: 'src/Images/katyperry.png' 
  },
  { 
    artist: 'half•alive', 
    album: 'Now, Not Yet', 
    ytlink: 'https://www.youtube.com/watch?v=VxE_Peq6v7I&list=PLHbzX8zcevvvUj5HG4HoHWlxQ4JNHvcHW',
    image: 'src/Images/half alive.jpg' 
  },
  { 
    artist: 'Taylor Swift', 
    album: 'Red', 
    ytlink: 'https://www.youtube.com',
    image: 'src/Images/taylor.png' 
  },
  { 
    artist: 'Phosphenes', 
    album: 'Transient', 
    ytlink: 'https://www.youtube.com',
    image: 'src/Images/phosphenes.jpg'
  },
  { 
    artist: 'Tribal Rain', 
    album: 'Gaunthan', 
    ytlink: 'https://www.youtube.com',
    image: 'src/Images/tribalrain.jpg'
    },
  { 
    artist: 'Bipul Chettri', 
    album: 'Maya', 
    ytlink: 'https://www.youtube.com',
    image: 'src/Images/bipul.jpg'
  },
  { 
    artist: 'Sushant KC', 
    album: 'Sarangi', 
    ytlink: 'https://www.youtube.com',
    image: 'src/Images/sushant.jpg'
  },
  { 
    artist: 'Bartika Eam Rai', 
    album: 'Bimbaakaash', 
    ytlink: 'https://www.youtube.com',
    image: 'src/Images/bartika.jpg'
  },
  { 
    artist: 'Green Day', 
    album: 'American Idiot', 
    ytlink: 'https://www.youtube.com',
    image: 'src/Images/greenday.png'
  },
];


function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Artists and Albums</h1>
      </header>
      <div className="album-grid">
        {artistsAlbums.map((item, index) => (
          <AlbumCard
            key={index}
            artist={item.artist}
            album={item.album}
            ytlink={item.ytlink}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;