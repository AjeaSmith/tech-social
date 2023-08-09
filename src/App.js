import { Routes, Route } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AppPage from "./pages/AppPage";
import HomePage from "./pages/HomePage";
import Login from "./features/auth/Login";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import EditProfilePage from "./pages/EditProfilePage";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFound";
import ViewProfilePage from "./pages/ViewProfilePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<Login />} />
				<Route element={<ProtectedRoute />}>
					<Route index path="/app" element={<AppPage />} />
					<Route path="/edit" element={<EditProfilePage />} />
					<Route path="/view-profile" element={<ViewProfilePage />} />
					<Route path="/projects/:id" element={<ProjectDetailPage />} />
				</Route>
				{/* Catch-all route for unmatched URLs */}
				<Route path="/*" element={<NotFound />} />
			</Routes>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar
			/>
		</>
	);
}

export default App;
