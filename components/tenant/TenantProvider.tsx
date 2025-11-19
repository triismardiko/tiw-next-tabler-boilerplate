// components/tenant/TenantProvider.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { tenants, Tenant } from "../../config/tenants";

type TenantContextValue = {
  tenant: Tenant;
  setTenantId: (id: string) => void;
  allTenants: Tenant[];
};

const TenantContext = createContext<TenantContextValue | undefined>(undefined);

const STORAGE_KEY = "tiw-active-tenant";

export function TenantProvider({ children }: { children: ReactNode }) {
  const [tenant, setTenant] = useState<Tenant>(tenants[0]);

  useEffect(() => {
    try {
      const storedId = window.localStorage.getItem(STORAGE_KEY);
      if (storedId) {
        const found = tenants.find((t) => t.id === storedId);
        if (found) {
          setTenant(found);
        }
      }
    } catch (e) {
      console.warn("Cannot read tenant from localStorage", e);
    }
  }, []);

  const setTenantId = (id: string) => {
    const found = tenants.find((t) => t.id === id);
    if (!found) return;
    setTenant(found);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch (e) {
      console.warn("Cannot write tenant to localStorage", e);
    }
  };

  return (
    <TenantContext.Provider
      value={{
        tenant,
        setTenantId,
        allTenants: tenants,
      }}
    >
      {children}
    </TenantContext.Provider>
  );
}

export function useTenant() {
  const ctx = useContext(TenantContext);
  if (!ctx) {
    throw new Error("useTenant must be used within TenantProvider");
  }
  return ctx;
}
