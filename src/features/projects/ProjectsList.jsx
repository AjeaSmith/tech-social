import React from "react";
import { useGetProjectsQuery } from "./projectApiSlice";
import Project from "./Project";
import Spinner from "../../components/Spinner";

const ProjectsList = () => {
	const { data: projects, isLoading } = useGetProjectsQuery();

	if (isLoading) return <Spinner isLoading={isLoading} />;

	if (!projects?.ids.length)
		return (
			<>
				<p>No projects to show, be the first to create</p>
			</>
		);

	return (
		<>
			{projects.ids.map((projectId) => {
				return <Project key={projectId} projectId={projectId} />;
			})}
		</>
	);
};

export default ProjectsList;
