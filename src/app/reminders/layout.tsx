import { DashboardLayoutClient } from "@/components/dashboard/layout/DashboardLayoutClient";

export default function RemindersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
