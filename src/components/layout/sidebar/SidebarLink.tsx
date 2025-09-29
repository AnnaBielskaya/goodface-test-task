import type { LinkItem } from "./sidebar.config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLink({ href, icon: Icon, endIcon: EndIcon, label }: LinkItem) {
    const pathname = usePathname();
    const isActive = pathname === href;
  
    return (
      <Link
        href={href}
        className={`sidebar-link text-subtitle2 transition-colors ${
          isActive
            ? "bg-brand-50 text-brand-500"
            : "text-grey-800 hover:bg-brand-50 hover:text-brand-500"
        }`}
      >
        <div className="flex items-center gap-4">
          {Icon && <Icon className="sidebar-icon" />}
          <span className="text-subtitle2">{label}</span>
        </div>
        {EndIcon && <EndIcon className="h-4 w-4 text-brand-500" />}
      </Link>
    );
  }