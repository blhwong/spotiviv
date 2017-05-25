import React from 'react';
import './ResultListEntry.css';
const ResultListEntry = (props) => {
  let img;
  if (props.type === 'Tracks') {
    img = props.entry.album.images[2].url;
  } else {
    img = props.entry.images[2] ? props.entry.images[2].url : null;
  }
  let url = props.entry.external_urls.spotify;
  let name = props.entry.name;
  let popularity = props.entry.popularity;
  return (
    <div className="entry">
      <img src={img}></img>
      <div>
        <a href={url}>{name}</a>
        {popularity !== undefined && <h4>Popularity: {popularity}</h4>}
      </div>
    </div>
  );
};

export default ResultListEntry;
