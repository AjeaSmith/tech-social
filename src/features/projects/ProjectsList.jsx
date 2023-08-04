import React from "react";
import { useGetProjectsQuery } from "./projectApiSlice";
import Project from "./Project";

const ProjectsList = () => {
	const { data: projects, isLoading, isSuccess } = useGetProjectsQuery();

	let content;

	if (isLoading) return <h1>Loading....</h1>;

	if (!projects?.ids.length)
		return (content = (
			<>
				<p>No projects to show, be the first to create</p>
			</>
		));

	if (isSuccess) {
		return (content = (
			<>
				{projects.ids.map((postId) => {
					return <Project key={postId} postId={postId} />;
				})}
			</>
		));
	}
	return content;
};

export default ProjectsList;

// 64bec7d3c4cbe08e71b1c325
