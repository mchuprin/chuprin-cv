import { AppProviders } from './providers/AppProviders';

interface AppProps {
    className?: string
}

export const App = ({ className }: AppProps) => {
    return (
        <AppProviders>
            <div>Hoba</div>
        </AppProviders>
    );
};
