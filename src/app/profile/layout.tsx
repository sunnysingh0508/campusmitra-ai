import { DashboardLayoutClient } from "@/components/dashboard/layout/DashboardLayoutClient";

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
