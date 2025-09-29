"use client";

import { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import SidebarNavContent from "./SidebarNavContent";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
        <SidebarHeader isMobile={true} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <aside className="sidebar hidden lg:flex">
        <SidebarHeader />
        <nav className="sidebar-nav">
          <SidebarNavContent /> 
        </nav>
        <SidebarFooter />
      </aside>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <aside className="lg:hidden fixed top-0 pt-[72px] w-full bg-white h-full z-40 flex flex-col">
          <nav className="w-full sidebar-nav flex-grow overflow-y-auto">
            <SidebarNavContent /> 
          </nav>
          <SidebarFooter />
        </aside>
      )}
    </>
  );
}
