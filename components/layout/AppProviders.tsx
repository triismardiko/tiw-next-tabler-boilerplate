// components/layout/AppProviders.tsx
"use client";

import { ReactNode } from "react";
import { TablerScripts } from "./TablerScripts";
import { TenantProvider } from "../tenant/TenantProvider";
import { LanguageProvider } from "../i18n/LanguageProvider";
import { ThemeProvider } from "../theme/ThemeProvider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <TablerScripts />
       <ThemeProvider>
        <LanguageProvider>
            <TenantProvider>{children}</TenantProvider>
         </LanguageProvider>
       </ThemeProvider>
      
    </>
  );
}
