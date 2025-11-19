// src/components/layout/AppShell.tsx
"use client";

import { Header } from "./Header";
import { useTranslation } from "../i18n/LanguageProvider";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();

  return (
    <div className="page">
      <div className="page-wrapper">
        <Header />
        <div className="page-body">
          <div className="container-xl">{children}</div>
        </div>
        <footer className="footer footer-transparent d-print-none">
          <div className="container-xl">
            <div className="row text-center align-items-center flex-row-reverse">
              <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                <ul className="list-inline list-inline-dots mb-0">
                  <li className="list-inline-item">{t("footer.text")}</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
