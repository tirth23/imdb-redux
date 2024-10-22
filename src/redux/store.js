import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";
import paginationSlice from "./paginationSlice";
import userSlice from "./User/userSlice";
import movieSlice from "./Movie/movieSlice";

const store = configureStore({
	reducer: {
		/* name of slice: reducer  */
		counter: counterReducer,
		todo: todoReducer,
		user: userSlice.reducer,
		pagination: paginationSlice.reducer,
		movie: movieSlice.reducer,
	},
});

export default store;
