import React, { useState } from "react";
import Header from "../components/Header";
import ProfileCard from "../features/profile/ProfileCard";
import CreateProjectModal from "../components/CreateProjectModal";

const AppPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Header />
			<section className="app_wrapper max-w-7xl xl:mx-auto text-gray-200">
				<div className="app_wrapper--profile border-2 border-red-700">
					<ProfileCard />
				</div>
				<div className="app_wrapper--projects border-2 border-blue-700">
					<button onClick={() => setIsOpen(!isOpen)}>
						Create Project
					</button>
					<CreateProjectModal isOpen={isOpen} setIsOpen={setIsOpen} />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
					eveniet libero tempore dolor vero, nihil, molestiae, nulla
					accusantium voluptates doloribus neque. Et illum quas
					voluptates nulla ad enim non. Laborum voluptatum voluptatem
					commodi assumenda libero, quas praesentium minima, dolor
					necessitatibus aliquid est ratione, enim voluptas officiis.
					Tempora at accusamus reprehenderit neque, itaque sed
					laudantium suscipit vitae enim perspiciatis hic? Excepturi,
					maxime! Consectetur tempora accusantium pariatur a.
					Consequuntur ullam architecto quam repellendus reiciendis
					iusto nobis quod repudiandae quo quis, minus aspernatur
					culpa porro doloribus corrupti quas iure id similique eius
					laborum eligendi nemo odit totam possimus? Eum, est.
					Doloremque in non facilis quo, sunt quod quos porro mollitia
					nesciunt alias, at, laboriosam ex odio a eos dolores tenetur
					ullam molestias adipisci nam perferendis. Explicabo, dolorem
				</div>
				{/* <PostsList /> */}
				{/* Profile component */}
				{/* Create a post component */}
				{/* NewsFeed component */}
				{/* Account component */}
			</section>
		</>
	);
};

export default AppPage;
