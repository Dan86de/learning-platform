import { Avatar } from "@/components/catalyst/avatar";
import {
	DropdownButton,
	DropdownDivider,
	DropdownItem,
	DropdownLabel,
	DropdownMenu,
} from "@/components/catalyst/dropdown";
import { Dropdown } from "@/components/catalyst/dropdown";
import {
	Navbar,
	NavbarItem,
	NavbarSection,
	NavbarSpacer,
} from "@/components/catalyst/navbar";
import { CourseSidebarLayout } from "@/components/playground/course-layout";
import {
	CourseSidebar,
	CourseSidebarBody,
	CourseSidebarFooter,
	CourseSidebarHeader,
	CourseSidebarItem,
	CourseSidebarLabel,
	CourseSidebarSection,
	CourseSidebarSpacer,
} from "@/components/playground/course-sidebar";
import { ThemeSwitcher } from "@/lib/styles/theme-switcher";
import { useClerk, useUser } from "@clerk/tanstack-react-start";
import {
	ArrowRightStartOnRectangleIcon,
	Cog8ToothIcon,
	UserIcon,
} from "@heroicons/react/20/solid";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/course")({
	component: RouteComponent,
});

function RouteComponent() {
	const user = useUser();
	const { signOut } = useClerk();

	return (
		<CourseSidebarLayout
			navbar={
				<Navbar>
					<NavbarSpacer />
					<NavbarSection>
						<Dropdown>
							<DropdownButton as={NavbarItem}>
								<span className="flex min-w-0 items-center gap-3">
									<Avatar
										src={user.user?.imageUrl}
										className="size-8"
										square
										alt=""
									/>
								</span>
							</DropdownButton>
							<DropdownMenu className="min-w-64" anchor="top start">
								<DropdownItem href="/app/profile">
									<UserIcon />
									<DropdownLabel>My profile</DropdownLabel>
								</DropdownItem>
								<DropdownItem href="/settings">
									<Cog8ToothIcon />
									<DropdownLabel>Settings</DropdownLabel>
								</DropdownItem>
								<DropdownDivider />
								<DropdownItem onClick={() => signOut({ redirectUrl: "/" })}>
									<ArrowRightStartOnRectangleIcon />
									<DropdownLabel>Sign Out</DropdownLabel>
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</NavbarSection>
				</Navbar>
			}
			sidebar={
				<CourseSidebar>
					<CourseSidebarHeader>
						<div className="flex items-center gap-2 font-semibold text-lg">
							<img
								src="/logo.png"
								alt="Logo"
								className="size-8 text-zinc-950 dark:text-white forced-colors:text-[CanvasText]"
							/>
							Head Full of Code
						</div>
					</CourseSidebarHeader>
					<CourseSidebarBody>
						<CourseSidebarSection>
							<CourseSidebarLabel href="/course/head-full-of-code/module/orientation">
								Orientation
							</CourseSidebarLabel>
							<CourseSidebarItem href="/course/head-full-of-code/module/orientation/lesson/1">
								The ladscape of choice
							</CourseSidebarItem>
							<CourseSidebarItem href="/course/head-full-of-code/module/orientation/lesson/2">
								Internal vs. external compass
							</CourseSidebarItem>
							<CourseSidebarItem href="/course/head-full-of-code/module/orientation/lesson/3">
								The stories you're living
							</CourseSidebarItem>
							<CourseSidebarItem href="/course/head-full-of-code/module/orientation/lesson/4">
								Recognizing patterns in past decisions
							</CourseSidebarItem>
							<CourseSidebarItem href="/course/head-full-of-code/module/orientation/lesson/5">
								Values, goals, and the difference between them
							</CourseSidebarItem>
						</CourseSidebarSection>
						<CourseSidebarSection>
							<CourseSidebarLabel href="/course/head-full-of-code/module/discernment">
								Discernment
							</CourseSidebarLabel>
							<CourseSidebarItem href="/course/head-full-of-code/module/discernment/lesson/1">
								What makes a "good" decision, realy?
							</CourseSidebarItem>
							<CourseSidebarItem href="/course/head-full-of-code/module/discernment/lesson/2">
								Clarity vs. certainty: Learning to live without guarantees
							</CourseSidebarItem>
							<CourseSidebarItem href="/course/head-full-of-code/module/discernment/lesson/3">
								Assessing risk without catastrophizing
							</CourseSidebarItem>
							<CourseSidebarItem href="/course/head-full-of-code/module/discernment/lesson/4">
								Discomfort as data: What tension is trying to tell you
							</CourseSidebarItem>
							<CourseSidebarItem href="/course/head-full-of-code/module/discernment/lesson/5">
								How to ask better questions (of yourself and others)
							</CourseSidebarItem>
						</CourseSidebarSection>
						<CourseSidebarSection>
							<CourseSidebarLabel href="/course/head-full-of-code/module/direction">
								Direction
							</CourseSidebarLabel>
							<CourseSidebarItem href="/course/head-full-of-code/module/direction/lesson/1">
								The trade-off equation: What you're always giving up
							</CourseSidebarItem>
							<CourseSidebarItem href="/course/head-full-of-code/module/direction/lesson/2">
								Short-term vs. long-term thinking
							</CourseSidebarItem>
							<CourseSidebarItem href="/course/head-full-of-code/module/direction/lesson/3">
								When logic and intuition disagree
							</CourseSidebarItem>
							<CourseSidebarItem href="/course/head-full-of-code/module/direction/lesson/4">
								Making peace with incomplete information
							</CourseSidebarItem>
							<CourseSidebarItem href="/course/head-full-of-code/module/direction/lesson/5">
								Owning the decisions even if it's hard
							</CourseSidebarItem>
						</CourseSidebarSection>
						<CourseSidebarSpacer />
					</CourseSidebarBody>
					<CourseSidebarFooter>
						<div className="flex w-full items-center justify-center">
							<ThemeSwitcher />
						</div>
					</CourseSidebarFooter>
				</CourseSidebar>
			}
		>
			<Outlet />
		</CourseSidebarLayout>
	);
}
