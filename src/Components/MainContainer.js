import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative bg-black">
      {/* Video Background */}
      <VideoBackground movie_id={id} />

      {/* Overlay Gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>

      {/* Title and Overview */}
      <div className="absolute top-[30%] left-5 md:left-16 text-white z-10 max-w-[90%] md:max-w-2xl space-y-4">
        <h1 className="text-2xl md:text-5xl font-bold">{original_title}</h1>
        <p className="text-sm md:text-lg text-gray-300 line-clamp-4">{overview}</p>

        {/* Optional: Action Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-opacity-80 font-semibold transition">
            ▶ Play
          </button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
