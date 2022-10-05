import { ThemeProvider } from 'styled-components';
import Layout from './Layout';
import Theme from '../styles/Theme';
import GlobalStyle from '../styles/GlobalStyle';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <ThemeProvider theme={Theme}>
                    <GlobalStyle />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </Hydrate>
        </QueryClientProvider>
    )
}