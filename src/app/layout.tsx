// src/app/layout.tsx
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
        <div className="flex min-h-screen">
          <Sidebar /> 
          <main className="flex-1 p-8 bg-page-bg">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}