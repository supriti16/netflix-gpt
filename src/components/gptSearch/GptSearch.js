import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { NETFLIX_BG_IMG } from "../../utils/constants/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-[100%]" src={NETFLIX_BG_IMG} alt="netflix-bg-image" />
      </div>
      <div className="pt-[30%] md:pt-0">
        <GptSearchBar />
        <GptSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
