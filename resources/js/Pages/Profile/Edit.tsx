import React from "react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Edit({ mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean, status?: string }>) {
	return (
		<>
			<Head title="Profile" />

			<div>
				<div>
					<div>
						<UpdateProfileInformationForm
							mustVerifyEmail={mustVerifyEmail}
							status={status}
							className="max-w-xl"
						/>
					</div>

					<div>
						<UpdatePasswordForm />
					</div>

					<div>
						<DeleteUserForm />
					</div>
				</div>
			</div>
		</>
	);
}
