import { SignUp } from "@/components/auth/sign-up";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-up/$")({
  component: Page,
});

function Page() {
  return <SignUp />;
}
