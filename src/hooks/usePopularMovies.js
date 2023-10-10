import { useEffect } from "react";
import { API_BASE_URL, API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(API_BASE_URL + "popular", API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json?.results));
    console.log(json?.results);
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
