import React from "react";
import { useGetProjectQuery } from "../features/projects/projectApiSlice";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";
import { formattedDate } from "../components/FormattedDate";
const ProjectDetailPage = () => {
	const { userId } = useAuth();
	const { id } = useParams();
	const { data: project, isLoading, error, isError } = useGetProjectQuery(id);

	if (isLoading) {
		return <Spinner isLoading={isLoading} />;
	}
	if (isError) {
		return <ErrorMessage error={error} />;
	}

	return (
		<>
			<Header />
			<div className="wrapper flex flex-col items-center text-slate-200 mt-10 max-w-3xl mx-auto">
				<article className="mb-4 break-inside p-6 rounded-md flex flex-col bg-clip-border drop-shadow-lg">
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
									<Link
										to={`/view-profile/${userId}`}
										className="inline-block text-lg font-bold dark:text-white"
									>
										{project.user.username}
									</Link>
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
						<div className="flex justify-between gap-1 mb-1 w-full">
							<img
								alt={project.image}
								className="w-3/6"
								src={project.image}
							/>
						</div>
					</div>
					<p className="dark:text-slate-200">{project.description}</p>
					<div className="py-4">
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

					<div className="relative">
						<input
							className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
							type="text"
							placeholder="Write a comment"
						/>
						<span className="flex absolute right-3 top-2/4 -mt-3 items-center">
							<svg
								className="fill-blue-500 dark:fill-slate-50 w-[24px] h-[24px]"
								viewBox="0 0 24 24"
							>
								<path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
							</svg>
						</span>
					</div>
					{project.comments.length ? (
						<div className="pt-6">
							{/* <!-- Comment row --> */}
							<div className="media flex pb-4 mb-2">
								<img
									alt="something"
									className="rounded-full max-w-none w-12 h-12 mr-4"
									src="https://randomuser.me/api/portraits/men/82.jpg"
								/>

								<div className="media-body">
									<div>
										<p className="inline-block text-base font-bold mr-2">
											Leslie Alexander
										</p>
										<span className="text-slate-500 text-sm">
											25 minutes ago
										</span>
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur.
									</p>
								</div>
							</div>
							{/* <!-- End comments row -->
          <!-- comments row --> */}
							<div className="media flex pb-4">
								<img
									alt="something"
									className="rounded-full max-w-none w-12 h-12 mr-4"
									src="https://randomuser.me/api/portraits/women/76.jpg"
								/>

								<div className="media-body">
									<div>
										<p className="inline-block text-base font-bold mr-2">
											Tina Mills{" "}
										</p>
										<span className="text-slate-500 text-sm">
											3 minutes ago
										</span>
									</div>
									<p>
										Dolor sit ameteiusmod consectetur
										adipiscing elit.
									</p>
								</div>
							</div>
							{/* <!-- End comments row -->
          <!-- More comments --> */}
							{/* <div className="w-full">
								<a
									href="#"
									className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75"
								>
									Show more comments
								</a>
							</div> */}
							{/* <!-- End More comments --> */}
						</div>
					) : (
						<p className="mt-5">No comments</p>
					)}
				</article>
			</div>
		</>
	);
};

export default ProjectDetailPage;
