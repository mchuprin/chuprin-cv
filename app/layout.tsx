import { DefaultLayout } from '@_app/layouts/ui/default/DefaultLayout'
import { AppProviders } from '@_app/providers/AppProviders'

import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "@_app/styles/styles.scss";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cyberpunk CV",
  description: "Author: Maks Chuprin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${inter.variable}`}
    >
      <body>
        <AppProviders>
          <DefaultLayout>
            {children}
          </DefaultLayout>
        </AppProviders>
      </body>
    </html>
  );
}
