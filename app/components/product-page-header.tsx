import { Text } from "@/components/catalyst/text";
import { Button } from "@/components/catalyst/button";
import { motion } from "framer-motion";

interface ProductPageHeaderProps {
	productName: string;
	productImage: string;
	productDescription: string;
	scrollProgress: number;
	numOfModules?: number;
	numOfLessons?: number;
	duration?: string;
}

export function ProductPageHeader({
	productName,
	productImage,
	productDescription,
	scrollProgress,
	numOfModules,
	numOfLessons,
	duration,
}: ProductPageHeaderProps) {
	return (
		<>
			<div className="mask-b-from-30% mask-radial-at-top-left mask-radial-from-10% mask-radial-to-100% mask-radial-from-transparent mask-radial-to-white dark:mask-radial-to-zinc-950 absolute top-0 right-0 left-0 z-[-1] ">
				<img
					src={productImage}
					alt="Course background"
					className="aspect-video h-full max-h-[600px] w-full scale-150 object-cover lg:scale-100"
				/>
			</div>

			<div className="relative">
				<Text className="text-xl text-zinc-950 md:text-2xl dark:text-white">
					{productName}
				</Text>
				<Text className="mt-4 max-w-[58ch] text-sm text-zinc-700 md:mt-10 md:text-base dark:text-zinc-300">
					{productDescription}
				</Text>
				<div className="mt-4 flex items-center gap-4 md:mt-8 md:gap-8">
					{numOfModules && (
						<div className="flex gap-1">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="size-4 md:size-6"
							>
								<title>Book</title>
								<path
									d="M19.25 15.25V5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V16.75"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="stroke-zinc-400 dark:stroke-zinc-500"
								/>
								<path
									d="M19.25 15.25H6.75C5.64543 15.25 4.75 16.1454 4.75 17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H19.25V15.25Z"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="stroke-zinc-400 dark:stroke-zinc-500"
								/>
							</svg>
							<Text className="font-bold text-xs text-zinc-950 tracking-wide md:text-base dark:text-white">
								{numOfModules} Modules
							</Text>
						</div>
					)}
					{numOfLessons && (
						<div className="flex gap-1">
							<svg
								width="24"
								height="24"
								fill="none"
								viewBox="0 0 24 24"
								className="size-4 md:size-6"
							>
								<title>Lessons</title>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M6.5 15.25V15.25C5.5335 15.25 4.75 14.4665 4.75 13.5V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H13.5C14.4665 4.75 15.25 5.5335 15.25 6.5V6.5"
									className="stroke-zinc-400 dark:stroke-zinc-500"
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
									className="stroke-zinc-400 dark:stroke-zinc-500"
								/>
							</svg>

							<Text className="font-bold text-xs text-zinc-950 tracking-wide md:text-base dark:text-white">
								{numOfLessons} Lessons
							</Text>
						</div>
					)}
					{duration && (
						<div className="flex gap-1">
							<svg
								width="24"
								height="24"
								fill="none"
								viewBox="0 0 24 24"
								className="size-4 md:size-6"
							>
								<title>Clock</title>
								<circle
									cx="12"
									cy="12"
									r="7.25"
									stroke="currentColor"
									strokeWidth="1.5"
									className="stroke-zinc-400 dark:stroke-zinc-500"
								/>
								<path
									stroke="currentColor"
									strokeWidth="1.5"
									d="M12 8V12L14 14"
									className="stroke-zinc-400 dark:stroke-zinc-500"
								/>
							</svg>

							<Text className="font-bold text-xs text-zinc-950 tracking-wide md:text-base dark:text-white">
								{duration}
							</Text>
						</div>
					)}
				</div>
				<Button
					round
					color={"orange"}
					className="mt-4 flex cursor-pointer items-center text-sm md:mt-12 md:text-base"
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
				<div className="mt-6 overflow-hidden rounded-full bg-zinc-950/5 md:mt-40 dark:bg-white/10">
					<motion.div
						id="course-progress-bar"
						style={{ width: `${scrollProgress}%` }}
						className="h-0.5 rounded-full bg-orange-600 transition-all duration-300 dark:bg-orange-500"
					/>
				</div>
			</div>
		</>
	);
}
