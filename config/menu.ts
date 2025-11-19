export const mainMenu = [
  {
    label: "Home",
    icon: "home",
    href: "/",
  },
  {
    label: "Interface",
    icon: "box",
    children: [
      { label: "Cards", href: "/interface/cards" },
      { label: "Charts", href: "/interface/charts" },
    ],
  },
  {
    label: "Forms",
    icon: "checkbox",
    children: [
      { label: "Form Elements", href: "/forms/elements" },
    ],
  },
  {
    label: "Extra",
    icon: "star",
    children: [
      { label: "FAQ", href: "/extra/faq" },
    ],
  },
  {
    label: "Layout",
    icon: "grid-dots",
    children: [
      { label: "Vertical", href: "/layout/vertical" },
    ],
  },
  {
    label: "Plugins",
    icon: "puzzle",
    children: [
      { label: "Calendar", href: "/plugins/calendar" },
    ],
  },
  {
    label: "Addons",
    icon: "gift",
    children: [
      { label: "Pricing", href: "/addons/pricing" },
    ],
  },
  {
    label: "Help",
    icon: "help-circle",
    children: [
      { label: "Docs", href: "/help/docs" },
    ],
  },
];
