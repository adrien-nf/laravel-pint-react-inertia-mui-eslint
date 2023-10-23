import { Head, useForm } from '@inertiajs/react';
import { TextField, Button } from '@mui/material';
import { FormEventHandler } from 'react';

export default function ForgotPassword({ status }: { status?: string }) {
	const { data, setData, post, processing, errors } = useForm({
		email: '',
	});

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route('password.email'));
	};

	return (
		<>
			<Head title="Forgot Password" />

			<div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
				Forgot your password? No problem. Just let us know your email address and we will email you a password
				reset link that will allow you to choose a new one.
			</div>

			{status && <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">{status}</div>}

			<form onSubmit={submit}>
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

				<div className="flex items-center justify-end mt-4">
					<Button type="submit" className="ml-4" disabled={processing}>
						Email Password Reset Link
					</Button>
				</div>
			</form>
		</>
	);
}
