import React from "react";
import { useRef, FormEventHandler } from "react";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { TextField, Button } from "@mui/material";

export default function UpdatePasswordForm({ className = "" }: { className?: string }) {
	const passwordInput = useRef<HTMLInputElement>();
	const currentPasswordInput = useRef<HTMLInputElement>();

	const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
		current_password: "",
		password: "",
		password_confirmation: "",
	});

	const updatePassword: FormEventHandler = (e) => {
		e.preventDefault();

		put(route("password.update"), {
			preserveScroll: true,
			onSuccess: () => reset(),
			onError: (errors) => {
				if (errors.password) {
					reset("password", "password_confirmation");
					passwordInput.current?.focus();
				}

				if (errors.current_password) {
					reset("current_password");
					currentPasswordInput.current?.focus();
				}
			},
		});
	};

	return (
		<section className={className}>
			<header>
				<h2>Update Password</h2>

				<p>
					Ensure your account is using a long, random password to stay secure.
				</p>
			</header>

			<form onSubmit={updatePassword}>
				<div>
					<TextField
						label="Current password"
						type="password"
						name="current_password"
						variant="outlined"
						autoComplete="current-password"
						value={data.current_password}
						onChange={(e) => setData("current_password", e.target.value)}
						error={!!errors.current_password}
						helperText={errors.current_password}
					/>
				</div>

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
				</div>

				<div>
					<Button type="submit" disabled={processing}>Save</Button>

					<Transition
						show={recentlySuccessful}
						enter="transition ease-in-out"
						enterFrom="opacity-0"
						leave="transition ease-in-out"
						leaveTo="opacity-0"
					>
						<p>Saved.</p>
					</Transition>
				</div>
			</form>
		</section>
	);
}
