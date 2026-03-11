
import { Navbar_LandingPage } from "@/components/Navbar_LandingPage";

export default function LandingPageLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar_LandingPage />
            {children}
        </div>
    );
}