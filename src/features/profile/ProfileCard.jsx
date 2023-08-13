import { useGetUserQuery } from "./profileApiSlice";
import CharacterLimitText from "../../components/CharacterLimitText";
import ErrorMessage from "../../components/ErrorMessage";
import Spinner from "../../components/Spinner";

const ProfileCard = () => {
	const { data: profile, isLoading, error, isError } = useGetUserQuery();

	if (isError) {
		return <ErrorMessage error={error} />;
	}
	if (isLoading) {
		// Spinner
		return <Spinner isLoading={isLoading} />;
	}

	return (
		<div className="max-w-sm mx-auto rounded-md shadow-md p-5 bg-[#1A2730] drop-shadow-lg">
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
			<p className="text-center text-gray-400 mt-1">{profile.tagline}</p>
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
	);
};

export default ProfileCard;
