import React from 'react';

function Search(props) {
  return (
    <form onSubmit={props.onSearch}>
      <input type="text" placeholder="Enter search query" value={props.query} onChange={props.onInputChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
