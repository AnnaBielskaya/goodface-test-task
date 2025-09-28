"use client";

import { useEffect, useState } from "react";
import { NotificationBellIcon } from "@/assets/sidebar-icons/NotificationBellIcon";

export function NotificationButton() {
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    const fetchNotifications = () => {
      setNotificationCount(5);
    };

    fetchNotifications();
  }, []);

  return (
    <button className="cursor-pointer relative rounded-md p-2 text-grey-800 transition-colors hover:bg-brand-50 hover:text-brand-500">
      <NotificationBellIcon />

      {notificationCount > 0 && (
        <div>
          <span className="absolute top-1 right-[-2] rounded-lg px-[6] py-0 bg-brand-500 text-caption text-white">
            {notificationCount}
          </span>
        </div>
      )}
    </button>
  );
}
