"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sidebarSections, bottomLinks } from "./sidebar.config";
export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-70 flex-col">
      <div className="flex flex-row py-2 px-4 justify-between">
        <h1 className="text-h4">Logo</h1>
      </div>

      <nav className="flex flex-col p-4 gap-2">
        {sidebarSections.map((section) => (
          <div key={section.title || "home-section"}>
            {section.title && <p className="text-overline pl-3 mb-2">{section.title}</p>}

            <ul className="flex flex-col gap-1">
              {section.links.map((link) => {
                return (
                  <li className="" key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-4 py-1 pl-3 pr-2`}
                    >
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={20}
                        height={20}
                      />
                      <span className="text-subtitle2">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
