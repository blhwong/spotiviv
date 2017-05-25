import React from 'react';

const ResultListEntry = (props) => {
  console.log(props);
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
    <div>
      <img src={img}></img>
      <div>
        <a href={url}>{name}</a>
        {popularity && <div>Popularity: {popularity}</div>}
      </div>
    </div>
  );
};

export default ResultListEntry;
