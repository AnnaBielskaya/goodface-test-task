"use client";

import { NotificationButton } from "./NotificationButton";
import BurgerButton from "./BurgerButton";

interface SidebarHeaderProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen?: boolean;
  isMobile?: boolean;
}

export default function SidebarHeader({
  setIsOpen,
  isOpen = false,
  isMobile = false,
}: SidebarHeaderProps) {
  return (
    <div className="sidebar-header">
      <h1 className="text-h4 text-grey-800">Logo</h1>
      <div className="flex flex-row gap-6">
        <NotificationButton />
        {isMobile && setIsOpen && (
          <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
    </div>
  );
}
