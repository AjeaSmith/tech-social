import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
	setCredentials,
	setSessionExpiredError,
} from "../../features/auth/authSlice";

// sends token on every request
const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:5100/api",
	credentials: "include",
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;

		if (token) {
			headers.set("Authorization", `Bearer ${token}`);
		}
		return headers;
	},
});

// establish refresh token
const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	// If you want, handle other status codes, too
	if (result?.error?.status === 403) {
		api.dispatch(setSessionExpiredError("Please reload page"));
		// send refresh token to get new access token
		const refreshResult = await baseQuery(
			"/auth/refresh",
			api,
			extraOptions
		);

		if (refreshResult?.data) {
			// store the new token
			api.dispatch(setCredentials({ ...refreshResult.data }));

			// retry original query with new access token
			result = await baseQuery(args, api, extraOptions);
		} else {
			if (refreshResult?.error?.status === 403) {
				console.log(refreshResult.error.data.message);
				api.dispatch(
					setSessionExpiredError(refreshResult.error.data.message)
				);
			}
			return refreshResult;
		}
	}

	return result;
};
// Define our single API slice object
export const apiSlice = createApi({
	baseQuery: baseQueryWithReauth,
	tagTypes: ["Project", "User", "Comment"],
	endpoints: (builder) => ({}),
});
