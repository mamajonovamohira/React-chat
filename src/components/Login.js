import { Container, Grid } from '@material-ui/core';
import React from 'react';

function Login() {
  return (
    <Container>
      <Grid container
        style={{height: window.innerHeight - 50}}
        alignItems={"center"}
        justify={"center"}
      >
        Hello
      </Grid>
    </Container>
  );
}

export default Login;