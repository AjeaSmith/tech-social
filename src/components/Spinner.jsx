import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = ({ isLoading }) => {
	return (
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
};

export default Spinner;
