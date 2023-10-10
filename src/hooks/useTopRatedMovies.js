import { useEffect } from "react";
import { API_BASE_URL, API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import {addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(API_BASE_URL + "top_rated", API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json?.results));
    console.log(json?.results);
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
