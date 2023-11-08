import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';

interface HeaderProps {
    mainHeading?: string;
    subHeading?: string;
    rightIcon?: string;
}

export default function Header({ mainHeading, subHeading, rightIcon }: HeaderProps) {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                justifyContent: "center",
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.primary.main
                        : theme.palette.primary.dark,
            }}
        >
            <Toolbar sx={{ alignItems: "flex-end" }}>
                <Typography
                    variant="h5"
                    color="secondary"
                    align="center"
                    noWrap
                    sx={{ flex: 1, fontWeight: '500' }}
                >
                    {mainHeading}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    sx={{
                        position: 'absolute', right: { sm: 10, md: 50 }, maxWidth: { sm: '25vh', md: '50vh' }, display: { xs: 'none', sm: 'block', md: 'block' }
                    }}
                >
                    <Link color="inherit">
                        {rightIcon}
                    </Link>
                </Typography>
            </Toolbar>
            <Typography variant="subtitle1" align="center" sx={{ mb: 2, }}>
                <Link color="inherit">
                    {subHeading}
                </Link>
            </Typography>
        </AppBar>
    );
}