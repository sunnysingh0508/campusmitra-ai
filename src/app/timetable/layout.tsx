import { DashboardLayoutClient } from "@/components/dashboard/layout/DashboardLayoutClient";

export default function TimetableLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
