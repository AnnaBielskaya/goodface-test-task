import { Button } from "@/ui/Button";
import { PlusIcon } from "@/assets/sidebar-icons/PlusIcon";
import SidebarSection from "./SidebarSection";
import { CollapsibleMenu } from "./CollapsibleMenu";
import SidebarLink from "./SidebarLink";
import { sidebarSections, bottomLinks } from "./sidebar.config";
import { Dispatch, SetStateAction } from "react";

interface SidebarNavContentProps {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export default function SidebarNavContent({
  setIsOpen,
}: SidebarNavContentProps) {
  return (
    <>
      <Button
        className="w-full mb-2"
        icon={<PlusIcon className="h-4 w-4" />}
        label="Buy new proxies"
      />
      {sidebarSections.map((section) => (
        <SidebarSection
          key={section.title || "home"}
          {...section}
          closeSidebar={setIsOpen}
        />
      ))}
      <div>
        <ul className="sidebar-bottom-links">
          {bottomLinks.map((link) => (
            <li key={link.label}>
              {"children" in link ? (
                <CollapsibleMenu {...link} closeSidebar={setIsOpen} />
              ) : (
                <SidebarLink {...link} setIsOpen={setIsOpen} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
