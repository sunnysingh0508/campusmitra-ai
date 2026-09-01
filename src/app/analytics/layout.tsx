import { DashboardLayoutClient } from "@/components/dashboard/layout/DashboardLayoutClient";

export default function AnalyticsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
