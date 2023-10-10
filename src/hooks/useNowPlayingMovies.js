import { useEffect } from "react";
import { API_BASE_URL, API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(API_BASE_URL + "now_playing", API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
    console.log(json?.results);
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
