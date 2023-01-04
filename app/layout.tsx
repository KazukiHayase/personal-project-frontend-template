import { RootLayout } from './RootLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="jp">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
