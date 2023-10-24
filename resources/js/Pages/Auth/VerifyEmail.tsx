import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "@mui/material";
import { FormEventHandler } from "react";

export default function VerifyEmail({ status }: { status?: string }) {
	const { post, processing } = useForm({});

	const submit: FormEventHandler = (e) => {
		e.preventDefault();

		post(route("verification.send"));
	};

	return (
		<>
			<Head title="Email Verification" />

			<div>
				Thanks for signing up! Before getting started, could you verify your email address by clicking on the
				link we just emailed to you? If you didn&apos;t receive the email, we will gladly send you another.
			</div>

			{status === "verification-link-sent" && (
				<div>
					A new verification link has been sent to the email address you provided during registration.
				</div>
			)}

			<form onSubmit={submit}>
				<div>
					<Button type="submit" disabled={processing}>Resend Verification Email</Button>

					<Link
						href={route("logout")}
						method="post"
						as="button"
						className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
					>
						Log Out
					</Link>
				</div>
			</form>
		</>
	);
}
