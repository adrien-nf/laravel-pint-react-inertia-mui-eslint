import React from "react";
import { useRef, useState, FormEventHandler } from "react";
import { useForm } from "@inertiajs/react";
import { Button, Modal, TextField } from "@mui/material";

export default function DeleteUserForm({ className = "" }: { className?: string }) {
	const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
	const passwordInput = useRef<HTMLInputElement>();

	const {
		data,
		setData,
		delete: destroy,
		processing,
		reset,
		errors,
	} = useForm({
		password: "",
	});

	const confirmUserDeletion = () => {
		setConfirmingUserDeletion(true);
	};

	const deleteUser: FormEventHandler = (e) => {
		e.preventDefault();

		destroy(route("profile.destroy"), {
			preserveScroll: true,
			onSuccess: () => closeModal(),
			onError: () => passwordInput.current?.focus(),
			onFinish: () => reset(),
		});
	};

	const closeModal = () => {
		setConfirmingUserDeletion(false);

		reset();
	};

	return (
		<section className={`space-y-6 ${className}`}>
			<header>
				<h2>Delete Account</h2>

				<p>
					Once your account is deleted, all of its resources and data will be permanently deleted. Before
					deleting your account, please download any data or information that you wish to retain.
				</p>
			</header>

			<Button color="error" onClick={confirmUserDeletion}>Delete Account</Button>

			<Modal open={confirmingUserDeletion} onClose={closeModal}>
				<form onSubmit={deleteUser}>
					<h2>
						Are you sure you want to delete your account?
					</h2>

					<p>
						Once your account is deleted, all of its resources and data will be permanently deleted. Please
						enter your password to confirm you would like to permanently delete your account.
					</p>

					<div>
						<TextField
							label="Password"
							type="password"
							name="password"
							variant="outlined"
							autoComplete="password"
							value={data.password}
							onChange={(e) => setData("password", e.target.value)}
							error={!!errors.password}
							helperText={errors.password}
						/>
					</div>

					<div>
						<Button color="secondary" onClick={closeModal}>Cancel</Button>

						<Button color="error" disabled={processing}>
							Delete Account
						</Button>
					</div>
				</form>
			</Modal>
		</section>
	);
}
