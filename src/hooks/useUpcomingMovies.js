import { useEffect } from "react";
import { API_BASE_URL, API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(API_BASE_URL + "now_playing", API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json?.results));
    console.log(json?.results);
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
