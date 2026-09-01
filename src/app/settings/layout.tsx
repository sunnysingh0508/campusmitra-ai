import { DashboardLayoutClient } from "@/components/dashboard/layout/DashboardLayoutClient";

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
