import { Text } from "@/components/catalyst/text";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/course/first")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Text className="text-zinc-950 lg:text-[32px] dark:text-white">
        Course overview
      </Text>
      <Text className="mt-10 lg:max-w-[58ch] lg:text-lg">
        A comprehensive journey that helps you navigate uncertainty and make
        choices aligned with your values and goals.
      </Text>
      <div>
        <div className="flex gap-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Book</title>
            <path
              d="M19.25 15.25V5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V16.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.25 15.25H6.75C5.64543 15.25 4.75 16.1454 4.75 17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H19.25V15.25Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Text className="font-bold text-zinc-950 tracking-wide dark:text-white">
            5 Modules
          </Text>
        </div>
        <div className="flex gap-1">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <title>Lessons</title>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M18 9.25H13.75V5"
            />
          </svg>

          <Text className="font-bold text-zinc-950 tracking-wide dark:text-white">
            25 Lessons
          </Text>
        </div>
        <div className="flex gap-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Book</title>
            <path
              d="M19.25 15.25V5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V16.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.25 15.25H6.75C5.64543 15.25 4.75 16.1454 4.75 17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H19.25V15.25Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Text className="font-bold text-zinc-950 tracking-wide dark:text-white">
            6h 38m
          </Text>
        </div>
      </div>
    </>
  );
}
