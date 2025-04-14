import { Link } from "@tanstack/react-router";

export const DefaultNotFound = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 p-2">
      <h2 className="font-bold text-4xl">404</h2>
      <div className="text-xl">
        <p>The page you are looking for does not exist.</p>
      </div>
      <p className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="cursor-pointer rounded px-2 py-1 font-black text-sm uppercase"
        >
          <span className="touch-target" />
          Go back
        </button>
        <Link
          to="/"
          className="cursor-pointer rounded px-2 py-1 font-black text-sm uppercase"
        >
          <span className="touch-target" />
          Start Over
        </Link>
      </p>
    </div>
  );
};
