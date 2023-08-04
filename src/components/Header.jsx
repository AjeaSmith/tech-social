import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../features/auth/authSlice";

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSignout = (e) => {
		e.preventDefault();
		dispatch(logOut());

		navigate("/login");
	};
	return (
		<header className="w-full mt-5  text-gray-700 bg-transparent  body-font">
			<div className="container flex flex-col justify-between items-center p-6 mx-auto md:flex-row">
				<h1 className="text-white uppercase">
					<Link to="/app">Tech</Link>
				</h1>
				<div className="flex items-center h-full pl-6 ml-6 border-gray-200">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="white"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-7 h-7 mr-3"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
						/>
					</svg>
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-red-00">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="white"
									className="w-6 h-6"
								>
									<path
										fillRule="evenodd"
										d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
										clipRule="evenodd"
									/>
								</svg>
							</Menu.Button>
						</div>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="py-1">
									<Menu.Item>
										{({ active }) => (
											<Link
												to="/view-profile"
												className={`block w-full px-4 py-2 text-left text-sm hover:bg-red-500 hover:text-gray-200 ${
													active
														? "bg-gray-100 text-gray-900"
														: "text-gray-700"
												}
													)`}
											>
												View Profile
											</Link>
										)}
									</Menu.Item>
								</div>
								<div className="py-1">
									<Menu.Item>
										{({ active }) => (
											<Link
												to="/edit"
												className={`block w-full px-4 py-2 text-left text-sm hover:bg-red-500 hover:text-gray-200 ${
													active
														? "bg-gray-100 text-gray-900"
														: "text-gray-700"
												}
													)`}
											>
												Edit Profile
											</Link>
										)}
									</Menu.Item>
								</div>
								<div className="py-1">
									<form onSubmit={handleSignout}>
										<Menu.Item>
											{({ active }) => (
												<button
													className={`block w-full px-4 py-2 text-left text-sm hover:bg-red-500 hover:text-gray-200 ${
														active
															? "bg-gray-100 text-gray-900"
															: "text-gray-700"
													}
													)`}
												>
													Sign out
												</button>
											)}
										</Menu.Item>
									</form>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
		</header>
	);
};

export default Header;
