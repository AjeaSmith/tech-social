import { apiSlice } from "../../app/api/apiSlice";
import { logOut, setCredentials } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (credentials) => ({
				url: "/auth/register",
				method: "POST",
				body: { ...credentials },
			}),
		}),
		login: builder.mutation({
			query: (credentials) => ({
				url: "/auth/login",
				method: "POST",
				body: { ...credentials },
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: "/auth/logout",
				method: "POST",
			}),
			// clears out all data from cache/resets state when request succeeds
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					await queryFulfilled;
					dispatch(logOut());
					dispatch(apiSlice.util.resetApiState());
				} catch (err) {
					console.log(err);
				}
			},
		}),
		refresh: builder.mutation({
			query: () => ({
				url: "/auth/refresh",
				method: "GET",
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					console.log(data);
					const { accessToken } = data;
					dispatch(setCredentials({ accessToken }));
				} catch (err) {
					console.log(err.error);
				}
			},
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useRefreshMutation,
	useLogoutMutation,
} = authApiSlice;
