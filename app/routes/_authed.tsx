import { SignIn } from "@/components/auth/sign-in";
import { getAuth } from "@clerk/tanstack-react-start/server";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getWebRequest } from "@tanstack/react-start/server";

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

  return { userId };
});

export const Route = createFileRoute("/_authed")({
  beforeLoad: async () => await authStateFn(),
  loader: async ({ context }) => {
    return { userId: context.userId };
  },
});
