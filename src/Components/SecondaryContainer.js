import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  //console.log(movies);

  return (
    movies.nowPlayingMovies && (
      
        <div className="bg-black">
          <div className="mt-0 md:-mt-60 pl-4 md:pl-12 relative z-20">
            <MovieList title={"Now Playing"}       movies={movies.nowPlayingMovies} />
            <MovieList title={"Trending"}          movies={movies.trendingMovies} />
            <MovieList title={"Popular"}           movies={movies.popularMovies} />
            <MovieList title={"Upcoming Movies"}   movies={movies.upcomingMovies} />
            <MovieList title={"Horror"}            movies={movies.horrorMovies} />

          
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
