import React from 'react';
import './AlbumCard.css';

function AlbumCard({ artist, album, ytlink, image }) {

  return (
    <div className="album-card">
      <img 
        src={image} 
        className="album-image"
      />
      <div className="card-content">
        <h3>{artist}</h3>
        <p className="album-name">{album}</p>
        <a href={ytlink} target="_blank" rel="noopener noreferrer" className="details-button">
          Listen Here
        </a>
      </div>
    </div>
  );
}

export default AlbumCard;