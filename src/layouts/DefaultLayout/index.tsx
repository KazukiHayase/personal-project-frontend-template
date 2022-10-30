import { Divider, Container } from '@mui/material';
import { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import grey from '@mui/material/colors/grey';
import { Box } from '@mui/system';

type DefaultLayoutProps = {
  readonly children: ReactNode;
};

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Divider />
      <Box sx={{ bgcolor: grey[200] }}>
        <Container sx={{ py: 8 }}>{children}</Container>
      </Box>
      <Divider />
      <Footer />
    </>
  );
};
