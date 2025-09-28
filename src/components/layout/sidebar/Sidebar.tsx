"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarSections } from "./sidebar.config";
import { Button } from "@/ui/Button";
import SidebarFooter from "./SidebarFooter";
import React from "react";
import type { NavLink } from "./sidebar.config";

function SidebarHeader() {
  return (
    <div className="flex items-center justify-between py-2 px-4">
      <h1 className="text-h4 font-medium text-grey-800">Logo</h1>
    </div>
  );
}

function SidebarLink({ href, icon: Icon, label }: NavLink) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-4 rounded-md py-1 pl-3 pr-2 text-grey-600
        ${
          isActive
            ? "font-semibold bg-brand-50 text-brand-500"
            : "hover:bg-brand-50 hover:text-brand-500"
        }`}
    >
      <Icon className="h-5 w-5" />
      <span className="text-subtitle2">{label}</span>
    </Link>
  );
}

function SidebarSection({
  title,
  links,
}: {
  title?: string;
  links: NavLink[]; 
}) {
  return (
    <div>
      {title && (
        <p className="text-overline text-grey-700 pl-3 mb-2">{title}</p>
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
    <aside className="fixed left-0 top-0 h-screen w-[280px] flex flex-col border-r border-grey-200 bg-white">
      <SidebarHeader />

      <nav className="flex flex-col p-4 gap-4 flex-1 overflow-y-auto">
        <Button label="Buy new proxies" />
        {sidebarSections.map((section) => (
          <SidebarSection key={section.title || "home"} {...section} />
        ))}
      </nav>

      <SidebarFooter />
    </aside>
  );
}