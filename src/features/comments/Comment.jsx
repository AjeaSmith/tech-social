import React from "react";

const Comment = ({ comment }) => {
	return (
		<div className="media flex pb-4 mb-2">
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
						25 minutes ago
					</span>
				</div>
				<p>{comment.text}</p>
			</div>
		</div>
	);
};

export default Comment;
