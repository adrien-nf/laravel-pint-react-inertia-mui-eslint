import { useEffect, FormEventHandler } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Button, TextField } from '@mui/material';

export default function ResetPassword({ token, email }: { token: string, email: string }) {
	const { data, setData, post, processing, errors, reset } = useForm({
		token: token,
		email: email,
		password: '',
		password_confirmation: '',
	});

	useEffect(() => {
		return () => {
			reset('password', 'password_confirmation');
		};
	}, []);

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route('password.store'));
	};

	return (
		<>
			<Head title="Reset Password" />

			<form onSubmit={submit}>
				<div>
					<TextField
						label="Email"
						type="email"
						name="email"
						variant="outlined"
						autoComplete="email"
						value={data.email}
						onChange={(e) => setData('email', e.target.value)}
						error={!!errors.email}
						helperText={errors.email}
					/>
				</div>

				<div className="mt-4">
					<TextField
						label="New password"
						type="password"
						name="password"
						variant="outlined"
						autoComplete="new-password"
						value={data.password}
						onChange={(e) => setData('password', e.target.value)}
						error={!!errors.password}
						helperText={errors.password}
					/>
				</div>

				<div className="mt-4">
					<TextField
						label="New password"
						type="password"
						name="password_confirmation"
						variant="outlined"
						autoComplete="new-password"
						value={data.password_confirmation}
						onChange={(e) => setData('password_confirmation', e.target.value)}
						error={!!errors.password_confirmation}
						helperText={errors.password_confirmation}
					/>
				</div>

				<div className="flex items-center justify-end mt-4">
					<Button type="submit" className="ml-4" disabled={processing}>
						Reset Password
					</Button>
				</div>
			</form>
		</>
	);
}
