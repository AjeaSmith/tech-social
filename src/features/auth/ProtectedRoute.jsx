import { Link, Navigate, Outlet } from "react-router-dom";
import { selectCurrentToken, selectSessionError } from "./authSlice";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
	const token = useSelector(selectCurrentToken);
	const sessionError = useSelector(selectSessionError);

	switch (sessionError || token) {
		case "Your session expired, please log in":
			return (
				<p className="text-white text-center mt-5 underline">
					<Link to="/login">{sessionError}</Link>
				</p>
			);
		case "Please reload page":
			return (
				<p className="text-white text-center mt-16 text-2xl">
					{sessionError}
				</p>
			);

		case null:
			return <Navigate to="/login" replace />;

		default:
			return <Outlet />;
	}
};

export default ProtectedRoute;
