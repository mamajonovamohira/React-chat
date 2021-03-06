import { Box, Button, Container, Grid } from '@material-ui/core';
import React from 'react';

function Login() {
  return (
    <Container>
      <Grid container
        style={{height: window.innerHeight - 50}}
        alignItems={"center"}
        justify={"center"}
      >
        <Grid style={{width: 400, background: "lightgray"}}
          container
          alignItems={"center"}
          direction={"column"}
        >
          <Box p={5}>
            <Button variant={"outlined"}>Войти с помощъю GOOGLE</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;