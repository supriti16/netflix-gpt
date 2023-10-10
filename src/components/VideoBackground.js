import React from "react";
import { useSelector } from "react-redux";
import useMovieVideos from "../hooks/useMovieVideos";
const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailer);
  useMovieVideos(movieId);
  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailer?.key+"?autoplay=1&mute=1&rel=0&showinfo=0&controls=0&modestbranding=1&autoplay=1&loop=1"}
        title="YouTube video player"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
