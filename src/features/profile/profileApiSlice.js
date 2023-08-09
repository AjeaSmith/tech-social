import { apiSlice } from "../../app/api/apiSlice";

export const profileApiSlice = apiSlice.injectEndpoints({
	tagTypes: ["User"],
	endpoints: (builder) => ({
		getUser: builder.query({
			query: () => "/users",
		}),
		updateUser: builder.mutation({
			query: (formData) => ({
				url: "/users",
				method: "PATCH",
				headers: {},
				body: formData, // Just pass the existing FormData object
			}),
		}),
	}),
});

export const { useGetUserQuery, useUpdateUserMutation } = profileApiSlice;
