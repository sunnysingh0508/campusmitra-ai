import { DashboardLayoutClient } from "@/components/dashboard/layout/DashboardLayoutClient";

export default function ActivityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
