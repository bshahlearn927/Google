// import React, { useEffect, useState } from "react";
// import axios from 'axios';

// export default function Search() {
//     // console.log(this.stores);
//     const [data, setAPIData] = useState([]);
//     const [searchQuery, setSearchQuery] = useState("data");

//   useEffect(() => {
//     fetch("http://localhost:5000/stores/")
//       .then((response) => response.json())
//       .then((data) => setSearchQuery(data));
//   }, []);

//   const filteredData = data.filter((stores) =>
//     stores.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchQuery}
//         placeholder="Search"
//         onChange={(event) => setSearchQuery(event.target.value)}
//       />
//       {/* {filteredData.map((stores) => (
//         <div key={stores.id}>
//           <h2>{stores.name}</h2>
//           <p>{stores.price}</p>
//         </div> ))}*/}

//       {filteredData.map((stores, index) => (
//         <div key={index}>
//           <h4>{stores.name}</h4>
//         </div>
//       ))}
//     </div>
//   );
// }
