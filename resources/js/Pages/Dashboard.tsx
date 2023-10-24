import React from "react";
import { Head } from "@inertiajs/react";
import { Typography } from "@mui/material";
import CenteredBox from "@/Components/CenteredBox/CenteredBox";

export default function Dashboard() {
	return (
		<>
			<Head title="Dashboard" />

			<CenteredBox>
				<Typography>You&apos;re logged in!</Typography>
			</CenteredBox>
		</>
	);
}
