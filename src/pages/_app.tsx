import { DefaultLayout } from '@/layouts/DefaultLayout';
import { ThemeProvider } from '@mui/system';
import { getInitialPreloadedQuery, getRelayProps } from 'relay-nextjs/app';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { theme } from '@/styles/theme';
import { SnackbarProvider } from 'notistack';
import { CssBaseline } from '@mui/material';
import { getClientEnvironment } from '@/lib/relay/client_environment';
import { ErrorBoundary } from 'react-error-boundary';
import { Error } from '@/components/Error';
import Head from 'next/head';

const clientEnv = getClientEnvironment();
const initialPreloadedQuery = getInitialPreloadedQuery({
  createClientEnvironment: () => getClientEnvironment()!,
});

// https://nextjs.org/docs/basic-features/layouts#with-typescript
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const relayProps = getRelayProps(pageProps, initialPreloadedQuery);
  const env = relayProps.preloadedQuery?.environment ?? clientEnv!;

  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <>
      <Head>
        {/* TODO: title設定 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>title</title>
      </Head>
      <ErrorBoundary
        FallbackComponent={() => (
          <DefaultLayout>
            <Error />
          </DefaultLayout>
        )}
      >
        <RelayEnvironmentProvider environment={env}>
          <SnackbarProvider
            maxSnack={1}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {getLayout(<Component {...pageProps} {...relayProps} />)}
            </ThemeProvider>
          </SnackbarProvider>
        </RelayEnvironmentProvider>
      </ErrorBoundary>
    </>
  );
}
