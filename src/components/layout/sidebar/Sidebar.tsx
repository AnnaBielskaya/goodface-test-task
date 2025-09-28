"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sidebarSections, bottomLinks } from "./sidebar.config";
import { Button } from "@/ui/Button";

function SidebarHeader() {
  return (
    <div className="flex items-center justify-between py-2 px-4">
      <h1 className="text-h4 font-medium text-grey-800">Logo</h1>
    </div>
  );
}

function SidebarLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-4 py-1 pl-3 pr-2
        ${
          isActive
            ? "font-semibold bg-brand-50 text-brand-500"
            : "hover:bg-brand-50 hover:text-brand-500"
        }`}
    >
      <Image src={icon} alt={label} width={20} height={20} />
      <span className="text-subtitle2">{label}</span>
    </Link>
  );
}

function SidebarSection({
  title,
  links,
}: {
  title?: string;
  links: { href: string; icon: string; label: string }[];
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
  const pathname = usePathname();

  return (
    <aside className="h-screen w-70 flex-col">
      <SidebarHeader />

      <nav className="flex flex-col p-4 gap-4">
        <Button label="Button" />

        {sidebarSections.map((section) => (
          <SidebarSection key={section.title || "home"} {...section} />
        ))}
      </nav>
    </aside>
  );
}
