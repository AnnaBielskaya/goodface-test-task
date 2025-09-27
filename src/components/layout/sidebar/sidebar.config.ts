export type NavLink = {
  href: string;
  label: string;
  icon: string;
};

export type NavSection = {
  title: string;
  links: NavLink[];
};

export const sidebarSections: NavSection[] = [
  {
    title: "",
    links: [
      {
        href: "/",
        label: "Dashboard",
        icon: "/icons/dashboard.svg",
      },
    ],
  },
  {
    title: "System Overview",
    links: [
      {
        href: "/observability",
        label: "Observability Overview",
        icon: "/icons/observability.svg",
      },
      {
        href: "/live-log-monitor",
        label: "Live Log Monitor",
        icon: "/icons/log-monitor.svg",
      },
    ],
  },
  {
    title: "My Services",
    links: [
      {
        href: "/services/summary",
        label: "Summary",
        icon: "/icons/summary.svg",
      },
      {
        href: "/services/proxy-list",
        label: "Proxy List",
        icon: "/icons/proxy-list.svg",
      },
      {
        href: "/services/user-settings",
        label: "User Settings",
        icon: "/icons/user-settings.svg",
      },
      {
        href: "/services/all-products",
        label: "All Products",
        icon: "/icons/all-products.svg",
      },
    ],
  },
  {
    title: "Developer Section",
    links: [
      {
        href: "/developer/api-keys",
        label: "API Keys",
        icon: "/icons/api-keys.svg",
      },
      {
        href: "/developer/api-requests",
        label: "API Requests",
        icon: "/icons/api-requests.svg",
      },
    ],
  },{
    title: "Affiliate Programs",
    links: [
      {
        href: "/affiliate/resellers-statistics",
        label: "Resellers Statistics",
        icon: "/icons/resellers-statistics.svg",
      },
      {
        href: "/developer/affiliate-program",
        label: "Affiliate Program",
        icon: "/icons/affiliate-program.svg",
      },
    ],
  },
];

export const bottomLinks: NavLink[] = [
  {
    href: "/billing",
    label: "Billing",
    icon: "/icons/billing.svg",
  },
  { href: "/help", label: "Help", icon: "/icons/help.svg" },
];
