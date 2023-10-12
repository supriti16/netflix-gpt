import { useEffect } from "react";
import { API_BASE_URL,MOVIE_API_STRING, API_OPTIONS } from "../utils/constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/store/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getUpcomingMovies = async () => {
    const data = await fetch(API_BASE_URL+MOVIE_API_STRING + "now_playing", API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json?.results));
  };
  useEffect(() => {
    !upcomingMovies&&getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
