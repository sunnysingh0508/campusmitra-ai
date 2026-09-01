import { DashboardLayoutClient } from "@/components/dashboard/layout/DashboardLayoutClient";

export default function AttendanceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
