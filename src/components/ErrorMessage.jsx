import React from "react";

const ErrorMessage = ({ error }) => {
	return (
		<div className="flex justify-center items-center mt-16 text-2xl text-white">
			<p>Oops, something went wrong: {error} </p>
		</div>
	);
};

export default ErrorMessage;
