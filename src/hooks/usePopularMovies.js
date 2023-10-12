import { useEffect } from "react";
import {
  API_BASE_URL,
  MOVIE_API_STRING,
  API_OPTIONS,
} from "../utils/constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/store/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      API_BASE_URL + MOVIE_API_STRING + "popular",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
