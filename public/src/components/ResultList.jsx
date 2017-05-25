import React from 'react';
import ResultListEntry from './ResultListEntry.jsx';

const ResultList = (props) => {
  console.log(props);
  let entries = props.entries.artists || props.entries.albums || null;
  let type = props.entries.artists ? 'artists' : 'albums';
  return (
    <div>
      <h2>Result List</h2>
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
