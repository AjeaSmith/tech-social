import React from "react";
import Spinner from "../../components/Spinner";
import { useGetCommentsQuery } from "./commentApiSlice";
import Comment from "./Comment";

const Comments = () => {
	const { data: comments, isLoading } = useGetCommentsQuery();

	if (isLoading) {
		return <Spinner isLoading={isLoading} />;
	}

	// Sort comments by creation date (assuming "createdAt" is a property)
	const sortedComments = [...comments].sort(
		(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
	);

	return (
		<div className="pt-6">
			{sortedComments.map((comment) => (
				<Comment key={comment._id} comment={comment} />
			))}
		</div>
	);
};

export default Comments;
