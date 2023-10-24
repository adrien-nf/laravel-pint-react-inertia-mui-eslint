import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormEventHandler } from "react";
import { PageProps } from "@/types";
import { TextField, Button } from "@mui/material";

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = "" }: { mustVerifyEmail: boolean, status?: string, className?: string }) {
	const user = usePage<PageProps>().props.auth.user;

	const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
		name: user.name,
		email: user.email,
	});

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		patch(route("profile.update"));
	};

	return (
		<section className={className}>
			<header>
				<h2>Profile Information</h2>

				<p>
					Update your account&apos;s profile information and email address.
				</p>
			</header>

			<form onSubmit={submit}>
				<div>
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
				</div>

				<div>
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
				</div>

				{mustVerifyEmail && user.email_verified_at === null && (
					<div>
						<p>
							Your email address is unverified.
							<Link
								href={route("verification.send")}
								method="post"
								as="button"
								className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
							>
								Click here to re-send the verification email.
							</Link>
						</p>

						{status === "verification-link-sent" && (
							<div>
								A new verification link has been sent to your email address.
							</div>
						)}
					</div>
				)}

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
