import { useEffect, FormEventHandler } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Checkbox, Button, TextField, Alert, Stack } from '@mui/material';
import CenteredBox from '@/Components/CenteredBox/CenteredBox';

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
	const { data, setData, post, processing, errors, reset } = useForm({
		email: '',
		password: '',
		remember: false,
	});

	useEffect(() => {
		return () => {
			reset('password');
		};
	}, []);

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route('login'));
	};

	return (
		<>
			<Head title="Log in" />

			<CenteredBox>
				{status && <Alert sx={{ marginBottom: 2 }} severity="success">{status}</Alert>}

				<form onSubmit={submit}>
					<Stack gap={2}>
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

						<div>
							<TextField
								label="Password"
								type="password"
								name="password"
								variant="outlined"
								autoComplete="password"
								value={data.password}
								onChange={(e) => setData('password', e.target.value)}
								error={!!errors.password}
								helperText={errors.password}
							/>
						</div>

						<div>
							<label>
								<Checkbox
									name="remember"
									checked={data.remember}
									onChange={(e) => setData('remember', e.target.checked)}
								/>
								<span>Remember me</span>
							</label>
						</div>

						<div>
							{canResetPassword && (
								<Link
									href={route('password.request')}
									className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
								>
									Forgot your password?
								</Link>
							)}

							<Button type="submit" className="ml-4" disabled={processing}>
								Log in
							</Button>
						</div>
					</Stack>
				</form>
			</CenteredBox>
		</>
	);
}
