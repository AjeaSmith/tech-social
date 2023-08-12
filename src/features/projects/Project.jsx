import React from "react";
import { useSelector } from "react-redux";
import { selectProjectById } from "./projectApiSlice";
import { Link } from "react-router-dom";
import CharacterLimitText from "../../components/CharacterLimitText";
import { formattedDate } from "../../components/FormattedDate";

const Project = ({ projectId }) => {
	const project = useSelector((state) => selectProjectById(state, projectId));
	return (
		<Link
			to={`/projects/${projectId}`}
			className="wrapper flex flex-col items-center"
		>
			<article className="mb-4 break-inside p-6 rounded-md bg-[#1A2730] flex flex-col bg-clip-border drop-shadow-lg">
				<div className="flex pb-6 items-center justify-between">
					<div className="flex">
						<div className="inline-block mr-4">
							<img
								alt={project.user.username}
								className="rounded-full max-w-none w-12 h-12"
								src={project.user.profilePic}
							/>
						</div>
						<div className="flex flex-col">
							<div>
								<p className="inline-block text-lg font-bold dark:text-white">
									{project.user.username}
								</p>
							</div>
							<div className="text-slate-500 dark:text-slate-400">
								{formattedDate(project.createdAt)}
							</div>
						</div>
					</div>
				</div>
				<h2 className="text-3xl font-extrabold dark:text-white">
					{project.title}
				</h2>
				<div className="py-4">
					<div className="flex justify-between gap-1 mb-1">
						<img
							alt={project.image}
							className="max-w-full w-1/3"
							src={project.image}
						/>
					</div>
				</div>
				<p className="dark:text-slate-200">
					<CharacterLimitText
						text={project.description}
						maxCharacterCount={200}
					/>
				</p>
				<div className="pt-4">
					<div className="inline-flex items-center mr-5" href="#">
						<span className="mr-2">
							<svg
								className="fill-red-600 dark:fill-red-600 w-[24px] h-[24px]"
								viewBox="0 0 24 24"
							>
								<path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
							</svg>
						</span>
						<span className="text-lg font-bold">
							{project.hearts.length}
						</span>
					</div>
					<div className="inline-flex items-center">
						<span className="mr-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-[24px] h-[24px]"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
								/>
							</svg>
						</span>
						<span className="text-lg font-bold">
							{project.comments.length}
						</span>
					</div>
				</div>
			</article>
		</Link>
	);
};

export default Project;
