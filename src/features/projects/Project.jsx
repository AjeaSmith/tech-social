import React from "react";
import { useSelector } from "react-redux";
import { selectProjectById } from "./projectApiSlice";

const Project = ({ projectId }) => {
	const project = useSelector((state) => selectProjectById(state, projectId));
	console.log(project);
	return <div>project details</div>;
};

export default Project;
