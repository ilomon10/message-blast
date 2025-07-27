"use client";

import * as React from "react";
import {
  ArrowUpCircleIcon,
  FileCode2Icon,
  HelpCircleIcon,
  KeyRoundIcon,
  LayoutDashboardIcon,
  ListIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";

import { NavMain } from "#components/nav-main";
import { NavUser } from "@repo/ui/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@repo/ui/components/ui/sidebar";
import { NavMenu, NavMenuItemType } from "./nav-menu";

const navMenu: NavMenuItemType[] = [
  {
    title: "Inbox",
    url: "/inbox",
    icon: MessageCircleIcon,
  },
  {
    title: "Sessions",
    url: "/sessions",
    icon: ListIcon,
  },
  {
    title: "Application",
    section: true,
  },
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Token",
    url: "/application-setting/sessions",
    icon: KeyRoundIcon,
  },
  {
    title: "Documentation",
    section: true,
  },
  {
    title: "Sessions",
    url: "/api/sessions",
    icon: FileCode2Icon,
  },
  {
    title: "Inbox",
    url: "/api/inbox",
    icon: FileCode2Icon,
  },
  {
    title: "More",
    url: "/api/",
    icon: MoreHorizontalIcon,
  },
];
const navSecondary: NavMenuItemType[] = [
  {
    title: "Settings",
    url: "#",
    icon: SettingsIcon,
  },
  {
    title: "Get Help",
    url: "#",
    icon: HelpCircleIcon,
  },
  {
    title: "Search",
    url: "#",
    icon: SearchIcon,
  },
];

const data = {
  user: {
    name: "John Doe",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavMenu items={navMenu} />
        <NavMenu items={navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
