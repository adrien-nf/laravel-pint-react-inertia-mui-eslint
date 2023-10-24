import React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "@/Components/Header/Header";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

export default function AppLayout(props: {
	children: React.ReactNode
}) {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Header />
			<main>
				{props.children}
			</main>
		</ThemeProvider>
	);
}
