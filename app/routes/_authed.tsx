import { SignIn } from "@/components/auth/sign-in";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed")({
  beforeLoad: ({ context }) => {
    if (!context.userId) {
      throw new Error("Not authenticated");
    }
  },
  errorComponent: ({ error }) => {
    if (error.message === "Not authenticated") {
      return <SignIn />;
    }

    throw error;
  },
});
