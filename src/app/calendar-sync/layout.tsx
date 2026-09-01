import { DashboardLayoutClient } from "@/components/dashboard/layout/DashboardLayoutClient";

export default function CalendarSyncLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
