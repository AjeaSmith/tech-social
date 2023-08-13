export const formatTimeAgo = (eventTime) => {
    const currentTime = new Date();
	const eventDate = new Date(eventTime);
	const timeDifference = Math.floor((currentTime - eventDate) / (1000 * 60)); // Difference in minutes

	if (timeDifference === 0) {
		return "Just now";
	} else if (timeDifference === 1) {
		return "1 minute ago";
	} else {
		return `${timeDifference} minutes ago`;
	}
}
