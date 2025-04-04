import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from "../Common/constants";
import {addTrailerVideo} from "../Common/movieSlice"; 

const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch();
    
    //const trailerVideo = useSelector((store) =>store.movies.trailerVideo);

    const getMovieVideos = async () => {
      
      const data = await fetch('https://api.themoviedb.org/3/movie/'+movie_id+'/videos?language=en-US', API_OPTIONS);
      const json = await data.json();
      //console.log(json);
  
      const filterdata = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterdata.length ? filterdata[0] : json.results[0];
      //console.log(filterdata);
      
      dispatch(addTrailerVideo(trailer));
      
    };
    useEffect(() => {
       getMovieVideos();
    },[])
}

export default useMovieTrailer;
