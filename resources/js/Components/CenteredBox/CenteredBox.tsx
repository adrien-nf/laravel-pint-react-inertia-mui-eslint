import React from "react";
import { Paper, Stack } from "@mui/material";

export default function CenteredBox(props: {
	children: React.ReactNode
}) {
	return (
		<Stack sx={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "90vh"
		}}>
			<Paper sx={{ padding: 2 }}>
				{props.children}
			</Paper>
		</Stack>
	);
}