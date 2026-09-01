import { DashboardLayoutClient } from "@/components/dashboard/layout/DashboardLayoutClient";

export default function CGPAPredictorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
