import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/DarkModeToggle";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SanityLive } from "@/sanity/lib/live";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonathan Perry's Website",
  description: "AI Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <SidebarProvider defaultOpen={false}>
            <SidebarInset>{children}</SidebarInset>

            <AppSidebar side="right" />

            <div className="fixed md:bottom-6 md:right-24 top-4 right-18 md:top-auto md:left-auto z-20">
              <div className="w-10 h-10 md:w-12 md:h-12">
                <ModeToggle />
              </div>
            </div>

            <SanityLive />
          </SidebarProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
