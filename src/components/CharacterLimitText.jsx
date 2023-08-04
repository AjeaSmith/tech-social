import { useState, useEffect } from "react";

const CharacterLimitText = ({ text, maxCharacterCount }) => {
	const [truncatedText, setTruncatedText] = useState(text);

	useEffect(() => {
		if (text.length > maxCharacterCount) {
			setTruncatedText(text.substring(0, maxCharacterCount) + "...");
		} else {
			setTruncatedText(text);
		}
	}, [text, maxCharacterCount]);

	return <>{truncatedText}</>;
};

export default CharacterLimitText;
