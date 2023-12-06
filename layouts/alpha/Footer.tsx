import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="subtitle1" color="text.p" align="center">
      Next-Ts {new Date().getFullYear()} | {'  '}
      <Link color="inherit" href="https://mui.com/">
        Legal
      </Link>
    </Typography>
  );
}

export default function Footer() {

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.primary.main
            : theme.palette.primary.dark,
      }}
    >
      <Container maxWidth="lg">
        <Copyright />
      </Container>
    </Box>
  );
}
