import React from "react";
import { directors } from "../data";

function Directors() {

  const director = directors.map((item) =>(
   
    <div key={item.name}>
      <h3>{item.name}</h3>
      <ul>{item.movies.map((movie) =><li key={movie}>{movie}</li>)}</ul>
    </div>
  ))
  return <div>
    <h1>Directors Page</h1>
    {director}
  </div>;
}

export default Directors;
