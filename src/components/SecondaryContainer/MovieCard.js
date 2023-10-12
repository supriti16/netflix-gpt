import React from "react";
import { IMAGE_BASE_URL } from "../../utils/constants/constant";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null
  return (
    // <div className="w-48 pr-4 m-2 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
    //   <img className="rounded-lg" alt="" src={IMAGE_BASE_URL + posterPath} />
    //   <h1 className="text-white invisible hover:visible ">Title</h1>

    // </div>
    <div>
      <div className="group relative w-36 md:w-48 pr-4 m-2 cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
        <img className="rounded-lg" alt="" src={IMAGE_BASE_URL + posterPath} />
        <button
          className="invisible group-hover:visible  
           text-white"
        >
          Button
        </button>
      </div>
      {/* <div class="group relative bg-gray-300 w-60 h-40 m-3"> */}
        {/* <button
          class="invisible group-hover:visible  
            absolute pr-10 pl-10 pt-2 pb-2 mt-24  
            ml-4 bg-blue-500 text-white"
        >
          Button
        </button> */}
      {/* </div> */}
    </div>
  );
};

export default MovieCard;
