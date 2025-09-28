import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar/Sidebar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Goodface Task",
  description: "Frontend test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Sidebar />
        <main className="ml-[280px] h-screen overflow-y-auto px-12 p-6 bg-page-bg">
          {children}
        </main>
      </body>
    </html>
  );
}
