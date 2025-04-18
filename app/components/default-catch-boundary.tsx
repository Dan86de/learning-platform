import {
  ErrorComponent,
  Link,
  rootRouteId,
  useMatch,
  useRouter,
} from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";

export const DefaultCatchBoundary = ({ error }: ErrorComponentProps) => {
  const router = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId,
  });

  return (
    <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-6 p-4">
      <ErrorComponent error={error} />
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => {
            router.invalidate();
          }}
          className="cursor-pointer rounded px-2 py-1 font-black text-sm uppercase"
        >
          Try Again
        </button>
        {isRoot ? (
          <Link
            to="/"
            className="cursor-pointer rounded px-2 py-1 font-black text-sm uppercase"
          >
            Home
          </Link>
        ) : (
          <Link
            to="/"
            className="cursor-pointer rounded px-2 py-1 font-black text-sm uppercase"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            Go Back
          </Link>
        )}
      </div>
    </div>
  );
};
