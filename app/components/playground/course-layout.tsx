"use client";

import * as Headless from "@headlessui/react";
import type React from "react";
import { useState } from "react";
import { NavbarItem } from "@/components/catalyst/navbar";
import { Link } from "@/components/catalyst/link";
import { Button } from "@/components/catalyst/button";
import { cn } from "@/lib/utils";

function OpenMenuIcon() {
	return (
		<svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
			<path d="M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" />
		</svg>
	);
}

function CloseMenuIcon() {
	return (
		<svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
			<path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
		</svg>
	);
}

function MobileCourseSidebar({
	open,
	close,
	children,
}: React.PropsWithChildren<{ open: boolean; close: () => void }>) {
	return (
		<Headless.Dialog open={open} onClose={close} className="lg:hidden">
			<Headless.DialogBackdrop
				transition
				className="fixed inset-0 bg-black/30 transition data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in"
			/>
			<Headless.DialogPanel
				transition
				className="data-closed:-translate-x-full fixed inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out"
			>
				<div className="flex h-full flex-col rounded-lg bg-white shadow-xs ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
					<div className="-mb-3 px-4 pt-3">
						<Headless.CloseButton as={NavbarItem} aria-label="Close navigation">
							<CloseMenuIcon />
						</Headless.CloseButton>
					</div>
					{children}
				</div>
			</Headless.DialogPanel>
		</Headless.Dialog>
	);
}

export function CourseSidebarLayout({
	navbar,
	sidebar,
	children,
}: React.PropsWithChildren<{
	navbar: React.ReactNode;
	sidebar: React.ReactNode;
}>) {
	const [showSidebar, setShowSidebar] = useState(false);
	const [showDesktopSidebar, setShowDesktopSidebar] = useState(false);

	return (
		<div className="relative isolate flex h-screen min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
			{/* Sidebar on desktop */}
			<div
				className={cn(
					"fixed inset-y-0 w-68 bg-white transition-all duration-300 ease-in-out max-lg:hidden lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10",
					!showDesktopSidebar && "-left-68",
					showDesktopSidebar && "left-0",
				)}
			>
				{sidebar}
			</div>

			{/* Sidebar on mobile */}
			<MobileCourseSidebar
				open={showSidebar}
				close={() => setShowSidebar(false)}
			>
				{sidebar}
			</MobileCourseSidebar>

			{/* Navbar on mobile */}
			<header className="flex items-center px-4 lg:hidden">
				<div className="py-2.5">
					<NavbarItem
						onClick={() => setShowSidebar(true)}
						aria-label="Open navigation"
					>
						<OpenMenuIcon />
					</NavbarItem>
				</div>
				<div className="min-w-0 flex-1">{navbar}</div>
			</header>

			{/* Content */}
			<main
				className={cn(
					"flex flex-1 flex-col overflow-hidden pb-2 transition-all duration-300 ease-in-out lg:min-w-0 lg:pt-2 lg:pr-2 lg:pl-70",
					!showDesktopSidebar && "lg:pl-2",
					showDesktopSidebar && "lg:pl-70",
				)}
			>
				<div className="hidden items-center justify-between bg-white p-2 pt-1 lg:flex lg:bg-zinc-100 dark:bg-zinc-950 dark:lg:bg-zinc-950">
					<Button
						plain
						className="cursor-pointer"
						onClick={() => {
							setShowDesktopSidebar((prev) => !prev);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="none"
							viewBox="0 0 24 24"
							className={cn(
								"transition-all duration-200 ease-in-out",
								!showDesktopSidebar && "rotate-180",
								showDesktopSidebar && "rotate-0",
							)}
						>
							<title>Open pane</title>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M14.25 4.75v14.5m-3-8.5L9.75 12l1.5 1.25m-4.5 6h10.5a2 2 0 0 0 2-2V6.75a2 2 0 0 0-2-2H6.75a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2Z"
							/>
						</svg>
					</Button>
					<div className="grow-1" />
					<div className="flex gap-6 text-sm">
						<Link to="/app">Home</Link>
						<Link to="/product/$productName">Product</Link>
						<Link>Interviews</Link>
						<Link>Resources</Link>
					</div>
				</div>
				<div className="relative isolate grow p-6 lg:rounded-lg lg:bg-white lg:pt-14 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
					{children}
				</div>
			</main>
		</div>
	);
}
