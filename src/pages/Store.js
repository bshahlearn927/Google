import * as React from "react";
// import { Link, redirect } from "react-router-dom";
import { useEffect, useState } from "react";
// import SlickSlider from './MultipleItems';
// import MultipleItems from "./MultipleItems";
import SimpleSlider from "./SimpleSlider";
// import { getByPlaceholderText, render } from "@testing-library/react";
// import Navbar from "./Navbar";
// import TestSlider from "./test";
import SearchBar from "./SearchBar";

export default function Store() {
  // print api to take the store from fetch from postman when entered a request and call mysql table from workbench

  const [stores, setTasks] = useState([]);
  // const [searchResults, setSearchResults] = useState(stores);

  const [searchQuery, setSearchQuery] = useState("");
  const [seaResults, setSeaResults] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/stores/")
  //       .then((response) => response.json())
  //       .then((stores) => setSearchResults(stores));
  //   }, []);
  // const filteredData = stores.filter((stores) =>
  //     stores.name.toLowerCase().includes(searchResults.toLowerCase())
  //   );
  /////////////////////////////////////////////////
  // const handleSearch = (searchText) => {
  //   const filteredItems = stores.filter((item) =>
  //     item.name.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   setSearchResults(filteredItems);
  // };

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts`)
  //    .then((response) => response.json())
  //    .then((data) => console.log(data))
  //    .catch((err) => {
  //     console.log(err.message);
  //    });
  //  }, []);

  const performSearch = async (e) => {
    e.preventDefault();
    console.log("searchQuery",searchQuery);
    const response = await fetch(`http://localhost:5000/stores?q=${searchQuery}`);
    const data = await response.json();
    setSeaResults(data.results);
    console.log("setSeaResults");
    console.log(searchQuery);
  };

  useEffect(() => {
    console.log("I am going to call api here");

    fetch("http://localhost:5000/stores/")
      .then((res) => {
        res.json().then((stores) => {
          console.log(stores, "stores");
          // setTasks(stores);
          setTasks(stores.result);
        });
      })
      .catch((error) => {
        console.log("this is error", error);
      });
  }, []);

  return (
    <>
      {/* use element of this file in some other file */}
      {/* <Search/> */}

      {/* <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul> */}
      {/* /////////////////////////// */}
      <form>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" onClick={performSearch}>
          Search
        </button>
      </form>
      <ul>
        {seaResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>

      <SimpleSlider stores={stores} />

      {/* <Link to="/">Go back</Link> */}
      {/* <TestSlider /> */}
    </>
  );
}
