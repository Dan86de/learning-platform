import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/profile/$")({
  component: PostsComponent,
});

function PostsComponent() {
  return (
    <div className="flex gap-2 p-2">
      <h1>Profile</h1>
      <hr />
      <Outlet />
    </div>
  );
}
