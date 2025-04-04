import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHorrorMovies } from "../Common/movieSlice";

const useHorrorMovies = () => {
    const dispatch = useDispatch();

    const horrorMovies = useSelector(
        (store) => store.movies.horrorMovies
    );
    const getHorrorMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e29ee7879eb4e48d37eeda0c66c172d9&with_genres=27");
        const json = await data.json();
        //console.log(json.results);

        dispatch(addHorrorMovies(json.results));
    }
    useEffect(() => {
        !horrorMovies && getHorrorMovies();
    }, []);
};

export default useHorrorMovies;