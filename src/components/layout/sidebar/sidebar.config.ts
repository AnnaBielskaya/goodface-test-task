import React from "react";

import { DashboardIcon } from "@/assets/sidebar-icons/DashboardIcon";
import { CoinIcon } from "@/assets/sidebar-icons/CoinIcon";
import { LogMonitorIcon } from "@/assets/sidebar-icons/LogMonitorIcon";
import { SummaryIcon } from "@/assets/sidebar-icons/SummaryIcon";
import { ProxyListIcon } from "@/assets/sidebar-icons/ProxyListIcon";
import { UserSettingsIcon } from "@/assets/sidebar-icons/UserSettingsIcon";
import { AllProductsIcon } from "@/assets/sidebar-icons/AllProductsIcon";
import { ApiKeysIcon } from "@/assets/sidebar-icons/ApiKeysIcon";
import { ApiRequestsIcon } from "@/assets/sidebar-icons/ApiRequestsIcon";
import { ResellersStatisticsIcon } from "@/assets/sidebar-icons/ResellersStatisticsIcon";
import { AffiliateProgramIcon } from "@/assets/sidebar-icons/AffiliateProgramIcon";
import { BillingIcon } from "@/assets/sidebar-icons/BillingIcon";
import { HelpIcon } from "@/assets/sidebar-icons/HelpIcon";
import { LiveLogIcon } from "@/assets/sidebar-icons/LiveLogIcon";

export type LinkItem = {
  href: string;
  label: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  endIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type CollapsibleMenuType = {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: LinkItem[];
};

export type SidebarItem = LinkItem | CollapsibleMenuType;

export type NavSection = {
  title: string;
  links: LinkItem[];
};

export const sidebarSections: NavSection[] = [
  {
    title: "",
    links: [{ href: "/", label: "Dashboard", icon: DashboardIcon }],
  },
  {
    title: "System Overview",
    links: [
      {
        href: "/observability",
        label: "Observability Overview",
        icon: CoinIcon,
      },
      {
        href: "/live-log-monitor",
        label: "Live Log Monitor",
        icon: LogMonitorIcon,
        endIcon: LiveLogIcon,
      },
    ],
  },
  {
    title: "My Services",
    links: [
      { href: "/services/summary", label: "Summary", icon: SummaryIcon },
      {
        href: "/services/proxy-list",
        label: "Proxy List",
        icon: ProxyListIcon,
      },
      {
        href: "/services/user-settings",
        label: "User Settings",
        icon: UserSettingsIcon,
      },
      {
        href: "/services/all-products",
        label: "All Products",
        icon: AllProductsIcon,
      },
    ],
  },
  {
    title: "Developer Section",
    links: [
      { href: "/developer/api-keys", label: "API Keys", icon: ApiKeysIcon },
      {
        href: "/developer/api-requests",
        label: "API Requests",
        icon: ApiRequestsIcon,
      },
    ],
  },
  {
    title: "Affiliate Programs",
    links: [
      {
        href: "/affiliate/resellers-statistics",
        label: "Resellers Statistics",
        icon: ResellersStatisticsIcon,
      },
      {
        href: "/developer/affiliate-program",
        label: "Affiliate Program",
        icon: AffiliateProgramIcon,
      },
    ],
  },
];

export const bottomLinks: SidebarItem[] = [
  {
    label: "Billing",
    icon: BillingIcon,
    children: [
      { href: "/billing/orders", label: "Orders" },
      { href: "/billing/invoices", label: "Invoices" },
      { href: "/billing/transactions", label: "Transactions" },
      { href: "/billing/payment-settings", label: "Payment settings" },
    ],
  },
  {
    label: "Help",
    icon: HelpIcon,
    children: [
      { href: "/help/faq", label: "FAQ" },
      {
        href: "/help/documentation",
        label: "Documentation",
      },
      {
        href: "/help/how-to-guides",
        label: "Guides How To",
      },
    ],
  },
];
