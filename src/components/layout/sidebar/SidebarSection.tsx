import type { NavSection } from "./sidebar.config";
import SidebarLink from "./SidebarLink";

export default function SidebarSection({ title, links }: NavSection) {
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