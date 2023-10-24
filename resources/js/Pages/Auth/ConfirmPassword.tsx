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
				<div>
					This is a secure area of the application. Please confirm your password before continuing.
				</div>

				<form onSubmit={submit}>
					<div>
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

					<div>
						<Button disabled={processing}>
							Confirm
						</Button>
					</div>
				</form>
			</CenteredBox>
		</>
	);
}
