import React from 'react';
import { IMG_CDN_URL } from "../Common/constants";
import { FaPlay } from 'react-icons/fa';

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 pr-4 group relative cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Poster Image */}
      <img
        alt={title || 'Movie Card'}
        src={IMG_CDN_URL + posterPath + "/images"}
        className="w-full h-auto transition-transform duration-300 transform group-hover:scale-110 group-hover:brightness-75"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

      {/* Centered Play Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white bg-opacity-20 backdrop-blur-md p-3 rounded-full hover:scale-125 transition-transform duration-300">
          <FaPlay className="text-white text-xl" />
        </div>
      </div>

      {/* Movie Title (optional) */}
      {title && (
        <div className="mt-2 text-sm font-semibold text-center text-white md:text-base truncate">
          {title}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
