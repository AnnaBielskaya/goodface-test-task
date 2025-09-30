import type { NavSection } from "./sidebar.config";
import SidebarLink from "./SidebarLink";
import { Dispatch, SetStateAction } from "react";

interface SidebarSectionProps extends NavSection {
  closeSidebar?: Dispatch<SetStateAction<boolean>>;
}

export default function SidebarSection({
  title,
  links,
  closeSidebar,
}: SidebarSectionProps) {
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
            <SidebarLink {...link} setIsOpen={closeSidebar} />
          </li>
        ))}
      </ul>
    </div>
  );
}
