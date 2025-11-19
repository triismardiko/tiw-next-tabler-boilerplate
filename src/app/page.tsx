import { AppShell } from "../../components/layout/AppShell";
import { TenantBanner } from "../../components/tenant/TenantBanner";
import { DashboardContent } from "../../components/pages/DashboardContent";

export default function Page() {
  return (
    <AppShell>
      <TenantBanner />
      <DashboardContent />
    </AppShell>
  );
}
