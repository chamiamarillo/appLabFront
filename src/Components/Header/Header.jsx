import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import Theme1 from '../Theme/Theme1';
import logo from '../Image/logo_unahur.png';
const themeHeader=createTheme({
  palette:{
      primary:{
          main:"#685E5E"
      }
  },
})
export default function Header(props) {
//  const [auth, setAuth] = React.useState(props.isLogged);
  const [anchorEl, setAnchorEl] = React.useState(null);
/*
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
*/
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={Theme1}>
    <Box sx={{ flexGrow: 1 }}>
        
      <AppBar style={{ backgroundColor: "#b4e0bc" }} position="static" 
      maxwidth="lg"
      >
        
        <Toolbar>
        <img width={150} heigth={60} src={logo} alt="logo" />
        <ThemeProvider theme={themeHeader}>
          <Typography variant="h6" align='center'color={"primary.main"} component="div" sx={{ flexGrow: 1 }}>
            {props.texto}
          </Typography>
          </ThemeProvider>
          {props.isLogged && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar></Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              > 
                <MenuItem onClick={handleClose}> Cerrar sesión </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
     
    </Box>
    </ThemeProvider>
  );
}