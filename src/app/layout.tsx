import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
