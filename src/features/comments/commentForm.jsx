import { useState } from "react";
import { useCreateCommentMutation } from "./commentApiSlice";
import { toast } from "react-toastify";

const CommentForm = ({ projectId }) => {
	const [comment, setComment] = useState("");
	const [createComment, { isLoading }] = useCreateCommentMutation();

	const handleCommentForm = async (e) => {
		e.preventDefault();
		const data = { text: comment, projectId };

		await createComment(data)
			.unwrap()
			.then((result) => {
				setComment("");
				toast.success(result.message, {
					autoClose: 3000,
					hideProgressBar: false,
				});
			})
			.catch((err) => {
				toast.error(err.message, {
					autoClose: 3000,
					hideProgressBar: false,
				});
				console.log(err);
			});
	};
	return (
		<div className="relative">
			<form onSubmit={handleCommentForm}>
				<input
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
					type="text"
					placeholder="Write a comment"
				/>

				<button>
					{isLoading ? (
						"loading..."
					) : (
						<span className="flex absolute right-3 top-2/4 -mt-3 items-center">
							<svg
								className="fill-blue-500 dark:fill-slate-50 w-[24px] h-[24px]"
								viewBox="0 0 24 24"
							>
								<path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
							</svg>
						</span>
					)}
				</button>
			</form>
		</div>
	);
};

export default CommentForm;
