'use client';

import { DefaultLayout } from '@/layouts/DefaultLayout';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { theme } from '@/styles/theme';
import { ErrorBoundary } from 'react-error-boundary';
import { Error } from '@/components/Error';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={() => (
        <DefaultLayout>
          <Error />
        </DefaultLayout>
      )}
    >
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DefaultLayout>{children}</DefaultLayout>
        </ThemeProvider>
      </SnackbarProvider>
    </ErrorBoundary>
  );
};
