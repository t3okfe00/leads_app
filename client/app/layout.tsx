import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { cookies } from "next/headers";
import { ToastContainer } from "react-toastify";
import { roboto, openSans } from "@/app/fonts";
import { Inter } from "next/font/google";

import Providers from "./providers";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leads",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${openSans.variable} ${inter.className} antialiased`}
      >
        <ToastContainer aria-label="toast notifications"></ToastContainer>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar></AppSidebar>

          <SidebarTrigger className="py-10"></SidebarTrigger>
          <Providers>{children}</Providers>
        </SidebarProvider>
      </body>
    </html>
  );
}
