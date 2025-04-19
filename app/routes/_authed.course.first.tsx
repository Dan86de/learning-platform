import { Button } from "@/components/catalyst/button";
import { Text } from "@/components/catalyst/text";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/course/first")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<div className="mask-b-from-30% mask-radial-at-top-left mask-radial-from-10% mask-radial-to-100% mask-radial-from-transparent mask-radial-to-white dark:mask-radial-to-zinc-950 absolute top-0 right-0 left-0 z-[-1] ">
				<img
					src="/course_images/test.webp"
					alt="Course background"
					className="aspect-video h-full max-h-[600px] w-full scale-150 object-cover lg:scale-100"
				/>
			</div>
			<div className="border-zinc-950/5 border-b pb-40 dark:border-white/5">
				<Text className="text-2xl text-zinc-950 sm:text-3xl dark:text-white">
					Course overview
				</Text>
				<Text className="mt-10 text-zinc-700 lg:max-w-[58ch] lg:text-lg dark:text-zinc-300">
					A comprehensive journey that helps you navigate uncertainty and make
					choices aligned with your values and goals.
				</Text>
				<div className="mt-8 flex items-center gap-8">
					<div className="flex gap-1">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="stroke-zinc-400"
						>
							<title>Book</title>
							<path
								d="M19.25 15.25V5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V16.75"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="stroke-zinc-400"
							/>
							<path
								d="M19.25 15.25H6.75C5.64543 15.25 4.75 16.1454 4.75 17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H19.25V15.25Z"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="stroke-zinc-400"
							/>
						</svg>
						<Text className="font-bold text-zinc-950 tracking-wide dark:text-white">
							5 Modules
						</Text>
					</div>
					<div className="flex gap-1">
						<svg
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
							className="stroke-zinc-400"
						>
							<title>Lessons</title>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M6.5 15.25V15.25C5.5335 15.25 4.75 14.4665 4.75 13.5V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H13.5C14.4665 4.75 15.25 5.5335 15.25 6.5V6.5"
								className="stroke-zinc-400"
							/>
							<rect
								width="10.5"
								height="10.5"
								x="8.75"
								y="8.75"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								rx="2"
								className="stroke-zinc-400"
							/>
						</svg>

						<Text className="font-bold text-zinc-950 tracking-wide dark:text-white">
							25 Lessons
						</Text>
					</div>
					<div className="flex gap-1">
						<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
							<title>Clock</title>
							<circle
								cx="12"
								cy="12"
								r="7.25"
								stroke="currentColor"
								strokeWidth="1.5"
								className="stroke-zinc-400"
							/>
							<path
								stroke="currentColor"
								strokeWidth="1.5"
								d="M12 8V12L14 14"
								className="stroke-zinc-400"
							/>
						</svg>

						<Text className="font-bold text-zinc-950 tracking-wide dark:text-white">
							6h 38m
						</Text>
					</div>
				</div>
				<Button
					round
					color={"orange"}
					className="mt-12 flex cursor-pointer items-center"
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						className="-ml-1 size-6"
					>
						<title>Play</title>
						<path
							d="M14.25 12L9.75 9.75V14.25L14.25 12Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					Start the course
				</Button>
			</div>
			<div className="mt-10 grid grid-cols-[1fr_3fr] gap-4">
				<Text className="pt-2 font-semibold text-zinc-950 dark:text-white">
					Part 1
				</Text>
				<div>
					<div className="flex flex-col gap-6">
						<Text className="font-semibold text-zinc-950 sm:text-3xl dark:text-white">
							Orientation
						</Text>
						<Text className="text-zinc-500 dark:text-zinc-400">
							Discover your internal compass and understand your decision-making
							landscape
						</Text>
					</div>
					<ul className="mt-6 flex flex-col gap-4">
						<li>
							<div className="flex items-center gap-2">
								<div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-zinc-950/10 dark:border-white/10">
									<svg
										width="24"
										height="24"
										fill="none"
										viewBox="0 0 24 24"
										className="h-3 w-3 fill-zinc-900 pl-0.5"
									>
										<title>The landscape of choice</title>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
										/>
									</svg>
								</div>
								<Text className="font-semibold text-zinc-950 sm:text-normal dark:text-white">
									The landscape of choice
								</Text>
								<Text className="text-zinc-500 dark:text-zinc-400">15:23</Text>
							</div>
							<Text className="mt-2 pl-7">
								Understanding the terrain of decision-making
							</Text>
						</li>
						<li>
							<div className="flex items-center gap-2">
								<div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-zinc-950/10 dark:border-white/10">
									<svg
										width="24"
										height="24"
										fill="none"
										viewBox="0 0 24 24"
										className="h-3 w-3 fill-zinc-900 pl-0.5"
									>
										<title>The landscape of choice</title>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
										/>
									</svg>
								</div>
								<Text className="font-semibold text-zinc-950 sm:text-normal dark:text-white">
									Internal vs. external compass
								</Text>
								<Text className="text-zinc-500 dark:text-zinc-400">14:07</Text>
							</div>
							<Text className="mt-2 pl-7">
								Learning to balance internal guidance with external input
							</Text>
						</li>
						<li>
							<div className="flex items-center gap-2">
								<div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-zinc-950/10 dark:border-white/10">
									<svg
										width="24"
										height="24"
										fill="none"
										viewBox="0 0 24 24"
										className="h-3 w-3 fill-zinc-900 pl-0.5"
									>
										<title>The landscape of choice</title>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
										/>
									</svg>
								</div>
								<Text className="font-semibold text-zinc-950 sm:text-normal dark:text-white">
									The stories you're living
								</Text>
								<Text className="text-zinc-500 dark:text-zinc-400">16:18</Text>
							</div>
							<Text className="mt-2 pl-7">
								Examining the narratives that shape your decisions
							</Text>
						</li>
						<li>
							<div className="flex items-center gap-2">
								<div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-zinc-950/10 dark:border-white/10">
									<svg
										width="24"
										height="24"
										fill="none"
										viewBox="0 0 24 24"
										className="h-3 w-3 fill-zinc-900 pl-0.5"
									>
										<title>The landscape of choice</title>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
										/>
									</svg>
								</div>
								<Text className="font-semibold text-zinc-950 sm:text-normal dark:text-white">
									Recognizing patterns in past decisions
								</Text>
								<Text className="text-zinc-500 dark:text-zinc-400">17:21</Text>
							</div>
							<Text className="mt-2 pl-7">
								Identyfying recurring themes in your decision-making history
							</Text>
						</li>

						<li>
							<div className="flex items-center gap-2">
								<div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-zinc-950/10 dark:border-white/10">
									<svg
										width="24"
										height="24"
										fill="none"
										viewBox="0 0 24 24"
										className="h-3 w-3 fill-zinc-900 pl-0.5"
									>
										<title>The landscape of choice</title>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
										/>
									</svg>
								</div>
								<Text className="font-semibold text-zinc-950 sm:text-normal dark:text-white">
									Values, goals, ant the difference between them
								</Text>
								<Text className="text-zinc-500 dark:text-zinc-400">11:21</Text>
							</div>
							<Text className="mt-2 pl-7">
								Understanding how values and goals influence your choices
							</Text>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
