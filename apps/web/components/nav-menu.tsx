"use client";

import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@repo/ui/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavMenuItemType =
  | {
      title: string;
      section: true;
      url?: never;
      icon?: never;
    }
  | {
      title: string;
      section?: false;
      url: string;
      icon?: LucideIcon;
    };

export function NavMenu({
  items,
  ...props
}: { items: NavMenuItemType[] } & React.ComponentPropsWithoutRef<
  typeof SidebarGroup
>) {
  const pathname = usePathname();
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              {item.section === true ? (
                <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              ) : (
                <SidebarMenuButton
                  tooltip={item.title}
                  asChild
                  isActive={!item.section && pathname === item.url}
                >
                  <Link href={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
