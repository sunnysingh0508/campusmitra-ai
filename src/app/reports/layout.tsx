import { DashboardLayoutClient } from "@/components/dashboard/layout/DashboardLayoutClient";

export default function ReportsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
