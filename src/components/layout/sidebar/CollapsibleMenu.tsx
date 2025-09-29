'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, ExternalLink } from 'lucide-react';
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
        <ul className="mt-2 ml-5 flex flex-col gap-1 border-l-2 border-grey-200 pl-4">
          {children.map((child: LinkItem) => {
            const isChildActive = pathname === child.href;

            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  target={child.external ? '_blank' : undefined}
                  rel={child.external ? 'noopener noreferrer' : undefined}
                  className={`flex items-center justify-between rounded-md py-1 px-2 text-subtitle2 transition-colors ${
                    isChildActive
                      ? "text-brand-500 font-semibold"
                      : "text-grey-800 hover:text-brand-500"
                  }`}
                >
                  <span>{child.label}</span>
                  {child.external && <ExternalLink className="h-4 w-4" />}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}