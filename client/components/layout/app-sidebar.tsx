"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import { Home, Search, ContactRound, NotebookPen } from "lucide-react";

import Link from "next/link";
const apis = [
  {
    title: "Google Places API",
    url: "/dashboard/search/google-places",
    icon: Search,
  },
  {
    title: "LinkedIn API",
    url: "/dashboard/search/linked-in",
    icon: Search,
  },
  {
    title: "Clearbit",
    url: "#",
    icon: Search,
  },
];

const leads = [
  {
    title: "COMPANIES",
    url: "/dashboard/companies",
    icon: Home,
  },
  {
    title: "CONTACTS",
    url: "#",
    icon: ContactRound,
  },
  {
    title: "NOTES",
    url: "#",
    icon: NotebookPen,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <h1 className="text-2xl text-black">Leads App</h1>
          </SidebarGroupLabel>
          <SidebarGroup>
            <SidebarGroupLabel className="text-xl text-black">
              {" "}
              Search
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuSub>
                  {apis.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>
                          <item.icon></item.icon>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenuSub>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel className="text-xl text-black">
              {" "}
              Leads
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuSub>
                  {leads.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url}>
                          <item.icon></item.icon>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenuSub>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
