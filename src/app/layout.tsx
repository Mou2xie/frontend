import type { Metadata } from "next";
import "./globals.css";
import { AuthState_Sync } from "@/components/AuthState_Sync";

export const metadata: Metadata = {
  title: "Build My Agent",
  description: "Build My Agent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <AuthState_Sync />
        {children}
      </body>
    </html>
  );
}
