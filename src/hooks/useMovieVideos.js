import { useEffect } from "react";
import {
  API_BASE_URL,
  API_OPTIONS,
  MOVIE_API_STRING,
} from "../utils/constants/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/slice/movieSlice";

const useMovieVideos = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailer);

  const getMovieVideos = async () => {
    const data = await fetch(
      API_BASE_URL + MOVIE_API_STRING + `${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailer && getMovieVideos();
  }, []);
};

export default useMovieVideos;
