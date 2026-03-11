"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Features", href: "/" },
    { label: "Pricing", href: "/" },
    { label: "About", href: "/" },
];

// hightlight navtab is not done yet
export function Navbar_LandingPage() {
    const pathname = usePathname();
    return (
        <div className=" bg-gray-200 h-16 flex items-center justify-between px-20">
            <p className="text-xl font-bold">Build My Agent</p>
            <div className=" space-x-10">
                {
                    navItems.map(({ label, href }) => <Link href={href} key={label}>{label}</Link>)
                }
                <Link href="/auth/login" className=" px-5 py-2 bg-gray-400 rounded text-white">Login</Link>
            </div>
        </div>
    )
}
