// components/layout/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as TablerIcons from "@tabler/icons-react";
import { mainMenu, MenuItem } from "../../config/menu";

function resolveIcon(name?: string) {
  if (!name) return null;
  const key =
    ("Icon" + name.charAt(0).toUpperCase() + name.slice(1)) as keyof typeof TablerIcons;
  const Icon = TablerIcons[key] as any;
  if (!Icon) return null;
  return <Icon size={18} className="nav-link-icon" />;
}

function SidebarItem({ item }: { item: MenuItem }) {
  const pathname = usePathname();
  const isActive =
    item.href && (pathname === item.href || pathname?.startsWith(item.href + "/"));

  if (item.children && item.children.length > 0) {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
          {resolveIcon(item.icon)}
          <span className="nav-link-title">{item.label}</span>
        </a>
        <div className="dropdown-menu show">
          {item.children.map((child) => (
            <Link
              key={child.href ?? child.label}
              href={child.href ?? "#"}
              className={
                "dropdown-item" +
                (child.href && pathname === child.href ? " active" : "")
              }
            >
              {child.label}
            </Link>
          ))}
        </div>
      </li>
    );
  }

  return (
    <li className="nav-item">
      <Link
        href={item.href ?? "#"}
        className={"nav-link" + (isActive ? " active" : "")}
      >
        {resolveIcon(item.icon)}
        <span className="nav-link-title">{item.label}</span>
      </Link>
    </li>
  );
}

export function Sidebar() {
  return (
    <aside className="navbar navbar-vertical navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebar-menu"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <h1 className="navbar-brand navbar-brand-autodark">
          <a href="#" className="text-decoration-none">
            Tabler Next
          </a>
        </h1>

        <div className="collapse navbar-collapse" id="sidebar-menu">
          <ul className="navbar-nav pt-lg-3">
            {mainMenu.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
