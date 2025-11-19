// app/(auth)/login/page.tsx
"use client";

import { useTranslation } from "../../../../components/i18n/LanguageProvider";

export default function LoginPage() {
  const { t } = useTranslation();

  return (
    <div className="page page-center">
      <div className="container-tight py-4">
        <div className="text-center mb-4">
          <h2>{t("login.title")}</h2>
          <p className="text-muted">{t("login.subtitle")}</p>
        </div>
        <form>
          <div className="card card-md">
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">{t("login.email")}</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-2">
                <label className="form-label">
                  {t("login.password")}
                  <span className="form-label-description">
                    <a href="#">{t("login.forgot")}</a>
                  </span>
                </label>
                <div className="input-group input-group-flat">
                  <input type="password" className="form-control" />
                </div>
              </div>
              <div className="form-footer">
                <button type="submit" className="btn btn-primary w-100">
                  {t("login.button")}
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="text-center text-muted mt-3">
          {t("login.noAccount")} <a href="#">{t("login.signup")}</a>
        </div>
      </div>
    </div>
  );
}
