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
				body: formData,
			}),
		}),
	}),
});

export const { useGetUserQuery, useUpdateUserMutation } = profileApiSlice;
