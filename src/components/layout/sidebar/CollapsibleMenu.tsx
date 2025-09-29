'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { CollapsibleMenuType, LinkItem } from './sidebar.config';

export function CollapsibleMenu({ label, icon: Icon, children }: CollapsibleMenuType) {
  const pathname = usePathname();
  const isActive = children.some((child) => pathname === child.href);
  const [isOpen, setIsOpen] = useState(isActive);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer sidebar-link flex w-full justify-between ${
          isActive ? "text-brand-500" : "text-grey-800 hover:text-brand-500"
        } hover:bg-brand-50`}
      >
        <div className="flex items-center gap-4">
          <Icon className="h-5 w-5" />
          <span className={`text-subtitle2 ${isActive ? "font-semibold" : ""}`}>
            {label}
          </span>
        </div>
        <ChevronRight
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>
      {isOpen && (
        <ul className="mt-2 ml-5 flex flex-col">
          {children.map((child: LinkItem) => {
            const isChildActive = pathname === child.href;

            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className={`collapsible-menu-link ${
                    isChildActive
                      ? "active"
                      : ""
                  }`}
                >
                  <span>{child.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}