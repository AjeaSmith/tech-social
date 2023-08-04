import React, { useEffect } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useRefreshMutation } from "./authApiSlice";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";

const PersistLogin = () => {
	const token = useSelector(selectCurrentToken);

	const [refresh, { isError, error, isLoading }] = useRefreshMutation();

	useEffect(() => {
		const verifyRefreshToken = async () => {
			try {
				await refresh();
			} catch (err) {
				console.error(err);
			}
		};

		if (!token) {
			verifyRefreshToken();
		}
		// eslint-disable-next-line
	}, []);

	let content;

	if (isLoading) {
		content = <p className="text-white text-center mt-5">Loading...</p>;
	} else if (token) {
		// continue to protected routes
		content = <Outlet />;
	} else if (isError) {
		content = (
			<p className="text-white text-center mt-5">
				{error}{" "}
				<Link to="/login" className="underline">
					Please login again
				</Link>
				.
			</p>
		);
	}

	return content;
};

export default PersistLogin;
