import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetUserQuery } from "./profileApiSlice";
import { useUpdateUserMutation } from "./profileApiSlice";
import { toast } from "react-toastify";
import ErrorMessage from "../../components/ErrorMessage";

const EditProfileForm = () => {
	const { data: profile, isError, error } = useGetUserQuery();
	const [updateUser, { isLoading }] = useUpdateUserMutation();

	const [selectedImage, setSelectedImage] = useState("");
	const [username, setusername] = useState("");
	const [tagline, setTagline] = useState("");
	const [password, setpassword] = useState("");
	const [link, setlink] = useState("");
	const [bio, setbio] = useState("");
	const [fullName, setfullName] = useState("");
	const [email, setemail] = useState("");
	const [location, setlocation] = useState("");

	useEffect(() => {
		// Check if profile data is available and then set the state
		if (profile) {
			setusername(profile.username);
			setTagline(profile.tagline);
			setpassword(profile.password);
			setlink(profile.link);
			setbio(profile.bio);
			setfullName(profile.fullname);
			setemail(profile.email);
			setlocation(profile.location);
		}
	}, [profile]);

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setSelectedImage(file);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("username", username);
		formData.append("tagline", tagline);
		formData.append("password", password);
		formData.append("link", link);
		formData.append("image", selectedImage);
		formData.append("bio", bio);
		formData.append("fullName", fullName);
		formData.append("email", email);
		formData.append("location", location);

		try {
			await updateUser(formData)
				.unwrap()
				.then((result) => {
					toast.success(result.message, {
						position: "top-right", // You can adjust the position of the toast
						autoClose: 3000, // The toast will auto-close after 3 seconds
						hideProgressBar: true,
					});
					setTimeout(() => {
						window.location.href = "/app";
					}, 3000);
				});
		} catch (error) {
			toast.error(error.message, {
				position: "top-right", // You can adjust the position of the toast
				autoClose: 3000, // The toast will auto-close after 3 seconds
				hideProgressBar: true,
			});
		}
	};
	if (isError) {
		<ErrorMessage error={error} />;
	}

	return (
		<>
			<form
				className="max-w-2xl mx-auto py-12 px-5 md:px-0 text-gray-200"
				onSubmit={handleSubmit}
			>
				<div className="space-y-12">
					<Link to="/app" className="underline flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6 mr-2"
						>
							<path
								fillRule="evenodd"
								d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
								clipRule="evenodd"
							/>
						</svg>
						Back
					</Link>
					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-3xl font-semibold leading-7 text-gray-200">
							Edit Profile
						</h2>
						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<div className="sm:col-span-4">
								<label
									htmlFor="username"
									className="block text-sm font-medium leading-6 text-gray-200"
								>
									Username
								</label>
								<div className="mt-2">
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600 sm:max-w-md">
										<input
											value={username}
											onChange={(e) =>
												setusername(e.target.value)
											}
											type="text"
											name="username"
											id="username"
											autoComplete="username"
											className="px-4 block flex-1 border-0 bg-transparent text-gray-200 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
							</div>
							<div className="sm:col-span-4">
								<label
									htmlFor="tagline"
									className="block text-sm font-medium leading-6 text-gray-200"
								>
									Tagline
								</label>
								<div className="mt-2">
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600 sm:max-w-md">
										<input
											value={tagline}
											onChange={(e) =>
												setTagline(e.target.value)
											}
											type="text"
											name="tagline"
											id="tagline"
											autoComplete="tagline"
											className="px-4 block flex-1 border-0 bg-transparent text-gray-200 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
							</div>
							<div className="sm:col-span-4">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-200"
								>
									Password
								</label>
								<div className="mt-2">
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600 sm:max-w-md">
										<input
											value={password}
											onChange={(e) =>
												setpassword(e.target.value)
											}
											type="password"
											name="password"
											id="password"
											autoComplete="password"
											className="px-4 block flex-1 border-0 bg-transparent text-gray-200 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
							</div>
							<div className="col-span-full">
								<label
									htmlFor="link"
									className="block text-sm mb-4 font-medium leading-6 text-gray-200"
								>
									Link to website
								</label>
								<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600 sm:max-w-md">
									<input
										value={link}
										type="text"
										name="link"
										onChange={(e) =>
											setlink(e.target.value)
										}
										className="px-4 block flex-1 border-0 bg-transparent text-gray-200 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div className="col-span-full">
								<label
									htmlFor="about"
									className="block text-sm font-medium leading-6 text-gray-200"
								>
									About
								</label>
								<div className="mt-2">
									<textarea
										value={bio}
										onChange={(e) => setbio(e.target.value)}
										id="about"
										name="about"
										rows={3}
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
									/>
								</div>
								<p className="mt-3 text-sm leading-6 text-gray-400">
									Write a few sentences about yourself.
								</p>
							</div>

							<div className="col-span-full">
								<label
									htmlFor="image"
									className="block text-sm mb-4 font-medium leading-6 text-gray-200"
								>
									Photo
								</label>
								<section className="border-dashed border-2 rounded-md border-gray-400 py-12 flex flex-col justify-center items-center">
									<input
										type="file"
										name="image"
										onChange={handleImageChange}
										accept="image/*"
										className="my-4"
									/>
								</section>
							</div>
						</div>
					</div>

					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-base font-semibold leading-7 text-gray-200">
							Personal Information
						</h2>
						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
							<div className="col-span-4">
								<label
									htmlFor="full-name"
									className="block text-sm font-medium leading-6 text-gray-200"
								>
									Full Name
								</label>
								<div className="mt-2">
									<input
										value={fullName}
										onChange={(e) =>
											setfullName(e.target.value)
										}
										type="text"
										name="full-name"
										id="full-name"
										autoComplete="given-name"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="col-span-4">
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-200"
								>
									Email address
								</label>
								<div className="mt-2">
									<input
										value={email}
										onChange={(e) =>
											setemail(e.target.value)
										}
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="col-span-2">
								<label
									htmlFor="region"
									className="block text-sm font-medium leading-6 text-gray-200"
								>
									Location
								</label>
								<div className="mt-2">
									<input
										value={location}
										onChange={(e) =>
											setlocation(e.target.value)
										}
										type="text"
										name="region"
										id="region"
										placeholder="Detroit, MI"
										autoComplete="address-level1"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-6 flex items-center justify-end gap-x-6">
					<button
						disabled={isLoading}
						type="submit"
						className="w-full rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
					>
						{isLoading ? "Updating..." : "Update Profile"}
					</button>
				</div>
			</form>
		</>
	);
};

export default EditProfileForm;
