
import { Topbar_LandingPage } from "@/components/Topbar_LandingPage";

export default function LandingPageLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div>
            <Topbar_LandingPage />
            {children}
        </div>
    );
}