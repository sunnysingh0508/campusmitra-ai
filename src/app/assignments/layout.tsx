import { DashboardLayoutClient } from "@/components/dashboard/layout/DashboardLayoutClient";

export default function AssignmentsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
