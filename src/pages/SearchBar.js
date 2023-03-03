import React, { useState } from 'react';

function SearchBar(props) {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
    props.onSearch(event.target.value);
  };

  // const handleButtonClick = () => {
  //   props.onSearch(searchText);
  // };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {/* <button onClick={handleButtonClick}>Search</button> */}
    </div>
  );
}

export default SearchBar;
