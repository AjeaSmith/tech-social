import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const profileAdapter = createEntityAdapter();

const initialState = profileAdapter.getInitialState();

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
				headers: {
					// No need to set the Content-Type here, the browser will do it automatically
				},
				body: formData, // Just pass the existing FormData object
			}),
		}),
	}),
});

export const { useGetUserQuery, useUpdateUserMutation } = profileApiSlice;
