import React from 'react';

import DashboardIcon from '@/assets/sidebar-icons/layout-dashboard.svg';
import ObservabilityIcon from '@/assets/sidebar-icons/eye.svg';
import LogMonitorIcon from '@/assets/sidebar-icons/monitor.svg';
import SummaryIcon from '@/assets/sidebar-icons/select-all.svg';
import ProxyListIcon from '@/assets/sidebar-icons/clipboard-list.svg';
import UserSettingsIcon from '@/assets/sidebar-icons/users.svg';
import AllProductsIcon from '@/assets/sidebar-icons/basket.svg';
import ApiKeysIcon from '@/assets/sidebar-icons/key.svg';
import ApiRequestsIcon from '@/assets/sidebar-icons/code-circle-2.svg';
import ResellersStatisticsIcon from '@/assets/sidebar-icons/coin.svg';
import AffiliateProgramIcon from '@/assets/sidebar-icons/new-user.svg';
import BillingIcon from '@/assets/sidebar-icons/receipt-2.svg';
import HelpIcon from '@/assets/sidebar-icons/help-circle.svg';

export type NavLink = {
  href: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type NavSection = {
  title: string;
  links: NavLink[];
};

export const sidebarSections: NavSection[] = [
  {
    title: "",
    links: [
      { href: "/", label: "Dashboard", icon: DashboardIcon },
    ],
  },
  {
    title: "System Overview",
    links: [
      { href: "/observability", label: "Observability Overview", icon: ObservabilityIcon },
      { href: "/live-log-monitor", label: "Live Log Monitor", icon: LogMonitorIcon },
    ],
  },
  {
    title: "My Services",
    links: [
      { href: "/services/summary", label: "Summary", icon: SummaryIcon },
      { href: "/services/proxy-list", label: "Proxy List", icon: ProxyListIcon },
      { href: "/services/user-settings", label: "User Settings", icon: UserSettingsIcon },
      { href: "/services/all-products", label: "All Products", icon: AllProductsIcon },
    ],
  },
  {
    title: "Developer Section",
    links: [
      { href: "/developer/api-keys", label: "API Keys", icon: ApiKeysIcon },
      { href: "/developer/api-requests", label: "API Requests", icon: ApiRequestsIcon },
    ],
  },
  {
    title: "Affiliate Programs",
    links: [
      { href: "/affiliate/resellers-statistics", label: "Resellers Statistics", icon: ResellersStatisticsIcon },
      { href: "/developer/affiliate-program", label: "Affiliate Program", icon: AffiliateProgramIcon },
    ],
  },
];

export const bottomLinks: NavLink[] = [
  { href: "/billing", label: "Billing", icon: BillingIcon },
  { href: "/help", label: "Help", icon: HelpIcon },
];