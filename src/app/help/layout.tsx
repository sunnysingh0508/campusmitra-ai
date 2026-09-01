import { DashboardLayoutClient } from "@/components/dashboard/layout/DashboardLayoutClient";

export default function HelpLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
