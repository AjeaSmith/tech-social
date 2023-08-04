import React from "react";
import Register from "./Register";
import { Link } from "react-router-dom";

const AuthPage = () => {
	return (
		<div className="auth-page-layout place-content-center max-w-6xl mx-auto md:max-w-none bg-[#19242D]">
			<Register />
			<h2 className="text-lg py-10">
				Already have account? <Link to="/login" className="underline">Sign in</Link>
			</h2>
		</div>
	);
};

export default AuthPage;
