import styled from '@emotion/styled';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import Button from '@mui/material/Button';


import { useTheme } from '@mui/material';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export default function TopAppBar() {

  const theme = useTheme()

  const styles = {
    header: {
      backgroundColor: 'primary.main',
      mb: '1.45rem' // margin bottom
    },
    link: {
      color: 'primary.contrastText',
      textDecoration: 'none'
    },
    title: {
      my: 0,  // top/bottom margin
      mx: 'auto', // left/right margin
      maxWidth: 960,
      py: '1.45rem', // top/bottom padding
      px: '1.0875rem' // left/right padding
    },
    customComponent: { // to be used with none MUI components
      backgroundColor: theme.palette.primary.main,
      flexGrow: 0
    }
  }
  return (
    <Box sx={styles.customComponent}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Comminity
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
 
