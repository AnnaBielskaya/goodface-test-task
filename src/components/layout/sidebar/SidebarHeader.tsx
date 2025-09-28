import { NotificationButton } from "./NotificationButton";

export default function SidebarHeader() {
    return (
      <div className="sidebar-header">
        <h1 className="text-h4 text-grey-800">Logo</h1>
        <NotificationButton />
      </div>
    );
  }