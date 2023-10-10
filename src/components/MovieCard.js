import React from "react";
import { IMAGE_BASE_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 cursor-pointer rounded-lg">
      <img className="rounded-lg" alt="" src={IMAGE_BASE_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
