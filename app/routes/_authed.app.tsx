import { createFileRoute } from "@tanstack/react-router";
import {
  Navbar,
  NavbarSection,
  NavbarSpacer,
} from "@/components/catalyst/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from "@/components/catalyst/sidebar";
import { SidebarLayout } from "@/components/catalyst/sidebar-layout";
import {
  ArrowRightStartOnRectangleIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  HomeIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import {
  SignOutButton,
  useClerk,
  UserButton,
  useUser,
} from "@clerk/tanstack-react-start";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/catalyst/dropdown";
import { Avatar } from "@/components/catalyst/avatar";
import { ThemeSwitcher } from "@/lib/styles/theme-switcher";

export const Route = createFileRoute("/_authed/app")({
  component: AppComponent,
});

function AppComponent() {
  const user = useUser();
  const { signOut } = useClerk();

  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <UserButton />
            <ThemeSwitcher />
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <SidebarSection className="max-lg:hidden">
              <img
                src="/logo.png"
                alt="Logo"
                className="mx-auto h-10 w-10 text-zinc-950 dark:text-white forced-colors:text-[CanvasText]"
              />
            </SidebarSection>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/app">
                <HomeIcon />
                <SidebarLabel>Home</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
            <div className="flex w-full items-center justify-center max-lg:hidden">
              <ThemeSwitcher />
            </div>
          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar
                    src={user.user?.imageUrl}
                    className="size-10"
                    square
                    alt=""
                  />
                  <span className="min-w-0">
                    <span className="block truncate font-medium text-sm/5 text-zinc-950 dark:text-white">
                      {user.user?.fullName ?? "User"}
                    </span>
                    <span className="block truncate font-normal text-xs/5 text-zinc-500 dark:text-zinc-400">
                      {user.user?.primaryEmailAddress?.emailAddress ??
                        "user@email.com"}
                    </span>
                  </span>
                </span>
                <ChevronUpIcon />
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
          </SidebarFooter>
        </Sidebar>
      }
    >
      {/* The page content */}
    </SidebarLayout>
  );
}
