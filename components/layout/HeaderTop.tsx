"use client";

import Link from "next/link";
import {
  IconBrandGithub,
  IconHeart,
  IconMoon,
  IconBell,
  IconGridPattern,
  IconChevronDown,
  IconUserCircle,
} from "@tabler/icons-react";

import { LanguageSwitcher } from "../i18n/LanguageSwitcher";
import { useTenant } from "../tenant/TenantProvider";
import { ThemeToggle } from "../theme/ThemeToggle";
import { useTranslation } from "../i18n/LanguageProvider";

export function HeaderTop() {
  const { tenant, setTenantId, allTenants } = useTenant();
  const { t } = useTranslation();

  return (
    <div className="navbar navbar-light bg-white border-bottom py-2">
      <div className="container-xl d-flex justify-content-between align-items-center">

        {/* LEFT: LOGO */}
        <div className="d-flex align-items-center">
          <Link href="/" className="navbar-brand d-flex align-items-center">
         
            <span className="fw-bold">{t("app.title")}</span>
          </Link>
        </div>

        {/* RIGHT: ACTION BUTTONS */}
        <div className="d-flex align-items-center gap-3">

        

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Tenant Switcher */}
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary d-flex align-items-center"
              type="button"
              data-bs-toggle="dropdown"
            >
              <span className="me-1">{tenant.name}</span>
              <IconChevronDown size={16} />
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              <h6 className="dropdown-header">Switch Tenant</h6>
              {allTenants.map((t) => (
                <button
                  key={t.id}
                  className={
                    "dropdown-item d-flex justify-content-between" +
                    (t.id === tenant.id ? " active" : "")
                  }
                  onClick={() => setTenantId(t.id)}
                >
                  <span>{t.name}</span>
                  {t.tag && (
                    <span className="badge bg-blue-lt ms-2">{t.tag}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Theme toggle */}
            <ThemeToggle />

          {/* Notifications */}
          <button className="btn btn-link position-relative">
            <IconBell size={20} />
            <span
              className="badge bg-red position-absolute top-0 start-100 translate-middle p-1"
              style={{ borderRadius: "50%" }}
            />
          </button>

          {/* Apps */}
          <button className="btn btn-link">
            <IconGridPattern size={20} />
          </button>

          {/* USER DROPDOWN */}
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              <span className="avatar rounded-circle bg-blue-lt me-2">
                <IconUserCircle size={22} />
              </span>
              <div className="d-none d-xl-block text-start lh-1">
                <div className="fw-semibold">Pawel Kuna</div>
                <small className="text-muted">UI Designer</small>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="#">
                Profile
              </a>
              <a className="dropdown-item" href="#">
                Settings
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
