import { DashboardLayoutClient } from "@/components/dashboard/layout/DashboardLayoutClient";

export default function NotesScannerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
