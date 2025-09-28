"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarSections } from "./sidebar.config";
import { Button } from "@/ui/Button";
import React from "react";
import type { NavLink } from "./sidebar.config";
import { NotificationButton } from "./NotificationButton";
import { PlusIcon } from "@/assets/sidebar-icons/PlusIcon";
import Image from "next/image";

function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <h1 className="text-h4 font-medium text-grey-800">Logo</h1>
      <NotificationButton />
    </div>
  );
}

function SidebarLink({ href, icon: Icon, label }: NavLink) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`sidebar-link ${
        isActive
          ? "bg-brand-50 text-brand-500 font-semibold"
          : "text-grey-600 hover:bg-brand-50 hover:text-brand-500"
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
        <p className="sidebar-section-title">{title}</p>
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

function SidebarFooter() {
  return (
    <div className="sidebar-footer">
      <div className="flex flex-col">
        <span className="text-subtitle2 text-grey-800">Henry Smith</span>
        <span className="text-body2 text-grey-800">henry.smith@gmail.com</span>
      </div>
      <button className="p-1 cursor-pointer">
        <Image
          src="/icons/dots-vertical.svg"
          alt="More options"
          width={20}
          height={20}
        />
      </button>
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
          icon={<PlusIcon />}
          label="Buy new proxies"
        />
        {sidebarSections.map((section) => (
          <SidebarSection key={section.title || "home"} {...section} />
        ))}
      </nav>
      <SidebarFooter />
    </aside>
  );
}