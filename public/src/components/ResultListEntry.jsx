import React from 'react';

const ResultListEntry = (props) => {
  console.log(props);
  if (props.type === 'artists') {
    return (
      <div>

        <img src={props.entry.images[2] ? props.entry.images[2].url : null}></img>
        <div>
          <a href={props.entry.href}>{props.entry.name}</a>
          <div>Popularity: {props.entry.popularity}</div>
        </div>

      </div>
    );
  } else {

  }
  return (
    null
  );
};

export default ResultListEntry;
