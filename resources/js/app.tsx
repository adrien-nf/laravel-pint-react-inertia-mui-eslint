import React from "react";

import "./bootstrap";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

import AppLayout from "@/Components/AppLayout/AppLayout";

createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve: name => {
		const pages = import.meta.glob("./Pages/**/*.tsx", { eager: true });
		const page = pages[`./Pages/${name}.tsx`];
		// @ts-expect-error Page is unknown
		page.default.layout = page.default.layout || ((page: React.ReactNode) => <AppLayout>{page}</AppLayout>);
		return page;
	}, setup({ el, App, props }) {
		const root = createRoot(el);

		root.render(<App {...props} />);
	},
	progress: {
		color: "#4B5563",
	},
});
