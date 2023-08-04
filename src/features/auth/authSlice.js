import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: sessionStorage.getItem("token") || null,
		sessionError: null,
	},
	reducers: {
		setSessionExpiredError: (state, action) => {
			state.sessionError = action.payload;
		},
		setCredentials: (state, action) => {
			const { accessToken } = action.payload;
			sessionStorage.setItem("token", accessToken);
		},
		logOut: (state, action) => {
			sessionStorage.removeItem("token");
		},
	},
});

export const { setCredentials, logOut, setSessionExpiredError } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
export const selectSessionError = (state) => state.auth.sessionError;
