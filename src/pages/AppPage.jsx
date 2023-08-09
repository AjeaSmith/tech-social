import React from "react";
import Header from "../components/Header";
import ProfileCard from "../features/profile/ProfileCard";
import useAuth from "../hooks/useAuth";
import ProjectsList from "../features/projects/ProjectsList";

const AppPage = () => {
	return (
		<>
			<Header />
			<section className="app_wrapper max-w-7xl xl:mx-auto text-gray-200">
				<div className="app_wrapper--profile ">
					<ProfileCard />
				</div>
				<div className="app_wrapper--projects">
					<ProjectsList />
				</div>
				{/* Profile component */}
				{/* Create a post component */}
				{/* NewsFeed component */}
				{/* Account component */}
			</section>
		</>
	);
};

export default AppPage;
