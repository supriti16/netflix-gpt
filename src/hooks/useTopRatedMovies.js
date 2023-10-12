import { useEffect } from "react";
import { API_BASE_URL,MOVIE_API_STRING, API_OPTIONS } from "../utils/constants/constant";
import { useDispatch, useSelector } from "react-redux";
import {addTopRatedMovies } from "../utils/slice/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(API_BASE_URL+MOVIE_API_STRING + "top_rated", API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json?.results));
  };
  useEffect(() => {
    !topRatedMovies&&getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
