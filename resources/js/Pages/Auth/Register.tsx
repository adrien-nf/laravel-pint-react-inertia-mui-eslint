import React from "react";
import { useEffect, FormEventHandler } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Stack, TextField } from "@mui/material";
import CenteredBox from "@/Components/CenteredBox/CenteredBox";

export default function Register() {
	const { data, setData, post, processing, errors, reset } = useForm({
		name: "",
		email: "",
		password: "",
		password_confirmation: "",
	});

	useEffect(() => {
		return () => {
			reset("password", "password_confirmation");
		};
	}, []);

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route("register"));
	};

	return (
		<>
			<Head title="Register" />

			<CenteredBox>
				<form onSubmit={submit}>
					<Stack gap={2}>
						<TextField
							label="Name"
							type="name"
							name="name"
							variant="outlined"
							autoComplete="name"
							value={data.name}
							onChange={(e) => setData("name", e.target.value)}
							error={!!errors.name}
							helperText={errors.name}
						/>

						<TextField
							label="Email"
							type="email"
							name="email"
							variant="outlined"
							autoComplete="email"
							value={data.email}
							onChange={(e) => setData("email", e.target.value)}
							error={!!errors.email}
							helperText={errors.email}
						/>

						<TextField
							label="New password"
							type="password"
							name="password"
							variant="outlined"
							autoComplete="new-password"
							value={data.password}
							onChange={(e) => setData("password", e.target.value)}
							error={!!errors.password}
							helperText={errors.password}
						/>

						<TextField
							label="New password"
							type="password"
							name="password_confirmation"
							variant="outlined"
							autoComplete="new-password"
							value={data.password_confirmation}
							onChange={(e) => setData("password_confirmation", e.target.value)}
							error={!!errors.password_confirmation}
							helperText={errors.password_confirmation}
						/>

						<Link
							href={route("login")}
							className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
						>
							Already registered?
						</Link>

						<Button type="submit" disabled={processing}>
							Register
						</Button>
					</Stack>
				</form>
			</CenteredBox>
		</>
	);
}
