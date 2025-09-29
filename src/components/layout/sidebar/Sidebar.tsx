"use client";

import { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import { Button } from "@/ui/Button";
import { PlusIcon } from "@/assets/sidebar-icons/PlusIcon";
import SidebarSection from "./SidebarSection";
import SidebarFooter from "./SidebarFooter";
import { CollapsibleMenu } from "./CollapsibleMenu";
import SidebarLink from "./SidebarLink";

import { sidebarSections, bottomLinks } from "./sidebar.config";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile topbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
        <SidebarHeader isMobile setIsOpen={setIsOpen} />
      </div>

      {/* Desktop sidebar */}
      <aside className="sidebar hidden lg:flex">
        <SidebarHeader />
        <nav className="sidebar-nav">
          <Button
            className="w-full mb-2"
            icon={<PlusIcon className="h-4 w-4" />}
            label="Buy new proxies"
          />
          {sidebarSections.map((section) => (
            <SidebarSection key={section.title || "home"} {...section} />
          ))}
          <div>
            <ul className="border-t pt-4 border-grey-200 flex flex-col gap-1">
              {bottomLinks.map((link) => (
                <li key={link.label}>
                  {"children" in link ? (
                    <CollapsibleMenu {...link} />
                  ) : (
                    <SidebarLink {...link} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <SidebarFooter />
      </aside>

      {/* Mobile dropdown */}
      {isOpen && (
        <aside className="lg:hidden fixed top-12 left-0 right-0 bg-gray-800 text-white p-4 z-40">
          <nav className="flex flex-col gap-4">
            Coming Soon
          </nav>
        </aside>
      )}
    </>
  );
}
