import { Roboto, Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const poppins = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
})

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#19385D',
        },
        secondary: {
            main: '#FFBD02',
        },
    },
    typography: {
        fontFamily: poppins.style.fontFamily,
        h2: {
            fontWeight: 700,
            letterSpacing: 0,
            lineHeight: 'normal',
            textAlign: 'center',
        },
        h3: {
            fontSize: 20,
            fontWeight: 800,
        },
        subtitle1: {
            color: 'white',
            fontWeight: 300,
        },
        body1: {
            fontWeight: 500,
        },
        caption: {
            fontSize: 14,
            fontWeight: 400,
        }
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.severity === 'info' && {
                        backgroundColor: '#60a5fa',
                    }),
                }),
            },
        },
    },
});

export default theme;