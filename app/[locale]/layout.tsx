import { DefaultLayout } from '@_app/layouts/ui/default/DefaultLayout'
import { AppProviders } from '@_app/providers/AppProviders'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing, type Locale } from '@_shared/config/i18n/routing'
import { OG_LOCALES, SITE_URL } from '@_shared/model/constants'

import type { Metadata, Viewport } from "next";
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
  display: "optional",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const { title, description } = messages.meta;
  const url = `/${locale}/`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, `/${l}/`])),
        "x-default": `/${routing.defaultLocale}/`,
      },
    },
    openGraph: {
      type: "profile",
      locale: OG_LOCALES[locale as Locale],
      url,
      siteName: title,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const viewport: Viewport = {
  viewportFit: "cover",
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
