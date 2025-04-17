import { useTheme } from "@/lib/styles/theme-provider";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const tabs = [
  {
    id: "light",
    label: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <title className="sr-only">Sun</title>
        <circle
          cx="12"
          cy="12"
          r="3.25"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 2.75V4.25"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.25 6.75L16.0659 7.93416"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21.25 12.0001L19.75 12.0001"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.25 17.2501L16.0659 16.066"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 19.75V21.25"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.9341 16.0659L6.74996 17.25"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.25 12.0001L2.75 12.0001"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.93405 7.93423L6.74991 6.75003"
        />
      </svg>
    ),
  },
  {
    id: "system",
    label: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <title className="sr-only">System</title>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.75 15.25H17.25C18.3546 15.25 19.25 14.3546 19.25 13.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V13.25C4.75 14.3546 5.64543 15.25 6.75 15.25H9.75ZM9.75 15.25C9.75 15.25 10 18.25 8 19.25H16C14 18.25 14.25 15.25 14.25 15.25"
        />
      </svg>
    ),
  },
  {
    id: "dark",
    label: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title className="sr-only">Moon</title>
        <path
          d="M18.25 15.0314C17.7575 15.1436 17.2459 15.2027 16.7209 15.2027C12.8082 15.2027 9.63607 11.9185 9.63607 7.86709C9.63607 6.75253 9.87614 5.69603 10.3057 4.75C7.12795 5.47387 4.75 8.40659 4.75 11.9143C4.75 15.9657 7.9221 19.25 11.8348 19.25C14.6711 19.25 17.1182 17.5242 18.25 15.0314Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={cn(
        "flex h-8 w-22 items-center justify-center space-x-1 rounded-(--toggle-radius) border-[1.5px] border-zinc-950/5 px-(--toggle-padding) [--toggle-padding:--spacing(0.75)] [--toggle-radius:var(--radius-3xl)] dark:border-white/10",
        className,
      )}
    >
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          onClick={() => {
            console.log("clicked", tab.id);
            setTheme(tab.id);
          }}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
          className={cn(
            "relative flex cursor-pointer items-center justify-center rounded-[calc(var(--toggle-radius)-var(--toggle-padding))] p-0.5",
          )}
        >
          {theme === tab.id && (
            <motion.span
              layout
              layoutId="bubble"
              className="-z-10 absolute inset-0 bg-neutral-300 dark:bg-neutral-600"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="touch-target" />
          <div className="flex h-5 w-5 items-center justify-center forced-colors:bg-[CanvasText]">
            {tab.label}
          </div>
        </button>
      ))}
    </div>
  );
};
