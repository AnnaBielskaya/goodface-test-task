"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarSections, bottomLinks } from "./sidebar.config";
import type {
  LinkItem,
  NavSection,
} from "./sidebar.config";
import { Button } from "@/ui/Button";
import React, { useState } from "react";
import { PlusIcon } from "@/assets/sidebar-icons/PlusIcon";
import { ChevronRight, ExternalLink } from "lucide-react";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import { CollapsibleMenu } from "./CollapsibleMenu";

function SidebarLink({ href, icon: Icon, label, external }: LinkItem) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`sidebar-link flex items-center gap-4 justify-between rounded px-3 py-1 transition-colors ${
        isActive
          ? "bg-brand-50 text-brand-500"
          : "text-grey-700 hover:bg-brand-50 hover:text-brand-500"
      }`}
    >
      <div className="flex items-center gap-4">
        {Icon && <Icon className="h-5 w-5" />}
        <span className="text-subtitle2">{label}</span>
      </div>
      {external && <ExternalLink className="ml-auto h-4 w-4" />}
    </Link>
  );
}

function SidebarSection({ title, links }: NavSection) {
  return (
    <div>
      {title && (
        <p className="sidebar-section-title text-overline text-grey-700">
          {title}
        </p>
      )}
      <ul className="flex flex-col gap-1">
        {links.map((link) => (
          <li key={link.href}>
            <SidebarLink {...link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

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
