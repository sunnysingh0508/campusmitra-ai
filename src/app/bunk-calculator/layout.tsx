import { DashboardLayoutClient } from "@/components/dashboard/layout/DashboardLayoutClient";

export default function BunkCalculatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
