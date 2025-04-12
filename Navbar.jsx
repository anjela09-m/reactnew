import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        My Blog Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/d">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/b">
          Add Blog
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
