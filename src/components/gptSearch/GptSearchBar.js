import React, { useRef } from "react";
import { lang } from "../../utils/constants/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import {
  API_BASE_URL,
  SEARCH_API_STRING,
  API_OPTIONS,
} from "../../utils/constants/constant";
import { addSearchResult } from "../../utils/store/movieSlice";

const GptSearchBar = () => {
  const dispatch=useDispatch()
  const language = useSelector((store) => store?.appConfig?.language);
  const searchText = useRef(null);
  const handleSearchClick = async () => {
    const data = await fetch(
      API_BASE_URL + SEARCH_API_STRING + `multi?query=${searchText.current.value}`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSearchResult(json?.results))
  };
  return (
    <div className="pt-[13%] pb-[3%] flex justify-center ">
      <form
        className="w-1/2 grid grid-cols-12 bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[language].gptSearchBarPlaceholder}
        />
        <button
          onClick={handleSearchClick}
          className="col-span-3 px-4 py-2 m-4 bg-red-700 text-white rounded-lg"
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
