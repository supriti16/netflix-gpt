import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { NETFLIX_BG_IMG } from "../../utils/constants/constant";

const GptSearch = () => {
  return (
    <div>
    <div className="fixed -z-10">
        <img
          src={NETFLIX_BG_IMG}
          alt="netflix-bg-image"
        />
      </div>
      <GptSearchBar />
      <GptSuggestions />
    </div>
  );
};

export default GptSearch;
