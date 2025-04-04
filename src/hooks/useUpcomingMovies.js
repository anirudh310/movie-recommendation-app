import { useEffect } from "react";
import { API_OPTIONS } from "../Common/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../Common/movieSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(
        (store) => store.movies.upcomingMovies
    );
    const getUpcomingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        //console.log(json.results);

        dispatch(addUpcomingMovies(json.results));
    }
    useEffect(() => {
         getUpcomingMovies();
    }, []);
};

export default useUpcomingMovies;