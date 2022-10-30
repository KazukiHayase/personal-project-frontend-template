import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { NextLinkComposed } from '@/components/Link';
import { pagesPath } from '@/lib/$path';

export const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
      <Container>
        <Toolbar disableGutters>
          <Typography
            component={NextLinkComposed}
            to={pagesPath.$url()}
            sx={{ mr: 3, fontWeight: 'bold' }}
          >
            ロゴ
          </Typography>
          <Box sx={{ flex: 1 }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
