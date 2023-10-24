import React from "react";
import { Head, useForm } from "@inertiajs/react";
import { TextField, Button } from "@mui/material";
import { FormEventHandler } from "react";

export default function ForgotPassword({ status }: { status?: string }) {
	const { data, setData, post, processing, errors } = useForm({
		email: "",
	});

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route("password.email"));
	};

	return (
		<>
			<Head title="Forgot Password" />

			<div>
				Forgot your password? No problem. Just let us know your email address and we will email you a password
				reset link that will allow you to choose a new one.
			</div>

			{status && <div>{status}</div>}

			<form onSubmit={submit}>
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

				<div>
					<Button type="submit" disabled={processing}>
						Email Password Reset Link
					</Button>
				</div>
			</form>
		</>
	);
}
