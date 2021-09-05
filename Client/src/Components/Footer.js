import React from 'react';
import { AppBar } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';

export default function Footer() {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                &copy; 2021 Real Estate Recommendation App
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}