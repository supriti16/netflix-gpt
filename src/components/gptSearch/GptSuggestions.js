import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../SecondaryContainer/MovieList";

const GptSuggestions = () => {
  const searchResults = useSelector((store) => store?.movies?.searchedContent);
  if (!searchResults) return null;
  return <div className="p-4 m-4 bg-black text-white bg-opacity-90">
    <MovieList title="Search Results" movies={searchResults}/>
  </div>;
};

export default GptSuggestions;
