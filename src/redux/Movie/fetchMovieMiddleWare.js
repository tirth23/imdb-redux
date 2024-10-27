import movieSlice from "./movieSlice";

const actions = movieSlice.actions;

const fetchMiddleWare = (pageNo) => {
	// 2. you automatically get the dispatch
	return async function (dispatch) {
		console.log(pageNo);
		try {
			dispatch(actions.movieLoading(true));
			const resp = await fetch(
				`https://api.themoviedb.org/3/trending/movie/day?api_key=${
					import.meta.env.VITE_API_KEY
				}&language=en-US&page=${pageNo}`
			);
			const moviesObj = await resp.json();
			dispatch(actions.movieData(moviesObj.results));
		} catch (err) {
			dispatch(actions.movieError());
		} finally {
			dispatch(actions.movieLoading(false));
		}
	};
};
export default fetchMiddleWare;
