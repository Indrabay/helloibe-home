import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "helloibe",
  description: "ibe's personal website contains exciting things",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
