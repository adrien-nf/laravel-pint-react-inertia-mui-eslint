import React from "react";
import { useEffect, FormEventHandler } from "react";
import { Head, useForm } from "@inertiajs/react";
import { Button, TextField } from "@mui/material";
import CenteredBox from "../../Components/CenteredBox/CenteredBox";

export default function ConfirmPassword() {
	const { data, setData, post, processing, errors, reset } = useForm({
		password: "",
	});

	useEffect(() => {
		return () => {
			reset("password");
		};
	}, []);

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route("password.confirm"));
	};

	return (
		<>
			<Head title="Confirm Password" />

			<CenteredBox>
				<div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
					This is a secure area of the application. Please confirm your password before continuing.
				</div>

				<form onSubmit={submit}>
					<div className="mt-4">
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
					</div>

					<div className="flex items-center justify-end mt-4">
						<Button className="ml-4" disabled={processing}>
							Confirm
						</Button>
					</div>
				</form>
			</CenteredBox>
		</>
	);
}
