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
  CourseSidebarHeader,
  CourseSidebarItem,
  CourseSidebarLabel,
  CourseSidebarSection,
  CourseSidebarSpacer,
} from "@/components/playground/course-sidebar";
import { ThemeSwitcher } from "@/lib/styles/theme-switcher";
import { useUser } from "@clerk/tanstack-react-start";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/course")({
  component: RouteComponent,
});

function RouteComponent() {
  const user = useUser();
  return (
    <CourseSidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem>Account</NavbarItem>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <CourseSidebar>
          <CourseSidebarHeader>
            <div className="flex items-center gap-2 font-bold text-lg">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-6 w-6 text-zinc-950 dark:text-white forced-colors:text-[CanvasText]"
              />
              Head Full of Code
            </div>
          </CourseSidebarHeader>
          <CourseSidebarBody>
            <CourseSidebarSection>
              <CourseSidebarLabel>Orientation</CourseSidebarLabel>
              <CourseSidebarItem href="/app">
                The ladscape of choice
              </CourseSidebarItem>
              <CourseSidebarItem href="/app">
                Internal vs. external compass
              </CourseSidebarItem>
              <CourseSidebarItem href="/app">
                The stories you're living
              </CourseSidebarItem>
              <CourseSidebarItem href="/app">
                Recognizing patterns in past decisions
              </CourseSidebarItem>
              <CourseSidebarItem href="/app">
                Values, goals, and the difference between them
              </CourseSidebarItem>
            </CourseSidebarSection>
            <CourseSidebarSection>
              <CourseSidebarLabel>Discernment</CourseSidebarLabel>
              <CourseSidebarItem href="/app">
                What makes a "good" decision, realy?
              </CourseSidebarItem>
              <CourseSidebarItem href="/app">
                Clarity vs. certainty: Learning to live without guarantees
              </CourseSidebarItem>
              <CourseSidebarItem href="/app">
                Assessing risk without catastrophizing
              </CourseSidebarItem>
              <CourseSidebarItem href="/app">
                Discomfort as data: What tension is trying to tell you
              </CourseSidebarItem>
              <CourseSidebarItem href="/app">
                How to ask better questions (of yourself and others)
              </CourseSidebarItem>
            </CourseSidebarSection>
            <CourseSidebarSection>
              <CourseSidebarLabel>Direction</CourseSidebarLabel>
              <CourseSidebarItem href="/app">
                The trade-off equation: What you're always giving up
              </CourseSidebarItem>
              <CourseSidebarItem href="/app">
                Short-term vs. long-term thinking
              </CourseSidebarItem>
              <CourseSidebarItem href="/app">
                When logic and intuition disagree
              </CourseSidebarItem>
              <CourseSidebarItem href="/app">
                Making peace with incomplete information
              </CourseSidebarItem>
              <CourseSidebarItem href="/app">
                Owning the decisions even if it's hard
              </CourseSidebarItem>
            </CourseSidebarSection>
            <CourseSidebarSpacer />
            <div className="flex w-full items-center justify-center max-lg:hidden">
              <ThemeSwitcher />
            </div>
          </CourseSidebarBody>
        </CourseSidebar>
      }
    >
      <Outlet />
    </CourseSidebarLayout>
  );
}
