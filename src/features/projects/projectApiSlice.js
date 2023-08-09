import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const projectsAdapter = createEntityAdapter();

const initialState = projectsAdapter.getInitialState();

export const projectSlice = apiSlice.injectEndpoints({
	tagTypes: ["Project"],
	endpoints: (builder) => ({
		getProjects: builder.query({
			query: () => "/projects",
			// convert data into being normalized
			transformResponse: (responseData) => {
				const loadedProjects = responseData.map((project) => {
					project.id = project._id;
					return project;
				});
				return projectsAdapter.setAll(initialState, loadedProjects);
			},
			providesTags: (result, error, arg) => {
				if (result?.ids) {
					return [
						{ type: "Project", id: "LIST" },
						...result.ids.map((id) => ({ type: "Project", id })),
					];
				} else return [{ type: "Post", id: "LIST" }];
			},
		}),
		getProject: builder.query({
			query: (id) => ({
				url: `/projects/${id}`, // Correct URL construction
				method: "GET",
			}),
			providesTags: (result, error, arg) => {
				if (result?.id) {
					return [{ type: "Project", id: result.id }]; // Use result.id for individual project
				} else {
					return [{ type: "Project", id: "LIST" }];
				}
			},
		}),
		addNewProject: builder.mutation({
			query: (project) => ({
				url: "/projects",
				method: "POST",
				body: project,
			}),
			invalidatesTags: [{ type: "Project", id: "LIST" }],
		}),
	}),
});

export const {
	useGetProjectsQuery,
	useAddNewProjectMutation,
	useGetProjectQuery,
} = projectSlice;

// returns the query result object
export const selectProjectsResult = projectSlice.endpoints.getProjects.select();

// creates memoized selector
const selectProjectsData = createSelector(
	selectProjectsResult,
	(projectsResult) => projectsResult.data
);

// getSelectors creates these selectors to work with adapter entity within components
export const { selectAll: selectAllPosts, selectById: selectProjectById } =
	projectsAdapter.getSelectors(
		(state) => selectProjectsData(state) ?? initialState
	);
