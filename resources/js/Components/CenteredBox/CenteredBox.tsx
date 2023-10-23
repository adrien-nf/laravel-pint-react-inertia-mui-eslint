import { Stack } from "@mui/material";

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
			{props.children}
		</Stack>
	)
}