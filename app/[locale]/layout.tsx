import { DefaultLayout } from '@_app/layouts/ui/default/DefaultLayout'
import { AppProviders } from '@_app/providers/AppProviders'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@_shared/config/i18n/routing'

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
  title: "Maks Сhuprin CV",
  description: "Author: Maks Chuprin",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${jetbrainsMono.variable} ${inter.variable}`}
    >
      <body>
        <AppProviders locale={locale} messages={messages}>
          <DefaultLayout>
            {children}
          </DefaultLayout>
        </AppProviders>
      </body>
    </html>
  );
}
