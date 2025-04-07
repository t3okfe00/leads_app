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
    title: "LINKEDIN",
    url: "#",
    icon: Search,
  },
  {
    title: "CRUNCHBASE",
    url: "#",
    icon: Search,
  },
  {
    title: "CLEARBIT",
    url: "#",
    icon: Search,
  },
];

const leads = [
  {
    title: "COMPANIES",
    url: "#",
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
            <h1 className="text-2xl text-black">JCAD UK PROJECT</h1>
          </SidebarGroupLabel>
          <SidebarGroup>
            <SidebarGroupLabel className="text-xl text-black">
              {" "}
              APIs
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
