import { useEffect } from "react";
import { API_OPTIONS } from "../Common/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../Common/movieSlice";

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const trendingMovies = useSelector(
        (store) => store.movies.trendingMovies
    );
    const getTrendingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", API_OPTIONS);
        const json = await data.json();
        //console.log(json.results);

        dispatch(addTrendingMovies(json.results));
    }
    useEffect(() => {
        !trendingMovies && getTrendingMovies();
    }, []);
};

export default useTrendingMovies;