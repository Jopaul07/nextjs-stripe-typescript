import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Header from './Header';
import Footer from './Footer';
import ThemeRegistry from '../../components/themeRegistry/ThemeRegistry';

interface LayoutProps {
  children: React.ReactNode;
  mainHeading?: string;
  subHeading?: string;
  rightIcon?: string;
}

export default function Layout({ children, mainHeading, subHeading, rightIcon }: LayoutProps) {
  return (
    <ThemeRegistry>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Header mainHeading={mainHeading} subHeading={subHeading} rightIcon={rightIcon} />

        <Container
          component="main"
          maxWidth="xl"
          sx={{ mt: 2, mb: 2, flex: 1, display: "flex", }}
        >
          {children}
        </Container>

        <Footer />

      </Box>
    </ThemeRegistry>
  );
}