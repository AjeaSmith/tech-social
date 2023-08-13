import React from "react";
import useAuth from "../../hooks/useAuth";
import { useDeleteCommentMutation } from "./commentApiSlice";
import { toast } from "react-toastify";
import { formatTimeAgo } from "../../utils/formatTimeAgo";

const Comment = ({ comment }) => {
	const { userId } = useAuth();
	const [deleteComment] = useDeleteCommentMutation();

	const handleDeleteComment = async (commentId) => {
		await deleteComment(commentId)
			.unwrap()
			.then((result) => {
				toast.success(result.message, {
					autoClose: 3000,
					hideProgressBar: false,
				});
			})
			.catch((err) =>
				toast.error(err.message, {
					autoClose: 3000,
					hideProgressBar: false,
				})
			);
	};

	return (
		<div className="media flex justify-between pb-4 mb-2">
			<div className="flex">
				<img
					alt={comment.user.username}
					className="rounded-full max-w-none w-12 h-12 mr-4"
					src={comment.user.profilePic}
				/>
				<div className="media-body">
					<div>
						<p className="inline-block text-base font-bold mr-2">
							{comment.user.username}
						</p>
						<span className="text-slate-500 text-sm">
							{formatTimeAgo(comment.createdAt)}
						</span>
					</div>
					<p>{comment.text}</p>
				</div>
			</div>
			{userId === comment.user._id ? (
				<svg
					onClick={() => handleDeleteComment(comment._id)}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="red"
					className="w-6 h-6 cursor-pointer"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			) : null}
		</div>
	);
};

export default Comment;
