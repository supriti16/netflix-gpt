import { useEffect } from "react";
import { API_BASE_URL, MOVIE_API_STRING,API_OPTIONS } from "../utils/constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)
  const getNowPlayingMovies = async () => {
    const data = await fetch(API_BASE_URL+MOVIE_API_STRING + "now_playing", API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results));
  };
  useEffect(() => {
    if(!nowPlayingMovies){getNowPlayingMovies();}
    
  }, []);
};

export default useNowPlayingMovies;
