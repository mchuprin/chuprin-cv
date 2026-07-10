import { ActiveComponentsProvider } from "@_shared/lib/activeComponents/activeComponentsContext";
import { ReactNode } from "react";

interface AppProvidersProps {
    children: ReactNode
}

export const AppProviders = ({ children }: AppProvidersProps) => {
    return (
        <ActiveComponentsProvider>
            {children}
        </ActiveComponentsProvider>
    );
};
