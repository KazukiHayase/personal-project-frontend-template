'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import grey from '@mui/material/colors/grey';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function NotFound() {
  return (
    <Box sx={{ py: 20 }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ textAlign: 'center', color: grey[600] }}>
          お探しのページは存在しないか、すでに削除された可能性があります
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
          <Button
            variant="contained"
            onClick={() => window.location.assign(window.location.origin)}
            sx={{ fontWeight: 'bold' }}
          >
            トップページへ戻る
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
