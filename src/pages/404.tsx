import { Box, Button, Container, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
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
};

export default IndexPage;
