import React from "react";
import { useGetUserQuery } from "./profileApiSlice";
import { ClipLoader } from "react-spinners";

const ViewProfile = () => {
	const { data: profile, isLoading, error, isError } = useGetUserQuery();

	if (isLoading) {
		return (
			<div className="flex justify-center items-center">
				<ClipLoader
					color="#ffffff"
					loading={isLoading}
					size={150}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			</div>
		);
	}

	if (isError) {
		return (
			<p className="text-center text-white text-2xl mt-16">
				Oops, something went wrong {error}
			</p>
		);
	}

	return (
		<div className="profile-page">
			<section className="relative block h-500-px">
				<div
					className="absolute top-0 w-full h-full bg-center bg-cover"
					style={{
						backgroundImage: "url('https://picsum.photos/200')",
					}}
				>
					<span
						id="blackOverlay"
						className="w-full h-full absolute opacity-50"
					></span>
				</div>
				<div className="bg-[#06151D] top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"></div>
			</section>
			<section className="relative py-16 bg-[#06151D]">
				<div className="container mx-auto px-4">
					<div className="relative flex flex-col min-w-0 break-words bg-[#1A2730] w-full mb-6 shadow-xl rounded-lg -mt-64">
						<div className="px-6">
							<div className="flex flex-wrap justify-center">
								<div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
									<div className="relative">
										<img
											alt={profile.username}
											src={profile.profilePic}
											className="shadow-xl rounded-full object-cover h-[150px] -m-16 -ml-20 lg:-ml-16 border-none absolute max-w-[150px]"
										/>
									</div>
								</div>
							</div>
							<div className="text-center mt-[8rem]">
								<h3 className="text-4xl font-semibold leading-normal text-gray-200 mb-2">
									{profile.fullname}
								</h3>
								<div className="flex justify-center items-center text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-5 h-5 mr-2 text-blueGray-400"
									>
										<path
											fillRule="evenodd"
											d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
											clipRule="evenodd"
										/>
									</svg>
									{profile.location}
								</div>
								<div className="flex justify-center items-center mb-2 text-gray-200 mt-10">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-5 h-5 mr-2 text-blueGray-400"
									>
										<path
											fillRule="evenodd"
											d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
											clipRule="evenodd"
										/>
										<path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
									</svg>

									{profile.tagline}
								</div>
								{profile.link ? (
									<div className="flex justify-center items-center mb-2 text-gray-200">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-5 h-5 mr-2 text-blueGray-400"
										>
											<path
												fillRule="evenodd"
												d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z"
												clipRule="evenodd"
											/>
										</svg>

										<a
											href={profile.link}
											className="underline"
										>
											Website
										</a>
									</div>
								) : null}
							</div>
							<div className="mt-10 py-10 border-t border-gray-600 text-center">
								<div className="flex flex-wrap justify-center">
									<div className="w-full lg:w-9/12 px-4">
										<p className="mb-4 text-lg leading-relaxed text-gray-400">
											{profile.bio}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer className="relative bg-[#06151D] pt-8 pb-6 mt-8">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap items-center md:justify-between justify-center">
							<div className="w-full md:w-6/12 px-4 mx-auto text-center">
								<div className="text-sm text-gray-500 font-semibold py-1">
									Made with{" "}
									<a
										href="https://picsum.photos/200"
										className="text-blueGray-500 hover:text-gray-800"
									>
										Notus JS
									</a>{" "}
									by{" "}
									<a
										href="https://picsum.photos/200"
										className="text-blueGray-500 hover:text-blueGray-800"
									>
										{" "}
										Creative Tim
									</a>
									.
								</div>
							</div>
						</div>
					</div>
				</footer>
			</section>
		</div>
	);
};

export default ViewProfile;
