import { Link } from "@/components/catalyst/link";
import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from "@clerk/tanstack-react-start";
import { getAuth } from "@clerk/tanstack-react-start/server";
import { getWebRequest } from "@tanstack/react-start/server";
import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const authStateFn = createServerFn({ method: "GET" }).handler(async () => {
	const request = getWebRequest();
	if (!request) throw new Error("No request found");
	const { userId } = await getAuth(request);

	if (!userId) {
		// This will error because you're redirecting to a path that doesn't exist yet
		// You can create a sign-in route to handle this
		// See https://clerk.com/docs/references/tanstack-start/custom-sign-in-or-up-page
		throw redirect({
			to: "/sign-in/$",
		});
	}

	throw redirect({
		to: "/app",
	});
});

export const Route = createFileRoute("/")({
	component: Home,
	beforeLoad: async () => await authStateFn(),
	loader: async ({ context }) => {
		return { userId: context.userId };
	},
});

function Home() {
	return (
		<div className="p-2">
			<h1>Index Route</h1>
			<SignedIn>
				<p>You are signed in</p>
				<UserButton />
			</SignedIn>
			<SignedOut>
				<p>You are signed out</p>
				<SignInButton />
			</SignedOut>
			<Link to="/app">App</Link>
		</div>
	);
}
