import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./authApiSlice";

const Register = () => {
	const [fullname, setFullName] = useState("");
	const [username, setUsername] = useState("");
	const [tagline, setTagline] = useState("");
	const [email, setemail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errMsg, setErrMsg] = useState("");

	const navigate = useNavigate();

	const [register, { isLoading }] = useRegisterMutation();

	useEffect(() => {
		setErrMsg("");
	}, [username, password]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setErrMsg("Passwords must match");
			return;
		}

		await register({ fullname, username, tagline, email, password })
			.unwrap()
			.then((_) => {
				setFullName("");
				setUsername("");
				setTagline("");
				setemail("");
				setConfirmPassword("");
				setPassword("");
				navigate("/login");
			})
			.catch((err) => {
				setErrMsg(err.data?.message);
			});
	};

	return (
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
					Create your account
				</h2>
			</div>

			<div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
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
								htmlFor="fullname"
								className="block text-sm font-medium leading-6 text-gray-400"
							>
								Full Name
							</label>
						</div>
						<div className="mt-2">
							<input
								value={fullname}
								onChange={(e) => setFullName(e.target.value)}
								id="fullname"
								name="fullname"
								type="text"
								className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="fullname"
								className="block text-sm font-medium leading-6 text-gray-400"
							>
								Tagline
							</label>
						</div>
						<div className="mt-2">
							<input
								value={tagline}
								onChange={(e) => setTagline(e.target.value)}
								id="tagline"
								name="tagline"
								type="text"
								placeholder="e.g. Software Developer"
								className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
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
								className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-400"
							>
								Email
							</label>
						</div>
						<div className="mt-2">
							<input
								value={email}
								onChange={(e) => setemail(e.target.value)}
								id="email"
								name="email"
								type="email"
								autoComplete="email"
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
						<div className="flex items-center justify-between">
							<label
								htmlFor="confirm-password"
								className="block text-sm font-medium leading-6 text-gray-400"
							>
								Confirm Password
							</label>
						</div>
						<div className="mt-2">
							<input
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
								id="confirm-password"
								name="confirm-password"
								type="password"
								autoComplete="current-password"
								className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-rose-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
						>
							{isLoading ? "Loading..." : "Sign up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
