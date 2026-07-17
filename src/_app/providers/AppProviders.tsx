import { ActiveComponentsProvider } from "@_shared/lib/activeComponents/activeComponentsContext";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

interface AppProvidersProps {
    children: ReactNode
    locale: string
    messages: Record<string, string>
}

export const AppProviders = ({ children, locale, messages }: AppProvidersProps) => {
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <ActiveComponentsProvider>
                {children}
            </ActiveComponentsProvider>
        </NextIntlClientProvider>
    );
};
