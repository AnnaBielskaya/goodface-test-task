import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import { Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: "Goodface Task",
  description: "Frontend test task",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} flex h-screen overflow-hidden`}>
        <Sidebar />

        <main
          className="
            flex-1 overflow-y-auto bg-gray-100
            pt-[88px] 
            px-4
            lg:pt-6     
            lg:ml-[280px]     
            lg:px-12
          "
        >
          {children}
        </main>
      </body>
    </html>
  );
}
