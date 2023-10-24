import React from "react";
import { Alert } from "@mui/material";
import useEmailVerified from "./useEmailVerified";

export default function EmailVerified() {
	const { hasBeenVerified } = useEmailVerified();

	return hasBeenVerified ? (
		<Alert severity="success">Your email has succesfully been verified</Alert>
	) : null;
}
