import type { Metadata } from "next";
import Provider from "./provider";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";

export const metadata: Metadata = {
  title: "helloibe",
  description: "ibe's personal website | backend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-primary-background"
        style={{ height: '100%', backgroundSize: '100%' }}
      >
        <Provider>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </Provider>
      </body>
    </html>
  );
}
