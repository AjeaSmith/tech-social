import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const commentsAdapter = createEntityAdapter();

const initialState = commentsAdapter.getInitialState();

export const commentApiSlice = apiSlice.injectEndpoints({
	tagTypes: ["Comment"],
	endpoints: (builder) => ({
		getComments: builder.query({
			query: () => "/comments",
			providesTags: ["Comments"],
		}),
		createComment: builder.mutation({
			query: (data) => ({
				url: "/comments",
				method: "POST",
				body: data, // Just pass the existing FormData object
			}),
			invalidatesTags: ["Comments"],
		}),
		deleteComment: builder.mutation({
			query: (id) => ({
				url: `/comments/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Comments"],
		}),
	}),
});

export const { useGetCommentsQuery, useCreateCommentMutation, useDeleteCommentMutation } =
	commentApiSlice;

// returns the query result object
export const selectCommentsResult =
	commentApiSlice.endpoints.getComments.select();

// creates memoized selector
const selectCommentsData = createSelector(
	selectCommentsResult,
	(commentsResult) => commentsResult.data
);

// getSelectors creates these selectors to work with adapter entity within components
export const { selectAll: selectAllComments, selectById: selectCommentById } =
	commentsAdapter.getSelectors(
		(state) => selectCommentsData(state) ?? initialState
	);
