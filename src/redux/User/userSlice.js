import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "userSlice",
	initialState: {
		user: null,
		error: false,
		loading: true,
	},
	reducers: {
		userLoading: (state, action) => {
			state.error = false;
			state.loading = action.payload;
		},
		userError: (state) => {
			state.error = true;
			state.loading = false;
		},
		userData: (state, action) => {
			state.loading = false;
			state.error = false;
			state.user = action.payload;
		},
	},
});

export default userSlice;
