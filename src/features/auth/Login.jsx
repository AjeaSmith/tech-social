import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useLoginMutation } from "./authApiSlice";
import { setCredentials } from "./authSlice";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errMsg, setErrMsg] = useState("");

	const dispatch = useDispatch();

	const [login, { isLoading }] = useLoginMutation();

	useEffect(() => {
		setErrMsg("");
	}, [username, password]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await login({
				username,
				password,
			})
				.unwrap()
				.then(({ accessToken }) => {
					dispatch(setCredentials({ accessToken }));

					setUsername("");
					setPassword("");

					// Navigate to the "/app" route after setting the access token
					window.location.href = "/app";
				})
				.catch((err) => {
					console.log(err);
					setErrMsg("Login failed. Please check your credentials.");
				});
		} catch (error) {
			setErrMsg(error.data?.message);
		}
	};

	return (
		<div className="flex justify-center min-h-full flex-1 flex-col px-6 bg-[#19242D] lg:px-8 ">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
					Sign in to your account
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<div
					className={`${
						errMsg ? "block" : "hidden"
					} bg-red-100 border mb-5 border-red-400 text-red-700 px-4 py-3 rounded relative`}
					role="alert"
				>
					<strong className="font-bold">Oops! </strong>
					<span className="block sm:inline">{errMsg}</span>
				</div>
				<form className="space-y-6" onSubmit={handleSubmit}>
					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="username"
								className="block text-sm font-medium leading-6 text-gray-400"
							>
								Username
							</label>
						</div>
						<div className="mt-2">
							<input
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								id="username"
								name="username"
								type="text"
								autoComplete="username"
								className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-gray-400"
							>
								Password
							</label>
						</div>
						<div className="mt-2">
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<button className="flex w-full justify-center rounded-md bg-rose-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">
							{isLoading ? "Loading..." : "Sign in"}
						</button>

						<p className="text-white text-lg text-center py-5">
							Don't have an account?{" "}
							<Link to="/" className="underline">
								Register
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
