import type { Metadata } from "next";
import "./globals.css";
import { createClient } from "@/libs/supabase/server";
import { AuthState_Sync } from "@/components/AuthState_Sync";

export const metadata: Metadata = {
  title: "Build My Agent",
  description: "Build My Agent",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <AuthState_Sync user={user} />
        {children}
      </body>
    </html>
  );
}
