import React from "react";
import { useGetUserQuery } from "./profileApiSlice";
import CharacterLimitText from "../../components/CharacterLimitText";
import ClipLoader from "react-spinners/ClipLoader";

const ProfileCard = () => {
	const { data: profile, isLoading, isSuccess, error } = useGetUserQuery();

	let content;

	if (isLoading) {
		// Spinner
		content = (
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
	if (isSuccess) {
		content = (
			<div className="max-w-sm mx-auto rounded-xl shadow-md p-5 bg-[#1A2730]">
				<img
					className="w-32 h-32 rounded-full mx-auto"
					src={profile.profilePic}
					alt={profile.fullname}
				/>
				<h2 className="text-center text-2xl font-semibold mt-3">
					{profile.fullname}
					<p className="text-sm mb-5 text-gray-400 italic">
						@{profile.username}
					</p>
				</h2>
				<p className="text-center text-gray-400 mt-1">
					{profile.tagline}
				</p>
				<div className="flex justify-center mt-3">
					{profile.link ? (
						<a
							href={profile.link}
							className="text-blue-500 hover:text-blue-700 mx-3"
						>
							Website
						</a>
					) : null}
				</div>
				<div className="mt-5 text-center">
					{profile.bio ? (
						<p className="text-gray-400 mt-2">
							<CharacterLimitText
								text={profile.bio}
								maxCharacterCount={100}
							/>
						</p>
					) : (
						<p className="text-gray-400 mt-2">
							"A short bio about yourself..."
						</p>
					)}
				</div>
			</div>
			// <div>
			// 	<div className="relative max-w-xs mr-auto mt-6 min-w-0 break-words bg-[#1A2730] w-full mb-6 shadow-lg rounded-xl">
			// 		<div className="px-6">
			// 			<div className="flex flex-wrap justify-center">
			// 				<div className="w-full flex justify-center">
			// 					<div className="relative rounded-[50%]">
			// 						<img
			// 							alt={profile.username}
			// 							src={profile.profilePic}
			// 							className="shadow-xl rounded-full object-cover h-[150px] -m-16 -ml-20 lg:-ml-16 border-none absolute max-w-[150px]"
			// 						/>
			// 					</div>
			// 				</div>
			// 				<div className="w-full text-center mt-20">
			// 					<div className="flex justify-center lg:pt-4 pt-8 pb-0">
			// 						<div className="p-3 text-center">
			// 							<span className="text-xl font-bold block uppercase tracking-wide text-slate-200">
			// 								3,360
			// 							</span>
			// 							<span className="text-sm text-slate-400">
			// 								Photos
			// 							</span>
			// 						</div>
			// 					</div>
			// 				</div>
			// 			</div>
			// 			<div className="text-center mt-2">
			// 				<h3 className="text-2xl text-slate-200 font-bold leading-normal mb-1">
			// 					{profile.username}
			// 				</h3>
			// 				<div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
			// 					<i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
			// 					{profile.location
			// 						? profile.location
			// 						: "Detroit, Michigan"}
			// 				</div>
			// 			</div>
			// 			<div className="mt-6 py-6 border-t border-slate-500 text-center">
			// 				<div className="flex flex-wrap justify-center">
			// 					<div className="w-full px-4">
			// 						<p className="font-light leading-relaxed text-slate-200 mb-4">
			// 							{profile.bio ? (
			// 								<CharacterLimitText
			// 									text={profile.bio}
			// 									maxCharacterCount={100}
			// 								/>
			// 							) : (
			// 								"A short bio about yourself..."
			// 							)}
			// 						</p>
			// 					</div>
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>
		);
	}
	return content;
};

export default ProfileCard;
