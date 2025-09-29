import type { LinkItem } from "./sidebar.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink } from "lucide-react";

export default function SidebarLink({ href, icon: Icon, endIcon: EndIcon, label, external }: LinkItem) {
    const pathname = usePathname();
    const isActive = pathname === href;
  
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`sidebar-link text-subtitle2 flex items-center gap-4 justify-between rounded px-3 py-1 transition-colors ${
          isActive
            ? "bg-brand-50 text-brand-500"
            : "text-grey-800 hover:bg-brand-50 hover:text-brand-500"
        }`}
      >
        <div className="flex items-center gap-4">
          {Icon && <Icon className="h-5 w-5" />}
          <span className="text-subtitle2">{label}</span>
        </div>
        {external && <ExternalLink className="ml-auto h-4 w-4" />}
        {EndIcon && <EndIcon className="h-4 w-4 text-brand-500" />}
      </Link>
    );
  }