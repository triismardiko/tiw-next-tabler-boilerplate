"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainMenu } from "../../config/menu";
import * as TablerIcons from "@tabler/icons-react";
import { ThemeSettingsButton } from "../theme/ThemeSettingsButton";
import { useTranslation } from "../i18n/LanguageProvider";

// Resolve icon name → Tabler icon component
function IconResolver(name?: string) {
  if (!name) return null;
  const iconName =
    "Icon" + name.charAt(0).toUpperCase() + name.slice(1);
  const Icon = TablerIcons[iconName as keyof typeof TablerIcons];
  return Icon ? <Icon size={18} className="me-2" /> : null;
}

export function HeaderNav() {
  const pathname = usePathname();
  

  return (
    <div className="navbar navbar-expand-md bg-white border-bottom">
      <div className="container-xl">

        <ul className="navbar-nav">
          {mainMenu.map((menu) => {
            const isActive =
              menu.href &&
              (pathname === menu.href || pathname.startsWith(menu.href + "/"));

            // Simple link
            if (!menu.children) {
              return (
                <li key={menu.label} className="nav-item">
                  <Link
                    href={menu.href ?? "#"}
                    className={"nav-link d-flex align-items-center" + (isActive ? " active" : "")}
                  >
                    {IconResolver(menu.icon)}
                    {menu.label}
                  </Link>
                </li>
              );
            }

            // Dropdown
            return (
              <li key={menu.label} className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  {IconResolver(menu.icon)}
                  {menu.label}
                </a>
                <div className="dropdown-menu">
                  {menu.children.map((child) => (
                    <Link
                      href={child.href}
                      key={child.href}
                      className={
                        "dropdown-item" +
                        (pathname === child.href ? " active" : "")
                      }
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>

        {/* Spacer */}
        <div className="ms-auto d-none d-md-flex">
          <ThemeSettingsButton />
        </div>
      </div>
    </div>
  );
}
