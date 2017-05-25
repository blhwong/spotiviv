import React from 'react';
import ResultListEntry from './ResultListEntry.jsx';

const ResultList = (props) => {
  console.log(props);
  let entries = props.entries.artists || props.entries.albums || props.entries.tracks || null;
  let type = props.entries.artists ? 'Artists' : (props.entries.albums ? 'Albums' : 'Tracks');
  return (
    <div>
      <h2>{entries && 'Result List'}</h2>
      <span>
        <h3>{entries && type}{entries && type !== 'Albums' && <button>Sort by popularity:</button>}</h3>


      </span>
      {entries && entries.items.map((entry, index) => {
        return (
          <ResultListEntry
            type={type}
            entry={entry}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ResultList;
