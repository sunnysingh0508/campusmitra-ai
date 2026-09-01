import { DashboardLayoutClient } from "@/components/dashboard/layout/DashboardLayoutClient";

export default function NotificationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
