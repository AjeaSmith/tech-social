import React from "react";
import AuthPage from "../features/auth/AuthPage";

const HomePage = () => {
	return (
		<>
			<div className="text-center text-white bg-[#19242D] h-screen">
				<h1 className="text-2xl font-bold p-4">
					Welcome to the ultimate Social Platform! <br />
					Try it out with a demo user?
				</h1>
				<p className="p-4 text-gray-400">
					username: JohnDoe
					<br />
					email:johnD@mail.com <br />
					password: test123
				</p>
				<AuthPage />
			</div>
		</>
	);
};

export default HomePage;
