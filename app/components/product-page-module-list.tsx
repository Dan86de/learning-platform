import { Text } from "@/components/catalyst/text";
import { Fragment } from "react";

interface ProductPageModuleListProps {
	courseContentRef: React.RefObject<HTMLDivElement | null>;
	modules: Module[];
}

type Module = {
	title: string;
	description: string;
	sections: Section[];
};

type Section = {
	title: string;
	description: string;
	duration: string;
};

export function ProductPageModuleList({
	courseContentRef,
	modules,
}: ProductPageModuleListProps) {
	return (
		<div
			id="course-content"
			ref={courseContentRef}
			className="mask-b-from-90% mask-t-from-90% mt-2 grid h-[calc(100vh-384px)] grid-cols-1 gap-4 overflow-y-auto py-6 md:h-[calc(100vh-532px)] md:grid-cols-[1fr_3fr] md:py-14 lg:h-[calc(100vh-580px)]"
		>
			{modules.map((module, index) => (
				<ProductPageModuleListItem
					key={module.title}
					moduleIndex={index}
					module={module}
				/>
			))}
		</div>
	);
}

interface ProductPageModuleListItemProps {
	moduleIndex: number;
	module: Module;
}

function ProductPageModuleListItem({
	moduleIndex,
	module,
}: ProductPageModuleListItemProps) {
	return (
		<Fragment key={module.title}>
			<Text className="pt-2 pb-4 font-semibold text-zinc-950 dark:text-white">
				Part {moduleIndex + 1}
			</Text>
			<div>
				<div className="flex flex-col gap-6">
					<Text className="font-semibold text-zinc-950 sm:text-3xl dark:text-white">
						{module.title}
					</Text>
					<Text className="text-zinc-500 dark:text-zinc-400">
						{module.description}
					</Text>
				</div>
				<ul className="mt-6 flex flex-col gap-4">
					{module.sections.map((section) => (
						<ProductPageModuleListSectionItem
							key={section.title}
							section={section}
						/>
					))}
				</ul>
			</div>
		</Fragment>
	);
}

interface ProductPageModuleListSectionItemProps {
	section: Section;
}

function ProductPageModuleListSectionItem({
	section,
}: ProductPageModuleListSectionItemProps) {
	return (
		<li key={section.title}>
			<div className="flex items-center gap-2">
				<div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-zinc-950/10 dark:border-white/10">
					<svg
						width="24"
						height="24"
						fill="none"
						viewBox="0 0 24 24"
						className="h-3 w-3 fill-zinc-900 pl-0.5"
					>
						<title>{section.title}</title>
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
					{section.title}
				</Text>
				<Text className="text-zinc-500 dark:text-zinc-400">
					{section.duration}
				</Text>
			</div>
			<Text className="mt-2 pl-7">{section.description}</Text>
		</li>
	);
}
