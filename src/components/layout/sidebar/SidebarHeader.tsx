"use client";

import { Menu } from "lucide-react";
import { NotificationButton } from "./NotificationButton";

interface SidebarHeaderProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile?: boolean;
}

export default function SidebarHeader({
  setIsOpen,
  isMobile = false,
}: SidebarHeaderProps) {
  return (
    <div className="sidebar-header">
      <h1 className="text-h4 text-grey-800">Logo</h1>
      <div className="flex flex-row gap-8">
        <NotificationButton />
        {isMobile && setIsOpen && (
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <Menu className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}
