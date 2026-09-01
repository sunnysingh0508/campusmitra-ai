import { DashboardLayoutClient } from "@/components/dashboard/layout/DashboardLayoutClient";

export default function NotesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
