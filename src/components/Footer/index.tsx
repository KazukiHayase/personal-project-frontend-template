import { Box, Container, Divider, Stack, Typography } from '@mui/material';

import { NextLinkComposed } from '@/components/Link';
import { pagesPath } from '@/lib/$path';

export const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Container maxWidth="lg">
        <Stack spacing={1}>
          <Typography
            component={NextLinkComposed}
            to={pagesPath.$url()}
            sx={{ ':hover': { textDecoration: 'underline' } }}
          >
            ホーム
          </Typography>
          <Typography
            component={NextLinkComposed}
            target="_blank"
            rel="noopener noreferrer"
            to="https://cautious-zenith-09d.notion.site/0781eb93b2074a42b46bb02cb9920924"
            sx={{ ':hover': { textDecoration: 'underline' } }}
          >
            利用規約
          </Typography>
          <Typography
            component={NextLinkComposed}
            target="_blank"
            rel="noopener noreferrer"
            to="https://cautious-zenith-09d.notion.site/ec91d5950fa44ef7931b04c1b0528fbe"
            sx={{ ':hover': { textDecoration: 'underline' } }}
          >
            プライバシーポリシー
          </Typography>
          <Typography
            component={NextLinkComposed}
            target="_blank"
            rel="noopener noreferrer"
            to="https://twitter.com/bbF1wIpYYsTc1yN"
            sx={{ ':hover': { textDecoration: 'underline' } }}
          >
            運営者
          </Typography>
        </Stack>
        <Divider sx={{ mt: 3, mb: 1 }}></Divider>
        <Typography color="text.secondary" sx={{ textAlign: 'center' }}>
          © 2022
        </Typography>
      </Container>
    </Box>
  );
};
