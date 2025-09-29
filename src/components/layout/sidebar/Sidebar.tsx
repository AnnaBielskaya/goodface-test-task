"use client";

import { sidebarSections, bottomLinks } from "./sidebar.config";
import { Button } from "@/ui/Button";
import React from "react";
import { PlusIcon } from "@/assets/sidebar-icons/PlusIcon";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import { CollapsibleMenu } from "./CollapsibleMenu";
import SidebarLink from "./SidebarLink";
import SidebarSection from "./SidebarSection";

export default function Sidebar() {
  return (
    <aside className="sidebar flex">
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
  );
}
