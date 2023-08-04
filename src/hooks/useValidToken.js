import { selectCurrentToken } from "../features/auth/authSlice";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

const useValidToken = () => {
	const token = useSelector(selectCurrentToken);
	try {
		const decodedToken = jwtDecode(token);
		if (decodedToken && decodedToken.exp) {
			const currentTime = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds
			return currentTime >= decodedToken.exp;
		}
	} catch (error) {
		console.log(error);
	}
	return true;
};

export default useValidToken;
