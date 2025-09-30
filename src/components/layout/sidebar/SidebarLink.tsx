import type { LinkItem } from "./sidebar.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, Dispatch, SetStateAction } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

type SidebarLinkProps = LinkItem &
  ComponentProps<typeof Link> &
  Partial<MobileMenuProps>;

export default function SidebarLink({
  href,
  icon: Icon,
  endIcon: EndIcon,
  label,
  setIsOpen,
  ...rest
}: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (setIsOpen) setIsOpen(false); 
  };

  return (
    <Link
      href={href}
      {...rest}
      onClick={handleClick}
      className={`sidebar-link group text-subtitle2 transition-colors ${
        isActive
          ? "bg-brand-50 text-brand-500"
          : "text-grey-800 hover:bg-brand-50 hover:text-brand-500"
      }`}
    >
      <div className="flex items-center gap-4">
        {Icon && (
          <Icon
            className={`sidebar-icon transition-colors ${
              isActive
                ? "text-brand-500"
                : "text-grey-700 group-hover:text-brand-500"
            }`}
          />
        )}
        <span className="text-subtitle2">{label}</span>
      </div>
      {EndIcon && (
        <EndIcon
          className={`h-4 w-4 transition-colors ${
            isActive
              ? "text-brand-500"
              : "text-grey-700 group-hover:text-brand-500"
          }`}
        />
      )}
    </Link>
  );
}
