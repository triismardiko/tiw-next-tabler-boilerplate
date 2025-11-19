// components/tenant/TenantBanner.tsx
"use client";

import { useTenant } from "./TenantProvider";
import { useTranslation } from "../i18n/LanguageProvider";

export function TenantBanner() {
  const { tenant } = useTenant();
  const { t } = useTranslation();

  return (
    <div className="alert alert-info d-flex align-items-center mb-3">
      <div>
        <strong>{t("tenant.activeCompany")}: </strong>
        {tenant.code ? `[${tenant.code}] ` : null}
        {tenant.name}
        {tenant.tag && (
          <span className="badge bg-blue-lt ms-2 align-middle">
            {tenant.tag}
          </span>
        )}
      </div>
    </div>
  );
}
