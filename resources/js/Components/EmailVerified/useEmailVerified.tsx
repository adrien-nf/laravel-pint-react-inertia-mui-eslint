import { useState, useEffect } from "react";

export default function useEmailVerified() {
	const [hasBeenVerified, setHasBeenVerified] = useState(false);

	useEffect(() => {
		const queryParameters = new URLSearchParams(window.location.search);
		setHasBeenVerified(queryParameters.get("verified") === "1");
	}, [window.location.search]);

	return {
		hasBeenVerified
	};
}
