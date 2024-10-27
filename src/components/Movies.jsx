import React, { useState, useEffect, useContext } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import axios from "axios";
import { WatchListContext } from "../context/WatchListContext";
import paginationSlice from "../redux/paginationSlice";
import { useSelector, useDispatch } from "react-redux";
import fetchMiddleWare from "../redux/Movie/fetchMovieMiddleWare";

const paginationAction = paginationSlice.actions;

const Movies = () => {
	// const [movies, setMovies] = useState([]);
	// const [pageNo, setPageNo] = useState(1);
	const { pageNo } = useSelector((state) => state.pagination);
	const dispatch = useDispatch();
	const { error, loading, movies } = useSelector((state) => {
		return state.movie;
	});

	/*  code commented bcoz context used */
	// const [watchList, setWatchList] = useState([]);

	// useEffect(() => {
	// 	const moviesFromLocalStorage = JSON.parse(localStorage.getItem("movies"));
	// 	if (moviesFromLocalStorage) {
	// 		setWatchList(moviesFromLocalStorage);
	// 	}
	// }, []);

	// const addToWatchList = (movieObj) => {
	// 	const updatedWatchList = [...watchList, movieObj];
	// 	setWatchList(updatedWatchList);
	// 	localStorage.setItem("movies", JSON.stringify(updatedWatchList));
	// };

	// const removeFromWatchList = (movieObj) => {
	// 	let filteredMovies = watchList.filter((movie) => {
	// 		return movie.id != movieObj.id;
	// 	}); // return all those movies whose id is not equal to movieObj.id
	// 	setWatchList(filteredMovies);
	// 	localStorage.setItem("movies", JSON.stringify(filteredMovies));
	// };
	// console.log("watchlist", watchList);

	const { addToWatchList, removeFromWatchList, watchList } =
		useContext(WatchListContext);

	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${pageNo}`
	// 		)
	// 		.then((response) => {
	// 			console.log(response.data.results);
	// 			setMovies(response.data.results);
	// 		});
	// }, [pageNo]);

	useEffect(() => {
		dispatch(fetchMiddleWare(pageNo));
	}, [pageNo]);

	const handleNext = () => {
		// setPageNo(pageNo + 1);
		dispatch(paginationAction.handleNext());
	};

	const handlePrevious = () => {
		// if (pageNo == 1) {
		// 	setPageNo(1);
		// } else {
		// 	setPageNo(pageNo - 1);
		// }
		dispatch(paginationAction.handlePrev());
	};

	if (loading) {
		return <h1>Loading...</h1>;
	}
	if (error) {
		return <h1>Something went wrong</h1>;
	}

	return (
		<div>
			<div className="text-2xl font-bold text-center m-5">
				<h1>Trending Movies</h1>
			</div>
			<div className="flex justify-evenly flex-wrap gap-8 ">
				{movies.map((movieObj, index) => {
					return (
						<MovieCard
							movieObj={movieObj}
							addToWatchList={addToWatchList}
							watchList={watchList}
							removeFromWatchList={removeFromWatchList}
							key={index}
						/>
					);
				})}
			</div>
			<Pagination
				pageNumber={pageNo}
				previousPageFn={handlePrevious}
				nextPageFn={handleNext}
			/>
		</div>
	);
};

export default Movies;
